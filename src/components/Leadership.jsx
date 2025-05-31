import { motion } from 'framer-motion';
import leadership from '../data/leadership';

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">Leadership & Responsibilities</h2>
        <div className="space-y-6 text-left">
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500">{item.role}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.org}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
