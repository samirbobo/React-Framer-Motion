import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  // كلمه هيدن ديه مش شرط تكون ثابته انا بسميها اي اسم انا عايزه
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    // بعمل اسلوب التغير في العنصر وسرعته داخل العنصر وهو بينفذ الانيميشن وبيتم فاهمه والتعامل معاه
    transition: { type: "spring", stiffness: 120 },
  },
};
const nextVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// eslint-disable-next-line react/prop-types
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      // الطريقه الاولي لعمل الانيمشين
      // initial={{ x: "100vw" }}
      // animate={{ x: 0 }}
      // transition={{ type: "spring", stiffness: 120 }}

      // الطريقه التانيه لعمل الانيمشين
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          // eslint-disable-next-line react/prop-types
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {/* eslint-disable-next-line react/prop-types */}
      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}

          // ممكن احذف دول عادي خالص والسبب ان اسمائهم نفس اسماء العنصر الاب بتاعنا في هيخش علي خواص الاوبجيت الي نفذته وهيدور علي نفس اسم هيدن الي ورثه من الاب
          // initial="hidden"
          // animate="visible"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
