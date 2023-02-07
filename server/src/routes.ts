import { Day, DayHabit, Habit } from "@prisma/client";
import dayjs from "dayjs";
import { FastifyInstance } from "fastify";
import { map, number, z } from "zod";
import { prisma } from "./lib/prisma";

export async function main(app: FastifyInstance) {
  
  app.post("/habits", async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });

    const {title, weekDays} = createHabitBody.parse(request.body);

    const today = dayjs().startOf("day").toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  });

  app.get("/day", async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const {date} = getDayParams.parse(request.query);

    const parsedDate = dayjs(date).startOf("day");
    const weekDay = parsedDate.get("day");

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      },
    });

    const completedHabits =
      day?.dayHabits.map((dayHabit) => {
        return dayHabit.habit_id;
      }) ?? [];

    return {
      possibleHabits,
      completedHabits,
    };
  });

  app.patch("/habits/:id/toggle", async (request) => {

    const toggleHabitParams = z.object({
      id: z.string(),
    });

    const {id} = toggleHabitParams.parse(request.params);
    const today = dayjs().startOf("day").toDate();

    let day = await prisma.day.findUnique({
      where: {
        date: today,
      },
    });

    if (!day) {
      day = await prisma.day.create({
        data: {
          date: today,
        },
      });
    }

    const dayHabit = await prisma.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id,
        },
      },
    });

    if (dayHabit) {
      await prisma.dayHabit.delete({
        where: {
          id: dayHabit.id,
        },
      });
    } else {
      await prisma.dayHabit.create({
        data: {
          day_id: day.id,
          habit_id: id,
          
        },
      });
    }
  });

  app.get("/summary", async (request) => {

    let summaryData = []; 
    let daysList: Date[] = []
    let weekDays = [];
    let week_day_numbers: number[] = []
    let amountResult: number[] = []
    

    const days = await prisma.day.findMany({
      select:{
        date:true,
        id:true

      }
    });

    const day_habits = await prisma.day.findMany({
      include: {
        _count:{
          select:{dayHabits:true}
        }
      }
    });
    
    
    for (let i = 0; i < days.length; i++) {

      daysList.push(days[i].date)

      weekDays.push({
        date: days[i].date,
        week_days: dayjs(days[i].date).get('day')
      })
      
    }
    
    for (let i = 0; i < weekDays.length; i++) {
      week_day_numbers.push(Number(weekDays[i].week_days))
    }
    
    const resultList = (await runQueries(daysList,week_day_numbers)).map( (item, i)=>{
       amountResult.push(item)
    });

    for (let i = 0; i < days.length; i++) {
      
      summaryData.push({ 
        date: days[i].date, 
        id: days[i].id,
        completed: day_habits[i]._count.dayHabits,
        amount: amountResult[i]
      });
    }
      
    return summaryData;

    
  });


  async function runQueries(days: Date[], week_days: number[]) {
    
    const amount = [];
  
    for (let i = 0; i < week_days.length; i++) {

        const amountHabits = await prisma.habit.count({
          where:{
            created_at: {
              lte: days[i],
            },
            weekDays:{
              some:{
                week_day: week_days[i]
              }
            }
          }
        })
        
        amount.push(amountHabits);
    }
  
    return amount;
  }
  

};
