import { motion } from 'framer-motion';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';
import { Gamepad2 } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative h-[70vh] mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2070&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6"
          >
            <h1 className="text-7xl font-space-grotesk font-bold mb-4 flex items-center justify-center">
              <Gamepad2 className="w-16 h-16 mr-4 text-purple-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Bubble Mania
              </span>
            </h1>
          </motion.div>
          <p className="text-2xl text-gray-300 font-inter max-w-2xl">
            Discover your next gaming adventure in our curated collection of extraordinary experiences
          </p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}