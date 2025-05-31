// pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="p-10 text-center text-xl">Project not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 max-w-4xl mx-auto">
      <Link to="/" className="text-orange-500 text-sm">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="rounded-lg mb-6" />
      <p className="text-lg mb-4">{project.description}</p>
      <p className="mb-2"><strong>Tools:</strong> {project.tools.join(", ")}</p>
      <div className="flex gap-4 mt-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Live Demo</a>}
      </div>
    </div>
  );
}
