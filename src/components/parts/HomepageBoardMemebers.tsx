import Translate from "@docusaurus/Translate";
import { BoardMembersList } from "@site/src/constants";
import React from "react";
import { BoardMemberCard } from "../cards";

export function HomepageBoardMemebers() {
  return (
    <>
      <h1 className="font-semibold text-4xl underline text-center mt-4">
        <Translate
          id="homepage.boardMembers.title"
          description="The title of the board members section">
          ENACTUS ESI BOARD
        </Translate>
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-2 py-5 w-full container">
        {BoardMembersList.map((member, indx) => (
          <BoardMemberCard key={indx} {...member} />
        ))}
      </div>
    </>
  );
}
