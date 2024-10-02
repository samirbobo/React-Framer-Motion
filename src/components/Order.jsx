/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // ديه بتخلي الانيمشين بتاع الاب يتعمل الاول وبعدها اي انيمشين للابناء يجي بعدها بشكل مرتب
      when: "beforeChildren",
      // بتخلي لو في كذا ابن عنده انيمشين يبقي ظهور كل انيمشين منهم في فرق زمني مثلا وليكن 0.4 ملي ثانيه
      staggerChildren: 0.4,
      // بتعبر عن الزمن الي بياخده الانيمشين عشان يفضل يعمل تذبذب
      mass: 0.4,
      // كلما قل الوقت يزود في سرعه التذبذب الخاصه بالانيمشين
      damping: 8,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
