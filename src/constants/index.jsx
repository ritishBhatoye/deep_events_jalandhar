import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import exclusiveDesignIcon from '../assets/whyus/exclusive-design.png'; 
import clientFocusedIcon from '../assets/whyus/client-focused.png';
import freshIngredientsIcon from '../assets/whyus/fresh-ingredients.png';
import diverseClientBaseIcon from '../assets/whyus/diverse-client-base.png';
import responsibleSourcingIcon from '../assets/whyus/responsible-sourcing.png';
import flexibleServicesIcon from '../assets/whyus/flexible-services.png';

import corporate from '../assets/services/corporate_image.png';
import planning from '../assets/services/planning_image.png';
import wedding from '../assets/services/wedding_image.png';

import { optimizeImage } from '../utils/imageOptimizer';

const userImages = Array.from({ length: 30 }, (_, i) => 
  optimizeImage(`/assets/profile-pictures/user${i + 1}.jpg`, 100, 100)
);

const corporateImage = optimizeImage(corporate, 800, 600);
const planningImage = optimizeImage(planning, 800, 600);
const weddingImage = optimizeImage(wedding, 800, 600);

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  {label:"Menu",href:"/menu"},
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: 1,
    title: 'Corporate',
    description: 'Professional event planning for corporate clients',
    image: corporateImage,
  },
  {
    id: 2,
    title: 'Wedding',
    description: 'Create unforgettable wedding experiences',
    image: weddingImage,
  },
  {
    id: 3,
    title: 'Event Planning',
    description: 'Comprehensive event planning services',
    image: planningImage,
  },
];

export const ServiceCard = ({ title, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={title} className="w-full h-auto mb-4" width="800" height="600" loading="lazy" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export const testimonials = [
  {
    user: "Rahul Mehta",
    eventPurpose: "Wedding",
    location: "Noor Mahal, Jalandhar",
    image: userImages[0],
    text: "I am extremely satisfied with the event planning services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    rating: 5
  },
  {
    user: "Ayesha Khan",
    eventPurpose: "Haldi",
    location: "Phagwara",
    image: userImages[1],
    text: "I couldn't be happier with the outcome of our Haldi ceremony. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
    rating: 5
  },
  {
    user: "Vikram Patel",
    eventPurpose: "Jaggo Night",
    location: "Hoshiarpur",
    image: userImages[2],
    text: "Working with this event planning company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    rating: 4
  },
  {
    user: "Sneha Reddy",
    eventPurpose: "Bhog",
    location: "Kapurthala",
    image: userImages[3],
    text: "Working with the team at XYZ Events was a game-changer for our family function. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    rating: 5
  },
  {
    user: "Rohan Sharma",
    eventPurpose: "Birthday Party",
    location: "Ramamandi, Jalandhar",
    image: userImages[4],
    text: "I am amazed by the level of professionalism and dedication shown by the event planners. They were able to exceed our expectations and deliver outstanding results.",
    rating: 4
  },
  {
    user: "Priya Singh",
    eventPurpose: "Khand Path",
    location: "Noor Mahal, Jalandhar",
    image: userImages[5],
    text: "The team went above and beyond to ensure our event was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    rating: 5
  },
  {
    user: "Arjun Desai",
    eventPurpose: "Wedding",
    location: "Phagwara",
    image: userImages[6],
    text: "Exceptional service and execution! The event planners were attentive to every detail and ensured our event was a grand success.",
    rating: 5
  },
  {
    user: "Neha Verma",
    eventPurpose: "Haldi",
    location: "Hoshiarpur",
    image: userImages[7],
    text: "Their professionalism and creativity transformed our Haldi ceremony into a memorable experience. Highly recommend their services!",
    rating: 4
  },
  {
    user: "Amit Bansal",
    eventPurpose: "Jaggo Night",
    location: "Kapurthala",
    image: userImages[8],
    text: "The event was flawlessly executed. The team's dedication and hard work were evident in every aspect. Truly impressed with their service.",
    rating: 5
  },
  {
    user: "Sonal Kapoor",
    eventPurpose: "Bhog",
    location: "Ramamandi, Jalandhar",
    image: userImages[9],
    text: "The team handled our family function with utmost care and professionalism. Their attention to detail made all the difference.",
    rating: 5
  },
  {
    user: "Manish Agarwal",
    eventPurpose: "Birthday Party",
    location: "Noor Mahal, Jalandhar",
    image: userImages[10],
    text: "The event planning team was fantastic. They were organized, efficient, and made sure everything went off without a hitch.",
    rating: 4
  },
  {
    user: "Anita Roy",
    eventPurpose: "Khand Path",
    location: "Phagwara",
    image: userImages[11],
    text: "I highly recommend this event planning company. They are professional, creative, and really listen to their clients' needs.",
    rating: 5
  },
  {
    user: "Suresh Gupta",
    eventPurpose: "Wedding",
    location: "Hoshiarpur",
    image: userImages[12],
    text: "Our corporate event was a success thanks to the meticulous planning and execution by this team. Great job!",
    rating: 5
  },
  {
    user: "Pooja Kumar",
    eventPurpose: "Haldi",
    location: "Kapurthala",
    image: userImages[13],
    text: "The team at XYZ Events exceeded our expectations. Their attention to detail and customer service were top-notch.",
    rating: 4
  },
  {
    user: "Rajesh Sharma",
    eventPurpose: "Jaggo Night",
    location: "Ramamandi, Jalandhar",
    image: userImages[14],
    text: "I am extremely pleased with the services provided. The event was well-organized and everything went smoothly.",
    rating: 5
  },
  {
    user: "Deepa Patel",
    eventPurpose: "Bhog",
    location: "Noor Mahal, Jalandhar",
    image: userImages[15],
    text: "The event planners did an amazing job. They were professional, creative, and very easy to work with.",
    rating: 5
  },
  {
    user: "Anil Desai",
    eventPurpose: "Birthday Party",
    location: "Phagwara",
    image: userImages[16],
    text: "Our family event was a huge success thanks to the team at XYZ Events. They took care of every detail and made sure everything was perfect.",
    rating: 5
  },
  {
    user: "Kavita Nair",
    eventPurpose: "Khand Path",
    location: "Hoshiarpur",
    image: userImages[17],
    text: "The team did a fantastic job with our corporate event. They were professional, efficient, and made sure everything went smoothly.",
    rating: 4
  },
  {
    user: "Sanjay Verma",
    eventPurpose: "Wedding",
    location: "Kapurthala",
    image: userImages[18],
    text: "The event planners were excellent. They were organized, professional, and made sure everything was perfect.",
    rating: 5
  },
  {
    user: "Ritu Singh",
    eventPurpose: "Haldi",
    location: "Ramamandi, Jalandhar",
    image: userImages[19],
    text: "The team did an outstanding job with our event. They were professional, efficient, and made sure everything went off without a hitch.",
    rating: 5
  },
  {
    user: "Anil Sharma",
    eventPurpose: "Jaggo Night",
    location: "Noor Mahal, Jalandhar",
    image: userImages[20],
    text: "The event planners exceeded our expectations. They were professional, creative, and made sure everything was perfect.",
    rating: 5
  },
  {
    user: "Sneha Kapoor",
    eventPurpose: "Bhog",
    location: "Phagwara",
    image: userImages[21],
    text: "I am very pleased with the services provided. The event was well-organized and everything went smoothly.",
    rating: 5
  },
  {
    user: "Vijay Kumar",
    eventPurpose: "Birthday Party",
    location: "Hoshiarpur",
    image: userImages[22],
    text: "The event planning team was fantastic. They were professional, efficient, and made sure everything was perfect.",
    rating: 4
  },
  {
    user: "Sunita Gupta",
    eventPurpose: "Khand Path",
    location: "Kapurthala",
    image: userImages[23],
    text: "The event planners did a fantastic job. They were professional, creative, and very easy to work with.",
    rating: 5
  },
  {
    user: "Ravi Mehta",
    eventPurpose: "Bhog",
    location: "Ramamandi, Jalandhar",
    image: userImages[24],
    text: "The team at XYZ Events exceeded our expectations. Their attention to detail and customer service were top-notch.",
    rating: 5
  },
  {
    user: "Seema Kapoor",
    eventPurpose: "Haldi",
    location: "Noor Mahal, Jalandhar",
    image: userImages[25],
    text: "I am very pleased with the services provided. The event was well-organized and everything went smoothly.",
    rating: 5
  },
  {
    user: "Raj Malhotra",
    eventPurpose: "Jaggo Night",
    location: "Phagwara",
    image: userImages[26],
    text: "The event planners did an amazing job. They were professional, creative, and very easy to work with.",
    rating: 5
  },
  {
    user: "Aarti Singh",
    eventPurpose: "Wedding",
    location: "Hoshiarpur",
    image: userImages[27],
    text: "The team did a fantastic job with our family event. They were professional, efficient, and made sure everything went smoothly.",
    rating: 4
  },
  {
    user: "Vishal Agarwal",
    eventPurpose: "Birthday Party",
    location: "Kapurthala",
    image: userImages[28],
    text: "The event planning team did an excellent job. They were professional, organized, and made sure everything was perfect.",
    rating: 5
  },
  {
    user: "Neetu Joshi",
    eventPurpose: "Khand Path",
    location: "Ramamandi, Jalandhar",
    image: userImages[29],
    text: "The team did an outstanding job with our corporate event. They were professional, efficient, and made sure everything went off without a hitch.",
    rating: 5
  },
];

export const features = [
  {
    icon: exclusiveDesignIcon,
    title: 'Exclusive Design',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: clientFocusedIcon,
    title: 'Client Focused',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: freshIngredientsIcon,
    title: 'Fresh Ingredients',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: diverseClientBaseIcon,
    title: 'Diverse Client Base',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: responsibleSourcingIcon,
    title: 'Responsible Sourcing',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: flexibleServicesIcon,
    title: 'Flexible Services',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
