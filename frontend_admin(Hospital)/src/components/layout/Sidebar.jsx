import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Droplet, Calendar, AlertCircle } from 'lucide-react';
import { listItemAnimation } from '../../utils/animations';
import { colors } from '../../utils/theme';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Droplet, label: 'Stock Management', path: '/stock' },
  { icon: Calendar, label: 'Donation Camps', path: '/camps' },
  { icon: AlertCircle, label: 'Emergency Requests', path: '/emergency' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className={`w-64 bg-[${colors.sidebar}] text-white`}
    >
      <div className="p-4">
        <h1 className="text-xl font-bold text-white mb-8">Blood Bank System</h1>
        <nav>
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.path}
              {...listItemAnimation(index)}
            >
              <Link
                to={item.path}
                className={`flex items-center p-3 mb-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? `bg-[${colors.primary}] text-white`
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};