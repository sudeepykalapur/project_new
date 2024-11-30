import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

function Footer() {
    const footerLinks = {
        quickLinks: [
            { name: 'Home', path: '/' },
            { name: 'Blood Banks', path: '/blood-banks' },
            { name: 'Requirements', path: '/requirements' },
            { name: 'Donation Camps', path: '/donation-camps' },
            { name: 'Emergency', path: '/emergency' }
        ],
        resources: [
            { name: 'Blood Donation Guide', path: '#' },
            { name: 'FAQs', path: '#' },
            { name: 'Privacy Policy', path: '#' },
            { name: 'Terms of Service', path: '#' }
        ]
    }

    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-accent-blue">BloodCare</h3>
                        <p className="text-gray-600">
                            Streamlining blood management for clinics and saving lives together.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="text-gray-600 hover:text-accent-blue"
                            >
                                <Facebook size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="text-gray-600 hover:text-accent-blue"
                            >
                                <Twitter size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="text-gray-600 hover:text-accent-blue"
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-accent-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-accent-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-600">
                                <Mail size={18} />
                                <span>support@bloodcare.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600">
                                <Phone size={18} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} BloodCare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer