import { CreatorCardType } from "@site/types";
import React from "react";

export function CreatorCard(props: CreatorCardType) {
  const { name, image, github, profession } = props;
  return (
    <div className="flex ml-3 relative flex-row items-start">
      <img src={image} alt={name} className="rounded-full h-14 w-14 mr-3" />
      <div
        className="h-full
      flex flex-col justify-between 
      ">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-md text-left ">
          {name}
        </a>
        <p className="text-sm text-left">{profession}</p>
      </div>
    </div>
  );
}
