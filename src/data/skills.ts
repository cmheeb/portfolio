export type TagColor = "p" | "a" | "t" | "b";

export interface SkillGroup {
  area: string;
  name: string;
  tags: { label: string; color: TagColor }[];
}

export const skills: SkillGroup[] = [
  {
    area: "CYBERSECURITY",
    name: "Security",
    tags: [
      { label: "SIEM", color: "p" },
      { label: "threat detection", color: "p" },
      { label: "log analysis", color: "p" },
      { label: "network security", color: "p" },
    ],
  },
  {
    area: "LANGUAGES",
    name: "Programming",
    tags: [
      { label: "Python", color: "b" },
      { label: "C++", color: "b" },
      { label: "JavaScript", color: "b" },
      { label: "SQL", color: "b" },
    ],
  },
  {
    area: "DATA & ML",
    name: "Data Science",
    tags: [
      { label: "machine learning", color: "a" },
      { label: "data analysis", color: "a" },
      { label: "automation", color: "a" },
    ],
  },
  {
    area: "SYSTEMS",
    name: "Infrastructure",
    tags: [
      { label: "Linux", color: "t" },
      { label: "full-stack", color: "t" },
      { label: "networking", color: "t" },
    ],
  },
];
