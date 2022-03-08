import { BoardMemberCardType } from "@site/types";
import React from "react";

export function BoardMemberCard(props: BoardMemberCardType) {
  const { position, fullName, image, post, linkedIn, outlook } = props;
  return (
    <div className="w-full shadow-md shadow-gray-700 flex flex-col items-center p-3 space-y-3">
      <img
        className="w-[160px] h-[160px] rounded-full object-cover"
        src={image}
        alt={fullName}
      />
      <h1 className="text-2xl ">{fullName}</h1>
      <h1 className="text-xl opacity-80 ">{post}</h1>
      <div className="flex flex-row items-center justify-around py-3 w-full ">
        <a href={linkedIn} target="_blank">
          <img src="img/logos/linkedin.svg" className="w-10 h-10" />
        </a>
        <a href={`mailto:${outlook}`} target="_blank">
          <img src="img/logos/outlook.svg" className="w-10 h-10 " />
        </a>
      </div>
    </div>
  );
}
