import React from "react";
// import "../../css/tailwindcss.custom.css";

export type BoardMemberCardType = {
  position: number;
  fullName: string;
  image: string;
  post: BoardMemberCardPostEnum;
  linkedIn?: string;
  outlook?: string;
};
export enum BoardMemberCardPostEnum {
  "Team Leader",
  "Vice Team Leader",
  "Outreach & Community Management Head",
  "Projects Head",
  "Opportunities & Workshops Head",
  "Events Head",
}

function BoardMemberCard(props: BoardMemberCardType) {
  const { position, fullName, image, post, linkedIn, outlook } = props;
  return (
    <div className="w-full shadow-md shadow-gray-700 flex flex-col items-center p-3 space-y-3">
      <img
        className="w-[160px] h-[160px] rounded-full object-cover"
        src={image}
        alt={fullName}
      />
      <h1 className="text-2xl ">{fullName}</h1>
      <h1 className="text-xl opacity-80 ">{BoardMemberCardPostEnum[post]}</h1>
      <div className="flex flex-row items-center justify-around py-3 w-full ">
        <a href={linkedIn} target="_blank">
          <img src="/img/logos/linkedin.svg" className="w-10 h-10" />
        </a>
        <a href={`mailto:${outlook}`} target="_blank">
          <img src="/img/logos/outlook.svg" className="w-10 h-10 " />
        </a>
      </div>
    </div>
  );
}

export default BoardMemberCard;
