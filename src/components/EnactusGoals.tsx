import React from "react";
import { EnactusGoalsList } from "../constants/data";
import { EnactusGoalCardProps } from "./types";
import EnactusGoalCard from "./cards/EnactusGoalCard";

function EnactusGoals() {
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

export default EnactusGoals;
