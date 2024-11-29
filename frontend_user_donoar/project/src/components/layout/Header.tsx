import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">BloodLife</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button variant={isActive('/') ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link to="/profile">
              <Button variant={isActive('/profile') ? 'default' : 'ghost'}>Profile</Button>
            </Link>
            <Link to="/donate">
              <Button variant={isActive('/donate') ? 'default' : 'ghost'}>Donate</Button>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/donate">
              <Button className="hidden md:inline-flex">Donate Now</Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-2">
              <Link to="/">
                <Button variant="ghost" className="w-full text-left">Home</Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" className="w-full text-left">Profile</Button>
              </Link>
              <Link to="/donate">
                <Button variant="ghost" className="w-full text-left">Donate</Button>
              </Link>
              <Link to="/donate">
                <Button className="w-full">Donate Now</Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}