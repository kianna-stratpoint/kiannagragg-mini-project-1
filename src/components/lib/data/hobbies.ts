export type HobbyEntry = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  size?: "sm" | "md" | "lg";
};

export const hobbiesData: HobbyEntry[] = [
  {
    id: 1,
    title: "{ Baking }",
    description:
      "I enjoy baking because its steps are precise and I love sharing food!",
    imagePath: "/hobbies/baking.png",
    size: "sm",
  },
  {
    id: 2,
    title: "{ Attending Music Fests }",
    description: "Music fests makes me appreciate OPM songs and artists more!",
    imagePath: "/hobbies/music_fests.png",
    size: "md",
  },
  {
    id: 3,
    title: "{ Running, Walking }",
    description:
      "I go for a run or walk since it helps with regulating my mental health.",
    imagePath: "/hobbies/running.png",
    size: "sm",
  },
  {
    id: 4,
    title: "{ Doing groceries }",
    description:
      "I love doing grocery shopping and exploring healthier food options.",
    imagePath: "/hobbies/groceries.png",
    size: "lg",
  },
  {
    id: 5,
    title: "{ Building Legos }",
    description: "It feels satisfying when you finish building a Lego figure.",
    imagePath: "/hobbies/legos.png",
    size: "sm",
  },
  {
    id: 6,
    title: "{ Traveling }",
    description:
      "During vacations, I spend time with my family and travel outside the city.",
    imagePath: "/hobbies/traveling.png",
    size: "lg",
  },
  {
    id: 7,
    title: "{ Thrifting clothes }",
    description: "FUN FACT: 50% of my clothes are thrifted and hand-me-downs.",
    imagePath: "/hobbies/thrifting.png",
    size: "sm",
  },
  {
    id: 8,
    title: "{ Watching films }",
    description:
      "I can watch movies all day if given the time! I enjoy psychological thriller films.",
    imagePath: "/hobbies/watching_films.png",
    size: "md",
  },
  {
    id: 9,
    title: "{ Drawing }",
    description:
      "I rarely do art, but when i do, i make sure i put my best effort!",
    imagePath: "/hobbies/drawing.png",
    size: "sm",
  },
];
