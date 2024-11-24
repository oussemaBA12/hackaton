import React from 'react';
import { Shield, Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Health Journey Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Confidential, accessible, and personalized mental health support designed specifically for students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Talk to Someone Now
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              Explore Resources
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Shield className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Confidential</h3>
              <p className="text-gray-600">Your privacy is our top priority. All conversations are encrypted and anonymous.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Heart className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Access help whenever you need it, wherever you are.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peer Support</h3>
              <p className="text-gray-600">Connect with other students who understand what you're going through.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}