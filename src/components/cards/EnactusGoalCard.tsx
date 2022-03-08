import { EnactusGoalCardProps } from "@site/types";
import React from "react";

export function EnactusGoalCard(props: EnactusGoalCardProps) {
  const { color, title, number, description, image } = props;
  return (
    <div
      className="p-5 items-center justify-start flex flex-col space-y-3 border border-solid rounded-xl"
      style={{
        borderColor: color,
      }}>
      <div className="flex h-12 flex-row items-center space-x-2">
        <h1 className="text-2xl">{number}.</h1>
        <h1 className="text-xl text-opacity-80">{title}</h1>
      </div>
      <img
        src={image}
        alt={title}
        className="w-3/4 object-contain h-auto rounded-md"
      />
      <h1 className="text-base  lowercase font-light text-center">
        {description}
      </h1>
    </div>
  );
}
