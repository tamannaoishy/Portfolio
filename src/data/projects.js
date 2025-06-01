import { projectSummaries } from './projectSummaries';

const projects = [
    {
    id: "portfolio",  
    title: "Personal Portfolio Website",
    //description: "A responsive portfolio site showcasing my skills, projects, and resume. Built with modern tools and smooth animations.",
    //tools: ["React", "TailwindCSS", "Framer Motion"],
    image: "/images/portfolio.jpg", // add to public/images/
    github: "https://github.com/tamannaoishy/personal-portfolio",
    live: "https://portfolio-one-mu-55.vercel.app/",
    summary: projectSummaries.portfolio,
    
    
  },
    {
    id: "Testing",  
    title: "Manual Testing on StackFood – Food Delivery System (Demo Project)",
    description: "Conducted static and functional testing across key modules (login, cart, checkout), designed test  cases and test conditions, tracked and prioritized defects in JIRA, and delivered test summary reports using traceability techniques and the defect life cycle.",
    tools: ["JIRA", "Google Docs", "Excel"],
    image: "/images/StackFood.png", // add to public/images/
    github: "https://github.com/tamannaoishy/Manual-Testing-on-StackFood-Food-Delivery-System",
    live: "",
    
  },
  {
    id: "Agriculture",
    title: "KrishiPoramorsho – Expert Agricultural Support Platform",
    description: "Developed a web-based platform to connect Bangladeshi farmers with expert agricultural advice,enabling users to submit crop-related queries, receive expert responses, and access a searchable knowledge base through a simple, rural-friendly interface.",
    tools: ["JavaScript", "SQLite", "Django","HTML", "CSS"],
    image: "/images/Agriculture.jpg", // add to public/images/
    github: "https://github.com/tamannaoishy/Project-krishiporamorsho",
    live: "",
    summary: projectSummaries.agriculture,
  },
  
];

export default projects;
