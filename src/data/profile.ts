// ============================================================
// ✏️ EDIT ONLY THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// All sections of the website pull data from this single file
// ============================================================

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
  level: number; // 0-100 (percentage for progress bar)
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
}

// ============================================================
// ✏️ MAIN PROFILE DATA - EDIT YOUR DETAILS BELOW
// ============================================================

export const profile = {
  // ✏️ Personal Info
  name: "Amanshu Sharma",
  firstName: "Amanshu",
  lastName: "Sharma",
  
  // ✏️ Taglines (shown as rotating text in hero)
  taglines: [
    "Computer Engineering Student",
    "Web Developer",
    "Python Programmer",
    "Creative Coder"
  ],
  
  // ✏️ Bio (shown in hero section)
  bio: "Passionate about creating innovative web experiences and exploring the intersection of technology and creativity. Currently pursuing my diploma while building projects that push boundaries.",
  
  // ✏️ Education & Experience Summary
  education: "Diploma in Computer Engineering",
  experience: "Fresher",
  
  // ✏️ Contact & Social Links
  email: "amanshusharma999@gmail.com",
  github: "https://github.com/amanshu999",
  linkedin: "", // Leave empty if not available
  twitter: "",  // Leave empty if not available
  
  // ✏️ SKILLS - Add/remove skills here (level: 0-100)
  skills: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 }
  ] as Skill[],
  
  // ✏️ PROJECTS - Add your projects here
  // Each project will auto-render as a card
  // Set status: 'completed' | 'in-progress' | 'coming-soon'
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
  ] as Project[],
  
  // ✏️ TIMELINE - Education & Experience entries
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
  ] as TimelineItem[]
};

// ============================================================
// 🔧 EXAMPLE: HOW TO ADD A NEW PROJECT
// ============================================================
// Just add a new object to the projects array above:
//
// {
//   id: "4",
//   title: "My Portfolio Website",
//   description: "A futuristic portfolio showcasing my skills and projects.",
//   techStack: ["React", "TypeScript", "Tailwind CSS"],
//   githubLink: "https://github.com/amanshu999/portfolio",
//   liveLink: "https://myportfolio.com",
//   status: "completed"
// }
//
// ============================================================
