export enum EnactusGoalCardTitleEnum {
  "No Poverty",
  "Zero Hunger",
  "Good Health & Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean water & sanitation",
  "affordable & clean energy",
  "decent work & economic growth",
  "Industry, innovation & infrastructure",
  "reduced indequalities",
  "sustainable cities & communities",
  "responsible consumption & production",
  "climate action",
  "life below water",
  "life on land",
  "peace, justice & strong institutions",
  "partnership for the goals",
}
export type EnactusGoalCardProps = {
  title: EnactusGoalCardTitleEnum;
  number: number;
  description: string;
  image: string;
  color: string;
};
