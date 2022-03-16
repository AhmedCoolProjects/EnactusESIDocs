import Translate from "@docusaurus/Translate";
import { BoardMembersList } from "@site/src/constants";
import React from "react";
import { BoardMemberCard } from "../cards";

type Props = {
  ids: string[];
  title: string;
};

export function HomepageBoardMemebers(props: Props) {
  const { ids, title } = props;
  return (
    <>
      <h1 className="font-semibold text-4xl underline text-center mt-4">
        <Translate
          id="homepage.boardMembers.title"
          description="The title of the board members section">
          {title}
        </Translate>
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 py-5 w-full container">
        {BoardMembersList.map((member, indx) => {
          if (ids.includes(member.id))
            return <BoardMemberCard key={indx} {...member} />;
        })}
      </div>
    </>
  );
}
