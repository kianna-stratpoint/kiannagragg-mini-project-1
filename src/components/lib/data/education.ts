export type EducationEntry = {
  id: number;
  title: string;
  institution: string;
  logoPath: string;
  dateRange: string;
  description: string;
  isLeft: boolean; // Controls which side of the line the card appears
};

export const educationData: EducationEntry[] = [
  {
    id: 1,
    title: "DOST - SEI Merit Scholar",
    institution: "Technological University of the Philippines - Manila",
    logoPath: "/logos/tup-logo.png",
    dateRange: "September 2022 - Present",
    description: "BS in Computer Science",
    isLeft: false, // Right side
  },
  {
    id: 2,
    title: "with Highest Honors",
    institution: "Del Pilar Academy",
    logoPath: "/logos/dpa-logo.png",
    dateRange: "June 2019 - May 2021",
    description: "Senior High School | STEM Strand",
    isLeft: true, // Left side
  },
  {
    id: 3,
    title: "with Highest Honors, Rank 2",
    institution: "Del Pilar Academy",
    logoPath: "/logos/dpa-logo.png",
    dateRange: "June 2015 - April 2019",
    description: "Junior High School",
    isLeft: false, // Right side
  },
];
