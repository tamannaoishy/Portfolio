// components/Skills.jsx
import { motion } from 'framer-motion';
import skills from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">
          Skills
        </h2>

        {/* Loop over categories */}
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div key={category}>
              {/* Category Heading */}
              <h3 className="text-2xl font-medium text-orange-500 mb-4">{category}</h3>

              {/* Skill Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item}
                    className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg py-4 px-6 shadow text-gray-800 dark:text-gray-200 font-medium text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + catIndex * 0.1 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
