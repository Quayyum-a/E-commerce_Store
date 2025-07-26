import { motion } from "framer-motion";

const AppLayoutLoader = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-stone-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-wider"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <div className="font-extrabold tracking-tight">
          <span className="text-white">N</span>
          <span className="text-amber-400">I</span>
          <span className="text-white">K</span>
          <span className="text-stone-300">O</span>
          <span className="text-white">.</span>
          <span className="text-stone-400">CO</span>
        </div>
      </motion.h1>
    </motion.div>
  );
};

export default AppLayoutLoader;
