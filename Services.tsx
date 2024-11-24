import React from 'react';
import { MessageCircle, BookOpen, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      title: "24/7 Chat Support",
      description: "Connect instantly with trained peer supporters through our secure chat platform for immediate assistance and guidance."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Self-Help Resources",
      description: "Access our complete library of guided meditations, workshops, and educational content to support your mental well-being."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Support Groups",
      description: "Join moderated group sessions with peers facing similar challenges. Share experiences and grow together in a safe space."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All our services are completely free for students. Your mental health matters more than money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-indigo-600 font-medium">All services are provided free of charge to students</p>
        </div>
      </div>
    </section>
  );
}