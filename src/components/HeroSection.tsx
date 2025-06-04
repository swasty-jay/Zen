import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-81 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-bl-[100px]">
      {/* Background decorative elements */}
      <NavBar />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bg-white rounded-full top-20 left-20 w-72 h-72 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-cyan-300 blur-3xl"></div>
      </div>

      <div className="container relative z-10 flex items-center min-h-screen px-6 py-8 mx-auto">
        <div className="grid items-center w-full gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold leading-tight text-white lg:text-6xl"
            >
              Create physical and{" "}
              <span className="relative">virtual cards</span> for your{" "}
              <span className="relative">
                business
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -top-2 -left-2 -right-2 -bottom-2"
                  viewBox="0 0 300 80"
                  fill="none"
                >
                  <motion.ellipse
                    cx="150"
                    cy="40"
                    rx="140"
                    ry="35"
                    stroke="rgba(34, 211, 238, 0.8)"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md text-lg leading-relaxed text-purple-100"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-2 font-semibold text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-3xl group"
              >
                Get your card
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 font-semibold text-white transition-all duration-300 border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              >
                Read documentation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Card Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <img
                src="/hero-image.png"
                alt="Business card interface mockup"
                className="w-full h-auto max-w-lg mx-auto mt-10 drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
