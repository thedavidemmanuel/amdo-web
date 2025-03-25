'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPeopleGroup, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

/**
 * Interface for WorkCard component props
 * @property {React.ReactNode} icon - The icon to display at the top of the card
 * @property {string} title - The title of the work card
 * @property {string} description - The description text for the card
 */
interface WorkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * WorkCard Component
 * Displays a single service card with icon, title and description
 * @param {WorkCardProps} props - The component props
 * @returns {JSX.Element} A card component
 */
const WorkCard = ({ icon, title, description }: WorkCardProps) => (
  <div className="bg-[#1B1B3A] p-10 rounded-[20px] h-full min-h-[270px]">
    <div className="mb-6 text-4xl text-white">{icon}</div>
    <h3 className="text-white text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

/**
 * WhatWeDo Section Component
 * Displays the organization's core services in a grid layout
 * @returns {JSX.Element} The WhatWeDo section
 */
export default function WhatWeDo() {
  // Array of service items to be displayed in cards
  const workItems: WorkCardProps[] = [
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: "Scholarships",
      description: "Providing financial assistance to deserving students to help them achieve their educational goals."
    },
    {
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
      title: "People Development",
      description: "Offering mentorship, training, and personal development workshops to empower individuals with the skills they need to succeed."
    },
    {
      icon: <FontAwesomeIcon icon={faBuildingUser} />,
      title: "Community Development",
      description: "Implementing sustainable projects that improve the quality of life in communities."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section heading */}
      <div className="mb-12">
        <h2 className="text-3xl text-black font-medium">What We Do</h2>
      </div>
      {/* Card grid - responsive layout that shows 1 column on mobile and 3 columns on medium screens and above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
        {workItems.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
      {/* Bottom spacing */}
      <div className='mt-20' /> 
    </section>
  );
}
