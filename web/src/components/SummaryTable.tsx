import dayjs from "dayjs";
import React, {useEffect, useState} from "react";
import {api} from "../lib/axios";
import {generateDatesFromYearBeginning} from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDateSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDateSize - summaryDates.length;

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get("summary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <div className="w-full flex max-[1024px]:grid max-[1024px]:grid-rows-1 max-[1024px]:w-10 max-[1024px]:m-auto max-[1024px]:justify-evenly">
      <div className="grid grid-rows-7 grid-flow-row gap-3 max-[1024px]:flex max-[1024px]:flex-row">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3 max-[1024px]:grid-cols-7 max-[1024px]:grid-flow-row">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({length: amountOfDaysToFill}).map((_, i) => {
            return (
              <div
                key={i}
                className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
