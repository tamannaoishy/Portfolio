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
           a Computer Science and Engineering graduate from RUET with hands-on experience in machine learning, web development, and software testing. While my journey began with building simple web apps and exploring ML models, I’ve found my true interest in Software Quality Assurance — ensuring that systems don’t just work, but work reliably.

Currently focused on testing, I enjoy uncovering edge cases, improving test coverage, and contributing to the overall quality of products. My background in coding helps me understand systems inside-out, while my mindset is always tuned toward precision, consistency, and continuous improvement.

I’m now actively pursuing a career in SQA — where I can combine my technical understanding, problem-solving skills, and passion for clean, stable software.

Outside of tech, I value curiosity, honesty, and learning something new every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
