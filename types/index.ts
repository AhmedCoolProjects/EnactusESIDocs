// export enum EnactusGoalCardTitleEnum {
//   "No Poverty",
//   "Zero Hunger",
//   "Good Health & Well-being",
//   "Quality Education",
//   "Gender Equality",
//   "Clean water & sanitation",
//   "affordable & clean energy",
//   "decent work & economic growth",
//   "Industry, innovation & infrastructure",
//   "reduced indequalities",
//   "sustainable cities & communities",
//   "responsible consumption & production",
//   "climate action",
//   "life below water",
//   "life on land",
//   "peace, justice & strong institutions",
//   "partnership for the goals",
// }
export type EnactusGoalCardProps = {
  // title: EnactusGoalCardTitleEnum;
  title: string;
  number: number;
  description: string;
  image: string;
  color: string;
};
export type BoardMemberCardType = {
  id: string;
  position: number;
  fullName: string;
  image: string;
  // post: BoardMemberCardPostEnum;
  post: string;
  linkedIn?: string;
  outlook?: string;
};
// until new version of ts is released: issue https://github.com/microsoft/TypeScript/issues/40793
// export enum BoardMemberCardPostEnum {
//   TEAM_LEADER = translate({
//     message: "Team Leader",
//     description: "The team leader",
//   }),
//   VICE_TEAM_LEADER = "Vice Team Leader",
//   OUTREACH_COMMUNITY_MANAGEMENT_HEAD = "Outreach & Community Management Head",
//   PROJECTS_HEAD = "Projects Head",
//   OPPORTUNITIES_WORKSHOPS_HEAD = "Opportunities & Workshops Head",
//   EVENTS_HEAD = "Events Head",
// }
export type CreatorCardType = {
  name: string;
  image: string;
  profession: string;
  github?: string;
  link?: string;
};
