import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { games } from '../data/games';
import { ArrowLeft, TowerControl as GameController } from 'lucide-react';

export function GameDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="min-h-screen gradient-bg text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate('/')}
          className="group inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Games
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-xl overflow-hidden ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <div>
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl font-bold mb-4 font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              {game.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300/90 text-lg mb-6 font-inter leading-relaxed"
            >
              {game.fullDescription}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-xl overflow-hidden p-6 ring-1 ring-white/10 bg-black/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              <h2 className="relative text-2xl font-bold mb-4 font-space-grotesk">Key Features</h2>
              <ul className="relative list-none space-y-3 font-inter">
                {game.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <motion.a 
                href={game.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition-colors duration-200 rounded-lg bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-black shadow-lg shadow-purple-500/20"
              >
                <GameController className="w-5 h-5 mr-2" />
                Play Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}