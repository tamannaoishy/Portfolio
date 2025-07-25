import { projectSummaries } from './projectSummaries';

const projects = [
    {
    id: "portfolio",  
    title: "Personal Portfolio Website",
    //description: "A responsive portfolio site showcasing my skills, projects, and resume. Built with modern tools and smooth animations.",
    //tools: ["React", "TailwindCSS", "Framer Motion"],
    image: "/images/portfolio.png", // add to public/images/
    github: "https://github.com/tamannaoishy/Portfolio",
    live: "https://portfolio-one-mu-55.vercel.app/",
    summary: projectSummaries.portfolio,
    
    
  },

  {
    id: "Postman",  
    title: "UserHub-API-Testing-Project",
    //description: "A responsive portfolio site showcasing my skills, projects, and resume. Built with modern tools and smooth animations.",
    //tools: ["React", "TailwindCSS", "Framer Motion"],
    //image: "/images/portfolio.png", // add to public/images/
    github: "https://github.com/tamannaoishy/UserHub-API-Testing-Project",
    live: "",
    summary:"",
    
    
  },

    {
    id: "Testing",  
    title: "E-Commerce Manual Testing Project",
    description: "This is a QA documentation project focused on manual testing of a demo e-commerce website.",
    tools: ["Google Chrome", "Google Docs", "Excel"],
    image: "/images/Manual-QA-Testingt.webp", // add to public/images/
    github: "https://github.com/tamannaoishy/E-Commerce-Manual-Testing-Project",
    live: "",
    
  },

  {
    id: "Classification",
    title: "Breast-Cancer-Prediction-by-Effective-Feature-Selection-Using-Machine-Learning-Algorithms",
    description: "This project focuses on building machine learning models to classify breast cancer tumors (benign vs. malignant)",
    tools: ["Python", "Pandas", "NumPy","scikit-learn", "Matplotlib","Seaborn","Google Colab"],
    image: "/images/classification.png", // add to public/images/
    github: "https://github.com/tamannaoishy/Breast-Cancer-Prediction-by-Effective-Feature-Selection-Using-Machine-Learning-Algorithms",
    live: "",
    summary: projectSummaries.Classification,
  },
  
];

export default projects;
