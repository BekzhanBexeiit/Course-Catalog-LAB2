export interface Course {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
  instructor: string;
  category: string;
}

export const courses: Course[] = [
  {
    id: "web-101",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript. Build your first websites from scratch and understand how the web works.",
    credits: 3,
    likes: 142,
    instructor: "Dr. Aizat Bekova",
    category: "Web",
  },
  {
    id: "react-201",
    title: "React & Next.js",
    description:
      "Master modern front-end development with React hooks, component patterns, and server-side rendering using Next.js App Router.",
    credits: 4,
    likes: 218,
    instructor: "Prof. Daniyar Seitkali",
    category: "Web",
  },
  {
    id: "db-301",
    title: "Databases & SQL",
    description:
      "Understand relational databases, write complex SQL queries, and learn database design principles including normalization and indexing.",
    credits: 3,
    likes: 97,
    instructor: "Dr. Madina Nurlan",
    category: "Backend",
  },
  {
    id: "algo-401",
    title: "Algorithms & Data Structures",
    description:
      "Explore sorting, searching, graphs, and dynamic programming. Prepare for technical interviews with hands-on problem solving.",
    credits: 4,
    likes: 183,
    instructor: "Prof. Yerlan Abeuov",
    category: "CS Fundamentals",
  },
  {
    id: "mobile-501",
    title: "Mobile Development with React Native",
    description:
      "Build cross-platform iOS and Android apps using React Native. Covers navigation, state management, and native device APIs.",
    credits: 3,
    likes: 134,
    instructor: "Dr. Ainur Dzhaksybekova",
    category: "Mobile",
  },
  {
    id: "cloud-601",
    title: "Cloud Computing & DevOps",
    description:
      "Deploy applications to AWS and Azure. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure as code with Terraform.",
    credits: 4,
    likes: 76,
    instructor: "Prof. Timur Ospanov",
    category: "DevOps",
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
