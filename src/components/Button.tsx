import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-4 py-2 font-semibold text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-3xl group"
        onClick={onClick}
      >
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </div>
  );
};
