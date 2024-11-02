
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
    description: "Web app to create templates of quizzes or surveys to be answered for the comunity.",
    tools: ["Tailwind", "React.js", "Express.js", "PostgreSQL", "TypeScript", "TanStack Query", "Recoil"],
    link: "https://forms-project-virid.vercel.app/",
    image: "/src/assets/images/testyourself.png",
  },
  {
    title: "ResizeIt",
    description: "Application to change the size for photographs withou losing quality. Also it creates a PDF contact sheet.",
    tools: ["React.js", "CSS", "Drag and Drop", "wouter", "TypeScript"],
    link: "https://resizeit.vercel.app/",
    image: "/src/assets/images/resize.png",
  },
  {
    title: "CollabPresentation",
    description: "Web app to create collaborative presentation.",
    tools: ["React", "Express.js", "WebSockets", "PostgreSQL", "TypeScript", "Recoil", "TansStack Query"],
    link: "https://collab-presentations-ger.onrender.com/",
    image: "/src/assets/images/colab.png",
  },
  {
    title: "FakeDataGenerator",
    description: "Web app to generate fake data user data with an amount of errors.",
    tools: ["Next.js", "Tailwind", "TypeScript", "seedrandom", "infiniteScroll"],
    link: "https://fake-random-users-generation.vercel.app/",
    image: "/src/assets/images/fakeusers.png",
  }
];
