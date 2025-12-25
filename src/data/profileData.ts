// ✏️ EDIT YOUR DETAILS HERE
// This is the single source of truth for all your portfolio content

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'coming-soon';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  taglines: string[];
  education: string;
  experience: string;
  bio: string;
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  skills: Skill[];
  projects: Project[];
  timeline: TimelineItem[];
}

// ✏️ UPDATE THIS OBJECT TO CHANGE YOUR PORTFOLIO CONTENT
export const profileData: ProfileData = {
  name: "Amanshu Sharma",
  firstName: "Amanshu",
  lastName: "Sharma",
  taglines: [
    "Computer Engineering Student",
    "Web Developer",
    "Python Programmer",
    "Creative Coder"
  ],
  education: "Diploma in Computer Engineering",
  experience: "Fresher",
  bio: "Passionate about creating innovative web experiences and exploring the intersection of technology and creativity. Currently pursuing my diploma while building projects that push boundaries.",
  email: "contact@example.com",
  github: "https://github.com/amanshu999",
  linkedin: "",
  twitter: "",
  
  // ✏️ UPDATE YOUR SKILLS HERE (level is 0-100)
  skills: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 }
  ],
  
  // ✏️ ADD YOUR PROJECTS HERE
  // Each project will automatically render as a card
  projects: [
    {
      id: "1",
      title: "Coming Soon",
      description: "An exciting project is in development. Stay tuned for something amazing!",
      techStack: ["HTML", "CSS", "JavaScript"],
      status: "coming-soon"
    },
    {
      id: "2", 
      title: "Project Loading...",
      description: "New project will be added here. Check back soon!",
      techStack: ["Python"],
      status: "coming-soon"
    },
    {
      id: "3",
      title: "Future Project",
      description: "Something incredible is brewing. Watch this space!",
      techStack: ["React", "Node.js"],
      status: "coming-soon"
    }
  ],
  
  // ✏️ UPDATE YOUR TIMELINE HERE
  timeline: [
    {
      id: "1",
      title: "Diploma in Computer Engineering",
      subtitle: "Pursuing",
      date: "Present",
      description: "Learning core computer science concepts, programming fundamentals, and software development.",
      type: "education"
    },
    {
      id: "2",
      title: "Fresher",
      subtitle: "Ready to Start",
      date: "2024",
      description: "Eager to apply my skills in a professional environment and contribute to innovative projects.",
      type: "experience"
    }
  ]
};
