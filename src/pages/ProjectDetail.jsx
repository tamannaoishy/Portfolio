import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Project not found.</div>;
  }

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        
        {project.image && (
          <img src={project.image} alt={project.title} className="rounded-lg mb-6 w-full object-cover" />
        )}

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{project.summary}</ReactMarkdown>
        </div>

        <div className="mt-6 space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              GitHub Repo
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
              Live Demo
            </a>
          )}
        </div>

        <div className="mt-10">
          <Link to="/" className="text-sm text-gray-500 underline">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
