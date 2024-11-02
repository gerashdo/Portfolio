
interface Project {
  title: string;
  description: string;
  tools: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "TestYourself",
    description: "A web app that lets users create custom quizzes or surveys, fostering community engagement through shared responses.",
    tools: ["Tailwind", "React.js", "Express.js", "PostgreSQL", "TypeScript", "TanStack Query", "Recoil"],
    link: "https://forms-project-virid.vercel.app/",
    image: "/src/assets/images/testyourself.png",
  },
  {
    title: "ResizeIt",
    description: "An intuitive app for resizing photos without compromising quality, plus it generates PDF contact sheets for easy organization.",
    tools: ["React.js", "CSS", "Drag and Drop", "wouter", "TypeScript"],
    link: "https://resizeit.vercel.app/",
    image: "/src/assets/images/resize.png",
  },
  {
    title: "CollabPresentation",
    description: "A collaborative presentation platform for creating and sharing slides with real-time editing and updates.",
    tools: ["React", "Express.js", "WebSockets", "PostgreSQL", "TypeScript", "Recoil", "TanStack Query"],
    link: "https://collab-presentations-ger.onrender.com/",
    image: "/src/assets/images/colab.png",
  },
  {
    title: "FakeDataGenerator",
    description: "Generate randomized user data with customizable error rates for testing and development purposes.",
    tools: ["Next.js", "Tailwind", "TypeScript", "seedrandom", "Infinite Scroll"],
    link: "https://fake-random-users-generation.vercel.app/",
    image: "/src/assets/images/fakeusers.png",
  }
];
