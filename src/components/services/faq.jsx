import React from 'react';
import { useInView } from 'react-intersection-observer';

const faqData = [
  {
    category: 'General Questions',
    items: [
      { title: 'Authentic Punjabi Cuisine', description: 'We offer a wide range of authentic Punjabi dishes prepared by expert chefs using traditional recipes and locally sourced ingredients.' },
      { title: 'Customizable Event Packages', description: 'Our flexible event packages cater to various budgets and preferences, ensuring a memorable experience for all occasions.' },
      { title: 'Cultural Performances', description: 'Enhance your event with vibrant Punjabi cultural performances, including Bhangra and Giddha dance shows.' },
      { title: 'Venue Selection Assistance', description: 'We help you choose the perfect venue for your event, from rustic farmhouses to modern banquet halls in Punjab.' },
    ],
  },
  {
    category: 'Services',
    items: [
      { title: 'Professional Event Planning', description: 'Our experienced team handles all aspects of event planning, from concept to execution, ensuring a stress-free experience.' },
      { title: 'State-of-the-Art Equipment', description: 'We use high-quality sound and lighting equipment to create the perfect ambiance for your event.' },
      { title: 'Themed Decor', description: 'Choose from a variety of Punjabi-inspired themes or custom designs to make your event truly unique.' },
      { title: 'On-site Catering', description: 'Our mobile catering units can serve fresh, hot Punjabi delicacies at any location of your choice.' },
    ],
  },
];

const FAQ = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      {faqData.map((section, index) => (
        <FAQSection key={index} section={section} />
      ))}
    </section>
  );
};

const FAQSection = ({ section }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{section.category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.items.map((item, idx) => (
            <article key={idx} className="mb-6">
              <h3 className="text-lg sm:text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;