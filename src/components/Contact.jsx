// components/Contact.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Let’s Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          I’m open to opportunities, collaborations, or just a chat. Reach out via email or connect on social platforms.
        </p>

        <div className="flex justify-center space-x-6 text-2xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/tamannaoishy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jakiatamannaoishy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jakiatamannaoishy@gmail.com"
            className="hover:text-orange-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
