import { motion } from 'framer-motion';
import { Game } from '../types';
import { useNavigate,Link } from 'react-router-dom';
import { TowerControl as GameController } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900 rounded-xl overflow-hidden ring-1 ring-white/10"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      <div className="p-6">
        <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2 tracking-tight">
          {game.title}
        </h3>
        <p className="text-gray-300/90 mb-4 font-inter text-sm leading-relaxed">
          {game.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <Link to={game.link} >
           
           <button className='bg-blue-600  px-3 py-3 border-none text-sm font-bold rounded-lg'>Play Game</button> 
          
          </Link>
        
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/game/${game.id}`)}
            className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition-colors duration-200 rounded-lg bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <GameController className="w-4 h-4 mr-2" />
            Explore
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}