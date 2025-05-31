// components/About.jsx
import { motion } from 'framer-motion';
import profile from '../assets/oishy.jpg'; // replace with actual path or use online link

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Jakia Tamanna Oishy"
          className="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I'm <span className="font-semibold text-orange-500">Jakia Tamanna Oishy</span>,
            a passionate CSE graduate and software quality assurance enthusiast.
            With a love for clean, well-structured code and a deep curiosity for how
            systems work, I aim to build user-focused applications that solve real problems.
            I’m driven by learning, detail, and thoughtful design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
