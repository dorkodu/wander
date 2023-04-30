export type Idea = {
  title: string;
  text: string;
  tags: string[];
};

export const garden: Idea[] = [
  {
    title: `What is a "Digital Garden"?`,
    text: `
      Digital gardening is the practice of cultivating a personal digital space, 
      typically a website, 
      to capture and share one's thoughts, ideas, and interests 
      in an organically evolving and interconnected manner, 
      often using hypertextual formats that allow for exploration and discovery.
    `,
    tags: ["digital-gardening", "definition"],
  },
];
