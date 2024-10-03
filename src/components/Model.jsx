import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ModelVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "200px",
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.5,
      delay: 0.5,
    },
  },
};

export default function Model({ showModel }) {
  return (
    <AnimatePresence mode="wait">
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={ModelVariants}>
            <p>Do you Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
