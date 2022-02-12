import React from "react";
import BoardMemberCard, {
  BoardMemberCardType,
  BoardMemberCardPostEnum,
} from "./cards/BoardMemberCard";

const BoardMembersList: BoardMemberCardType[] = [
  {
    fullName: "Ahmed Bargady",
    image: "/img/members/ahmed_bargady.jpg",
    position: 4,
    post: BoardMemberCardPostEnum["Projects Head"],
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "https://www.linkedin.com/in/ahmed-bargady/",
  },
  {
    fullName: "Ahmed Bargady",
    image: "/img/members/ahmed_bargady.jpg",
    position: 4,
    post: BoardMemberCardPostEnum["Projects Head"],
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
  {
    fullName: "Ahmed Bargady",
    image: "/img/members/ahmed_bargady.jpg",
    position: 4,
    post: BoardMemberCardPostEnum["Projects Head"],
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
  {
    fullName: "Ahmed Bargady",
    image: "/img/members/ahmed_bargady.jpg",
    position: 4,
    post: BoardMemberCardPostEnum["Projects Head"],
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
  {
    fullName: "Ahmed Bargady",
    image: "/img/members/ahmed_bargady.jpg",
    position: 4,
    post: BoardMemberCardPostEnum["Projects Head"],
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
];

function HomepageBoardMemebers() {
  return (
    <>
      <h1 className="font-semibold text-4xl underline text-center mt-4">
        ENACTUS ESI BOARD
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-2 py-5 w-full container">
        {BoardMembersList.map((member, indx) => (
          <BoardMemberCard key={indx} {...member} />
        ))}
      </div>
    </>
  );
}

export default HomepageBoardMemebers;
