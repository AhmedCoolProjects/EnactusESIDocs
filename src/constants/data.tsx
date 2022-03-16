import { translate } from "@docusaurus/Translate";
import {
  BoardMemberCardType,
  EnactusGoalCardProps,
  // EnactusGoalCardTitleEnum,
} from "@site/types";
import { IMAGES } from "./images";

export const EnactusGoalsList: EnactusGoalCardProps[] = [
  {
    title: translate({ message: "No Poverty", description: "Goal 1" }),
    number: 1,
    // description: "END POVERTY IN ALL ITS FORMS EVERYWHERE.",
    description: translate({
      message: "END POVERTY IN ALL ITS FORMS EVERYWHERE.",
      description: "Goal 1",
    }),
    image: "img/goals/1.png",
    color: "#C71E35",
  },
  {
    // title: EnactusGoalCardTitleEnum["Zero Hunger"],
    title: translate({ message: "Zero Hunger", description: "Goal 2" }),
    number: 2,
    // description:
    //   "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    description: translate({
      message:
        "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
      description: "Goal 2",
    }),
    image: "img/goals/2.png",
    color: "#9A7429",
  },
  {
    // title: EnactusGoalCardTitleEnum["Good Health & Well-being"],
    title: translate({
      message: "Good Health & Well-being",
      description: "Goal 3",
    }),
    number: 3,
    // description:
    //   "ENSURE HEALTHY LIVES AND PROMOTE WELL-BEING FOR ALL AT ALL AGES.",
    description: translate({
      message:
        "ENSURE HEALTHY LIVES AND PROMOTE WELL-BEING FOR ALL AT ALL AGES.",
      description: "Goal 3",
    }),
    image: "img/goals/3.png",
    color: "#346D30",
  },
  {
    // title: EnactusGoalCardTitleEnum["Quality Education"],
    title: translate({ message: "Quality Education", description: "Goal 4" }),
    number: 4,
    image: "img/goals/4.png",
    color: "#901722",
    // description:
    //   "ENSURE INCLUSIVE AND EQUITABLE QUALITY EDUCATION AND PROMOTE LIFELONG LEARNING OPPORTUNITIES FOR ALL.",
    description: translate({
      message:
        "ENSURE INCLUSIVE AND EQUITABLE QUALITY EDUCATION AND PROMOTE LIFELONG LEARNING OPPORTUNITIES FOR ALL.",
      description: "Goal 4",
    }),
  },
  {
    // title: EnactusGoalCardTitleEnum["Gender Equality"],
    title: translate({ message: "Gender Equality", description: "Goal 5" }),
    number: 5,
    color: "#EF402C",
    // description: "ACHIEVE GENDER EQUALITY AND EMPOWER ALL WOMEN AND GIRLS.",
    description: translate({
      message: "ACHIEVE GENDER EQUALITY AND EMPOWER ALL WOMEN AND GIRLS.",
      description: "5",
    }),
    image: "img/goals/5.png",
  },
  {
    // title: EnactusGoalCardTitleEnum[""],
    title: translate({ message: "Clean water & sanitation", description: "6" }),
    number: 6,
    color: "#1C90AE",
    image: "img/goals/6.png",
    // description:
    //   "ENSURE AVAILABILITY AND SUSTAINABLE MANAGEMENT OF WATER AND SANITATION FOR ALL.",
    description: translate({
      message:
        "ENSURE AVAILABILITY AND SUSTAINABLE MANAGEMENT OF WATER AND SANITATION FOR ALL.",
      description: "6",
    }),
  },
  {
    // title: EnactusGoalCardTitleEnum["affordable & clean energy"],
    title: translate({
      message: "Affordable & clean energy",
      description: "Goal 7",
    }),
    number: 7,
    color: "#CEA210",
    // description:
    //   "ENSURE ACCESS TO AFFORDABLE, RELIABLE, SUSTAINABLE AND MODERN ENERGY FOR ALL.",
    description: translate({
      message:
        "ENSURE ACCESS TO AFFORDABLE, RELIABLE, SUSTAINABLE AND MODERN ENERGY FOR ALL.",
      description: "Goal 7",
    }),
    image: "img/goals/7.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["decent work & economic growth"],
    title: translate({
      message: "Decent work & economic growth",
      description: "Goal 8",
    }),
    number: 8,
    color: "#5E1228",
    // description:
    //   "PROMOTE SUSTAINED, INCLUSIVE AND SUSTAINABLE ECONOMIC GROWTH, FULL AND PRODUCTIVE EMPLOYMENT AND DECENT WORK FOR ALL.",
    description: translate({
      message:
        "PROMOTE SUSTAINED, INCLUSIVE AND SUSTAINABLE ECONOMIC GROWTH, FULL AND PRODUCTIVE EMPLOYMENT AND DECENT WORK FOR ALL.",
      description: "Goal 8",
    }),
    image: "img/goals/8.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["Industry, innovation & infrastructure"],
    title: translate({
      message: "Industry, innovation & infrastructure",
      description: "Goal 9",
    }),
    number: 9,
    color: "#F26A2D",
    // description:
    //   "BUILD RESILIENT INFRASTRUCTURE, PROMOTE INCLUSIVE AND SUSTAINABLE INDUSTRIALIZATION AND FOSTER INNOVATION.",
    description: translate({
      message:
        "BUILD RESILIENT INFRASTRUCTURE, PROMOTE INCLUSIVE AND SUSTAINABLE INDUSTRIALIZATION AND FOSTER INNOVATION.",
      description: "Goal 9",
    }),
    image: "img/goals/9.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["reduced indequalities"],
    title: translate({
      message: "Reduced inequalities",
      description: "Goal 10",
    }),
    number: 10,
    color: "#850D3E",
    // description: "REDUCE INEQUALITY WITHIN AND AMONG COUNTRIES.",
    description: translate({
      message: "REDUCE INEQUALITY WITHIN AND AMONG COUNTRIES.",
      description: "Goal 10",
    }),
    image: "img/goals/10.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["sustainable cities & communities"],
    title: translate({
      message: "Sustainable cities & communities",
      description: "Goal 11",
    }),
    number: 11,
    color: "#F99E29",
    // description:
    // "MAKE CITIES AND HUMAN SETTLEMENTS INCLUSIVE, SAFE, RESILIENT AND SUSTAINABLE.",
    description: translate({
      message:
        "MAKE CITIES AND HUMAN SETTLEMENTS INCLUSIVE, SAFE, RESILIENT AND SUSTAINABLE.",
      description: "Goal 11",
    }),
    image: "img/goals/11.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["responsible consumption & production"],
    title: translate({
      message: "Responsible consumption & production",
      description: "Goal 12",
    }),
    number: 12,
    color: "#BF8D2C",
    // description: "ENSURE SUSTAINABLE CONSUMPTION AND PRODUCTION PATTERNS.",
    description: translate({
      message: "ENSURE SUSTAINABLE CONSUMPTION AND PRODUCTION PATTERNS.",
      description: "Goal 12",
    }),
    image: "img/goals/12.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["climate action"],
    title: translate({ message: "Climate action", description: "Goal 13" }),

    number: 13,
    color: "#407F46",
    // description: "TAKE URGENT ACTION TO COMBAT CLIMATE CHANGE AND ITS IMPACTS.",
    description: translate({
      message: "TAKE URGENT ACTION TO COMBAT CLIMATE CHANGE AND ITS IMPACTS.",
      description: "Goal 13",
    }),
    image: "img/goals/13.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["life below water"],
    title: translate({ message: "Life below water", description: "Goal 14" }),

    number: 14,
    color: "#176D98",
    // description:
    //   "CONSERVE AND SUSTAINABLY USE THE OCEANS, SEAS AND MARINE RESOURCES FOR SUSTAINABLE DEVELOPMENT.",
    description: translate({
      message:
        "CONSERVE AND SUSTAINABLY USE THE OCEANS, SEAS AND MARINE RESOURCES FOR SUSTAINABLE DEVELOPMENT.",
      description: "Goal 14",
    }),
    image: "img/goals/14.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["life on land"],
    title: translate({ message: "Life on land", description: "Goal 15" }),
    number: 15,
    color: "#5ABA47",
    // description:
    //   "PROTECT, RESTORE AND PROMOTE SUSTAINABLE USE OF TERRESTRIAL ECOSYSTEMS, SUSTAINABLY MANAGE FORESTS, COMBAT DESERTIFICATION, AND HALT AND REVERSE LAND DEGRADATION AND HALT BIODIVERSITY LOSS.",
    description: translate({
      message:
        "PROTECT, RESTORE AND PROMOTE SUSTAINABLE USE OF TERRESTRIAL ECOSYSTEMS, SUSTAINABLY MANAGE FORESTS, COMBAT DESERTIFICATION, AND HALT AND REVERSE LAND DEGRADATION AND HALT BIODIVERSITY LOSS.",
      description: "Goal 15",
    }),
    image: "img/goals/15.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["peace, justice & strong institutions"],
    title: translate({
      message: "Peace, justice & strong institutions",
      description: "Goal 16",
    }),
    number: 16,
    color: "#116090",
    // description:
    //   "PROMOTE PEACEFUL AND INCLUSIVE SOCIETIES FOR SUSTAINABLE DEVELOPMENT, PROVIDE ACCESS TO JUSTICE FOR ALL AND BUILD EFFECTIVE, ACCOUNTABLE AND INCLUSIVE INSTITUTIONS AT ALL LEVELS.",
    description: translate({
      message:
        "PROMOTE PEACEFUL AND INCLUSIVE SOCIETIES FOR SUSTAINABLE DEVELOPMENT, PROVIDE ACCESS TO JUSTICE FOR ALL AND BUILD EFFECTIVE, ACCOUNTABLE AND INCLUSIVE INSTITUTIONS AT ALL LEVELS.",
      description: "Goal 16",
    }),
    image: "img/goals/16.png",
  },
  {
    // title: EnactusGoalCardTitleEnum["partnership for the goals"],
    title: translate({
      message: "Partnership for the goals",
      description: "Goal 17",
    }),
    number: 17,
    color: "#0B2638",
    // description:
    //   "STRENGTHEN THE MEANS OF IMPLEMENTATION AND REVITALIZE THE GLOBAL PARTNERSHIP FOR SUSTAINABLE DEVELOPMENT.",
    description: translate({
      message:
        "STRENGTHEN THE MEANS OF IMPLEMENTATION AND REVITALIZE THE GLOBAL PARTNERSHIP FOR SUSTAINABLE DEVELOPMENT.",
      description: "Goal 17",
    }),
    image: "img/goals/17.png",
  },
];
export const BoardMembersList: BoardMemberCardType[] = [
  {
    id: "1",
    fullName: "Assia ERGUIGUE",
    image: IMAGES.assia_eraggragui,
    position: 1,
    post: translate({
      message: "Team Leader",
      description: "team leader",
    }),
    outlook: "assia.eraggragui@esi.ac.ma",
    linkedIn: "https://www.linkedin.com/in/ahmed-bargady/",
  },
  {
    id: "2",
    fullName: "Amine BENZAHRA",
    image: IMAGES.amin_ben,
    position: 2,
    post: translate({
      message: "Vice Team Leader",
      description: "vice team leader",
    }),
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
  {
    id: "3",
    fullName: "Ahmed BARGADY",
    image: IMAGES.ahmed_bargady,
    position: 3,
    post: translate({ message: "Projects Head", description: "projects head" }),
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
  {
    id: "4",
    fullName: "Hafsa BOANANI",
    image: IMAGES.hafsa,
    position: 4,
    post: translate({ message: "Events Head", description: "events head" }),
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "",
  },
];
