import React from "react";
import { motion } from "framer-motion";
import { Check, CreditCard, Code } from "lucide-react";

/**
 * TypeScript interface to define what props each card should receive
 * This helps us catch errors and makes the code more reliable
 */
interface CardProps {
  icon: React.ReactNode; // The icon component to display
  title: string; // The card title text
  description: string; // The card description text
  delay: number; // How long to wait before animating this card
}

/**
 * Individual Card Component
 * This creates a single animated card with an icon, title, and description
 */
const Card: React.FC<CardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      // Animation when the card first appears on screen
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // End fully visible in normal position
      transition={{ duration: 0.6, delay }} // Take 0.6 seconds, wait for 'delay' before starting
      // Animation when user hovers over the card
      whileHover={{ y: -5, transition: { duration: 0.2 } }} // Lift card up slightly
      // Tailwind classes for styling the card container
      className="relative z-0 p-8 transition-shadow duration-300 border border-gray-100 shadow-sm rounded-2xl hover:shadow-lg"
    >
      {/* Container for the icon with its own animation */}
      <motion.div
        initial={{ scale: 0 }} // Start at 0 size (invisible)
        animate={{ scale: 1 }} // Grow to normal size
        transition={{ duration: 0.5, delay: delay + 0.2 }} // Animate after card appears
        className="mb-6" // Add margin bottom
      >
        {icon}
      </motion.div>

      {/* Card title with fade-in animation */}
      <motion.h3
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.5, delay: delay + 0.3 }} // Animate after icon
        className="mb-4 text-2xl font-semibold text-gray-900"
      >
        {title}
      </motion.h3>

      {/* Card description with fade-in animation */}
      <motion.p
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.5, delay: delay + 0.4 }} // Animate after title
        className="leading-relaxed text-gray-600"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

/**
 * Main Page Component
 * This is the main component that contains all the cards and page layout
 */
const CustomCardsPage: React.FC = () => {
  /**
   * Array of card data - each object represents one card
   * We store all the content here to make it easy to modify or add new cards
   */
  const cards = [
    {
      // First card icon - layered design with purple and blue backgrounds
      icon: (
        <div className="relative z-0">
          {" "}
          {/* Relative positioning allows us to stack elements */}
          {/* Main icon container */}
          <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg">
            <Check className="w-6 h-6 text-white" /> {/* Check mark icon */}
          </div>
        </div>
      ),
      title: "Create custom cards",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },

    {
      // Second card icon - rotated credit card with purple background
      icon: (
        <div className="relative">
          {/* Main icon container with rotation */}
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg rotate-12">
            <CreditCard className="w-6 h-6 text-white" />{" "}
            {/* Credit card icon */}
          </div>
        </div>
      ),
      title: "Create custom cards",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },

    {
      // Third card icon - code symbol with layered backgrounds
      icon: (
        <div className="relative">
          {/* Main icon container */}
          <div className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-lg">
            <Code className="w-6 h-6 text-white" /> {/* Code brackets icon */}
          </div>
        </div>
      ),
      title: "Create custom cards",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
  ];

  // Return the JSX that will be rendered on the page
  return (
    <div className="px-4 py-16 min-h-60 bg-gray-50">
      {" "}
      {/* Full height page with light gray background */}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Container that centers content and limits max width */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 
            Loop through each card in our cards array and create a Card component
            - map() creates a new Card component for each item in the array
            - index is the position of each card (0, 1, 2...)
            - key helps React track each card efficiently
          */}
          {cards.map((card, index) => (
            <Card
              key={index} // Unique identifier for React
              icon={card.icon} // Pass the icon to the Card component
              title={card.title} // Pass the title to the Card component
              description={card.description} // Pass the description to the Card component
              delay={index * 0.1} // Stagger animation: 0s, 0.1s, 0.2s delays
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default CustomCardsPage;
