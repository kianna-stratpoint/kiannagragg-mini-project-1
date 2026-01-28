export type ProjectTechIcon = {
  key: string;
  usage: string;
};

export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  role: string;
  date: string;
  status: "Completed" | "In Progress";
  shortDescription: string;
  longDescription: string;
  repoUrl: string;
  techStack: ProjectTechIcon[];
  imageUrl: string;
};

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: "chatdpa-ai-chatbot",
    title: "ChatDPA: AI Chatbot for Del Pilar Academy",
    role: "Project Developer",
    date: "April 2025",
    status: "Completed",
    shortDescription:
      "An AI-powered chatbot designed to assist Senior High School students of Del Pilar Academy...",
    longDescription:
      "An AI-powered chatbot designed to assist Senior High School students of Del Pilar Academy with accurate, detailed information about school programs, policies, and activities. Built with Google AI Studio, Pio features a friendly persona named Ben and delivers engaging, school-specific responses that go beyond generic chatbots.",
    repoUrl: "https://github.com/kiannagragg/DelPilarAcademy-chatbot",
    imageUrl: "/projects/chatDPA.png",
    techStack: [
      {
        key: "python",
        usage:
          "Used for backend API, data processing, and handling external LLM calls.",
      },
      {
        key: "google",
        usage:
          "Google AI Studio is the primary environment for model training and rapid prototyping of the AI logic.",
      },
    ],
  },

  {
    id: 2,
    slug: "fitcheck-computer-vision",
    title:
      "FitCheck: Real-time University Uniform Compliance Detection using YOLOv8",
    role: "Team Leader & Frontend Developer",
    date: "January 2025",
    status: "Completed",
    shortDescription:
      "A computer vision system that automatically detects university uniform compliance through real-time image analysis.",
    longDescription:
      "A computer vision system that automatically detects university uniform compliance through real-time image analysis. The model identifies components such as top, bottom, ID, logo, and shoes to ensure adherence to dress codes.",
    repoUrl:
      "https://github.com/kiannagragg/uniform-compliance-detection-YOLOv8",
    imageUrl: "/projects/fitcheck.png",
    techStack: [
      {
        key: "python",
        usage:
          "Used for backend API, data processing, and handling external LLM calls.",
      },
      {
        key: "react",
        usage:
          "Used for building the frontend interface and user interactions.",
      },
      {
        key: "colab",
        usage:
          "The primary environment for model training and rapid prototyping of the AI logic.",
      },
    ],
  },

  {
    id: 3,
    slug: "tup-parkwise",
    title: "TUP Parkwise: QR Code-Based Campus Parking Management System",
    role: "Frontend Developer",
    date: "May 2025",
    status: "Completed",
    shortDescription:
      "A smart parking management system designed for the TUP campus.",
    longDescription:
      "A smart parking management system designed for the TUP campus, allowing users to generate and scan QR codes for secure entry, exit, and slot tracking. The system streamlines campus parking operations and enhances efficiency.",
    repoUrl:
      "https://github.com/kiannagragg/QR-Code-Based-Campus-Parking-Management-System",
    imageUrl: "/projects/tup-parkwise.png",
    techStack: [
      {
        key: "html5",
        usage: "Used for structuring the frontend web pages and components.",
      },
      {
        key: "css3",
        usage:
          "Used for styling the frontend interface and ensuring responsiveness.",
      },
      {
        key: "javascript",
        usage: "Used for frontend interactivity and dynamic user experiences.",
      },
      {
        key: "mysql",
        usage: "Used for database management and data storage.",
      },
    ],
  },
];
