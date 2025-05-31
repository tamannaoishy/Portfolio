import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
  key={project.id}
  className="relative h-60 bg-cover bg-center rounded-lg shadow-lg group"
  style={{ backgroundImage: `url(${project.image})` }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  <Link
    to={`/projects/${project.id}`}
    className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center text-white text-xl font-semibold transition group-hover:bg-opacity-60"
  >
    <span className="text-center px-4">{project.title}</span>
  </Link>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
