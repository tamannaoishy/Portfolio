import { motion } from 'framer-motion';
import research from '../data/research';

export default function Research() {
  return (
    <section id="research" className="py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">Research & Publications</h2>
        <div className="space-y-6 text-left">
          {research.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-1">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
                  View 
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
