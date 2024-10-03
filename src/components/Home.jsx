import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
  },
  // في حاله خروج الكمبونانت من شجره تدفق الرياكت او الانتقال لصفحه اخري ينفذ هذا الانيمشين وهو الانتقال لاقصي اليسار
  // حته يخرج من نطاق رويه الشاشه
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    // scale: 1.1, دال الوضع الطبيعي عشان اخلي الزرار بتاعي يكبر 10 في الميه لما اجي المسه
    // لكن دا اسلوب الكي فرامس بيخلني انتقل من وضع لوضع طول مانا لامس الزرار بتاعي ودا هيدي ليه شكل عامل زي النبضات
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
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

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
