// components/Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I’m <span className="text-orange-500">Jakia Tamanna Oishy</span> 
        </h1>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
         CSE Graduate | SQA Enthusiast | ML Explorer | Web Dev Learner | Problem Solver
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6">
          Exploring tech. Ensuring reliability.


        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/drive/folders/1Sw7FN_2tBeDZtu1hRCBeshx5cQPk2sA8?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition mb-6"
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-gray-700 dark:text-gray-300">
          <a href="https://github.com/tamannaoishy" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jakiatamannaoishy" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:jakiatamannaoishy@gmail.com" className="hover:text-orange-500 transition text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
