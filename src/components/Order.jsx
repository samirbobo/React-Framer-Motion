/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>

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
