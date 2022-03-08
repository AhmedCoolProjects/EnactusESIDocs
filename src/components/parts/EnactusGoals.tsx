import { EnactusGoalsList } from "@site/src/constants";
import { EnactusGoalCardProps } from "@site/types";
import React from "react";
import { EnactusGoalCard } from "../cards";

export function EnactusGoals() {
  return (
    <div>
      <h1 className="uppercase text-4xl mt-4 underline font-semibold text-center">
        THE 2030 GLOBAL GOALS
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-4 py-4 container">
        {EnactusGoalsList.map((goal: EnactusGoalCardProps) => (
          <EnactusGoalCard {...goal} key={goal.number} />
        ))}
      </div>
    </div>
  );
}
