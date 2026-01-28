import { FiClock, FiUsers, FiEye } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

// --- 1. TECHNICAL SKILLS DATA STRUCTURES ---

export type SkillItem = {
  name: string;
  iconPath: string; // Path to the icon in the /public folder (e.g., /icons/react.svg)
  description: string;
};

export const technicalSkills = {
  languages: [
    {
      name: "HTML5",
      iconPath: "/icons/html.png",
      description:
        "Used to structure and organize web content with semantic markup. I apply HTML to build accessible, well-structured pages that serve as a solid foundation for responsive and interactive web applications.",
    },
    {
      name: "CSS3",
      iconPath: "/icons/css.png",
      description:
        "Utilized for styling and layout, with a focus on clean, responsive design. I am comfortable implementing modern layouts using Flexbox, Grid, and utility-first approaches (e.g., Tailwind CSS) to create visually consistent interfaces.",
    },
    {
      name: "JavaScript",
      iconPath: "/icons/javascript.png",
      description:
        "Applied for adding interactivity, logic, and dynamic behavior to web applications. I use JavaScript to handle user interactions, manage state, and integrate frontend components with backend services.",
    },
    {
      name: "Python",
      iconPath: "/icons/python.png",
      description:
        "Used primarily for scripting, data processing, and AI-related coursework. I have experience writing Python programs for analysis, automation, and machine learning experimentation in academic and project-based settings.",
    },
    {
      name: "Dart",
      iconPath: "/icons/dart.png",
      description:
        "Used as the primary language for Flutter development. I apply Dart to build cross-platform mobile applications, focusing on UI logic, state handling, and integration with backend services.",
    },
    {
      name: "C",
      iconPath: "/icons/c.png",
      description:
        "Learned as part of foundational computer science coursework. I use C to understand low-level programming concepts such as memory management, pointers, and algorithm implementation.",
    },
  ] as SkillItem[],

  frameworks: [
    {
      name: "React",
      iconPath: "/icons/react.png",
      description:
        "Used for building component-based user interfaces in web applications. I have experience developing reusable components, managing props and state, and structuring frontend applications for scalability.",
    },
    {
      name: "Node.js",
      iconPath: "/icons/nodejs.png",
      description:
        "Applied for backend development using JavaScript. I use Node.js to build RESTful APIs, handle server-side logic, and connect applications to databases and external services.",
    },
    {
      name: "PostgreSQL",
      iconPath: "/icons/postgresql.png",
      description:
        "Used as a relational database for structured data storage. I have experience designing schemas, writing SQL queries, and integrating PostgreSQL with backend applications.",
    },
    {
      name: "Flutter",
      iconPath: "/icons/flutter.png",
      description:
        "Used to develop cross-platform mobile applications from a single codebase. I focus on building clean UI screens, implementing navigation, and integrating Firebase services for real-world app functionality.",
    },
    {
      name: "Firebase",
      iconPath: "/icons/firebase.png",
      description:
        "Used for authentication, cloud databases, and backend services. I have experience working with Firebase Authentication and Firestore to manage user data, real-time updates, and secure app workflows.",
    },
    {
      name: "Google Colab",
      iconPath: "/icons/colab.png",
      description:
        "Used as a development environment for Python-based data analysis and machine learning tasks. I leverage Google Colab for experimentation, model training, and collaborative notebook-based work.",
    },
  ] as SkillItem[],
};

// --- 2. SOFT SKILLS DATA STRUCTURE ---

export type SoftSkillItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const softSkills: SoftSkillItem[] = [
  {
    icon: FiEye,
    title: "Attention to Detail",
    description:
      "I care about precision and quality. This is evident on how I approach design consistency and UI refinement.",
  },
  {
    icon: FaRegLightbulb,
    title: "Creativity",
    description:
      "I try to find unique ways to express ideas, and turn those ideas into meaningful and visually engaging digital solutions.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description:
      "I worked on both individual and group projects, showing teamwork in planning and communication.",
  },
  {
    icon: FiClock,
    title: "Time Management",
    description:
      "I plan my work intentionally, meet deadlines consistently, and stay efficient without compromising quality.",
  },
];

// --- 3. COLLABORATION LOG DATA STRUCTURE ---

export type LogEntry = {
  id: number;
  title: string;
  content: string;
  role: string;
  size?: "sm" | "md" | "lg";
};

export const collaborationLog: LogEntry[] = [
  {
    id: 1,
    title: "MY ROLE: FRONT-END DEVELOPER",
    content:
      "She showed initiative in both technical work and collaboration, contributing strongly to design and development. Kianna communicated well and made sure everyone was included in discussions.",
    role: "FRANCIS DAYUNO",
    size: "sm",
  },
  {
    id: 2,
    title: "MY ROLE: TEAM LEADER",
    content:
      "Contributes a lot to the team, bot technically and collaboratively. She always bring ideas, take initiative, when solving problems, and are open to learning or adjusting when needed. She always handle tasks well and pay attention to details, and when it come to teamwork, she communicates clearly and help keep everyone on track.",
    role: "ANDRUE ACUSIN",
    size: "md",
  },
  {
    id: 3,
    title: "MY ROLE: FRONT-END DEVELOPER",
    content:
      "Kianna is a dependable team member who consistently delivers high-quality work on time. She is proactive in seeking solutions to challenges and is always willing to learn new skills to enhance her performance.",
    role: "JEANESA DUGANG",
    size: "sm",
  },
  {
    id: 4,
    title: "MY ROLE: TEAM LEADER",
    content:
      "From my experience working with Kianna, she consistently contributes strong technical effort and reliable collaboration to the team. When faced with a challenge, she actively researches possible solutions and explores different ways to resolve issues effectively. She is highly responsible with the tasks assigned to her, manages her time well, and delivers outputs with attention to detail. Her dedication and creative approach contribute to the overall quality of the project, making her a dependable and valuable team member.",
    role: "JASON MARACHA",
    size: "lg",
  },
  {
    id: 5,
    title: "MY ROLE: FRONT-END DEVELOPER",
    content:
      "On the technical side, Kianna is willing to learn new tools. She takes inititave in understanding the system's requirements and share helpful ideas with the team. She also pay attention to the details, especially in user experience and requirements. In terms of teamwork, she is easy to work with. Kianna communicates clearly and listen to others' ideas, and are open to feedback.",
    role: "AUBREY RAGANDAN",
    size: "md",
  },
  {
    id: 6,
    title: "MY ROLE: FRONT-END DEVELOPER",
    content:
      "She’s  very dependable and easy to work with. She  get tasks done as soon as they’re assigned. Kianna is  very open to others’ ideas, she listens proactively, collaborate well, and make sure everyone feels heard. Overall, she’s  a reliable team player and a natural leader who takes initiative and supports the team patiently. She has a good eye for interface design and is great at building clean, user-friendly, and responsive interfaces. Even when something is new to her, she’s diligent about researching and learning it to make sure the job is done well. ",
    role: "DIANNE TAGUIBAO",
    size: "lg",
  },
];
