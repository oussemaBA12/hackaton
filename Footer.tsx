import React from 'react';
import { Brain, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">MindBridge</span>
            </div>
            <p className="text-gray-400">
              Making mental health support accessible to every student.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <p className="text-gray-400 mb-4">
              If you're in crisis or experiencing an emergency:
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Get Immediate Help
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MindBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}