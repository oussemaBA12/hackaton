import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Sign Up Anonymously</h3>
                <p className="text-gray-600">Create an account using just your school email. No personal details required.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Choose Your Support Type</h3>
                <p className="text-gray-600">Select from immediate chat support, scheduled counseling, or self-help resources.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Get Matched</h3>
                <p className="text-gray-600">Our system connects you with the most suitable counselor or support group based on your needs.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Begin Your Journey</h3>
                <p className="text-gray-600">Start your sessions in a safe, confidential environment designed for your comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}