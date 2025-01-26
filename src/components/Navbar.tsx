import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-1.5 rounded-lg bg-purple-500/10 ring-1 ring-purple-400/20"
              >
                <Gamepad2 className="w-6 h-6 text-purple-400" />
              </motion.div>
              <span className="text-lg font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Bubble Mania
              </span>
            </Link>

            <div className="flex space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[1px] left-0 right-0 h-px bg-gradient-to-r from-purple-400/60 via-purple-400 to-purple-400/60"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}