import React from 'react';
import { useInView } from 'react-intersection-observer';

const faqData = [
  {
    category: 'General Questions',
    items: [
      { title: 'High Quality Rooms', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'Best Amenities at the Best Price', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'Campfire & Nature Walks', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'Pickup and Drop Facility', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
    ],
  },
  {
    category: 'Other Questions',
    items: [
      { title: 'Tourist Guide Support', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'High Class Security', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'Quick Access to Tourist Attractions', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
      { title: 'Independent Cottages', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.' },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="p-8 font-serif">
      {faqData.map((section, index) => (
        <FAQSection key={index} section={section} />
      ))}
    </div>
  );
};

const FAQSection = ({ section }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row mb-8 mx-32">
        <h2 className="text-3xl font-bold md:w-1/2 mb-4">{section.category}</h2>
        <div className="md:w-3/4 grid grid-cols-1  md:grid-cols-1 gap-8">
          {section.items.map((item, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
