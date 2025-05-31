import { motion } from 'framer-motion';
import certificates from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">Certificates & Achievements</h2>
        <div className="space-y-6 text-left">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500">{cert.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{cert.issuer} — {cert.year}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
