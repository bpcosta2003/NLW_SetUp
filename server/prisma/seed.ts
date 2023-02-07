import {PrismaClient} from "@prisma/client";
import {ObjectId} from "bson";

const prisma = new PrismaClient();

const firstHabitId = new ObjectId().toString();
const firstHabitCreationDate = new Date("2023-01-01T03:00:00.000");

const secondHabitId = new ObjectId().toString();
const secondHabitCreationDate = new Date("2023-01-02T03:00:00.000");

const thirdHabitId = new ObjectId().toString();
const thirdHabitCreationDate = new Date("2023-01-03T03:00:00.000");

async function run() {
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: "Beber 3L água",
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
            {week_day: 6},
            {week_day: 7},
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: "Ir na academia",
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: "Dormir 8h",
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
          ],
        },
      },
    }),
  ]);

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date("2023-01-02T03:00:00.000z"),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          },
        },
      },
    }),

    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date("2023-01-06T03:00:00.000z"),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          },
        },
      },
    }),

    /**
     * Habits (Complete/Available): 2/2
     */
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date("2023-01-04T03:00:00.000z"),
        dayHabits: {
          create: [{habit_id: firstHabitId}, {habit_id: secondHabitId}],
        },
      },
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
