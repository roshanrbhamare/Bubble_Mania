import { motion } from 'framer-motion';
import { Mail, MessageSquare, Target } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Bubble Mania
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-lg p-8 mb-8 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
            Bubble Mania is dedicated to bringing you the most immersive and exciting gaming experiences. 
              We carefully curate our collection to ensure every game meets our high standards for 
              quality, innovation, and entertainment value. Our platform is designed to help gamers 
              discover their next favorite title while supporting both established studios and 
              independent developers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold">Support</h3>
              </div>
              <p className="text-gray-400">
                Our dedicated support team is available 24/7 to assist you with any questions or 
                technical issues you may encounter.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold">Contact Us</h3>
              </div>
              <p className="text-gray-400">
                Email: Traap-G@bubblemania.com<br />
                Phone: (555) 123-4567<br />
                Hours: 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}