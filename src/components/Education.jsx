import { useState } from 'react';
import { motion } from 'framer-motion';
import education from '../data/education';

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">
          Education
        </h2>
        

        <div className="space-y-8 text-left">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-1">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.result}</p>

              
              {/* View Courses Toggle */}
              {edu.courses && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-sm text-blue-500 hover:underline mt-2"
                >
                  {expandedIndex === index ? "Hide Courses" : "View Courses"}
                </button>
              )}

              {/* Two-Column Course Display */}
              {expandedIndex === index && edu.courses && (
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-700 dark:text-gray-300 list-disc pl-4">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
