import React from 'react';

export default function Resources() {
  const resources = [
    {
      title: "Stress Management",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      category: "Self-Help Guide"
    },
    {
      title: "Exam Anxiety",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      category: "Workshop"
    },
    {
      title: "Mindful Meditation",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80",
      category: "Audio Guide"
    },
    {
      title: "Time Management",
      image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=800&q=80",
      category: "Video Course"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of self-help resources designed to support your mental well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-sm bg-indigo-600 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-2">{resource.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}