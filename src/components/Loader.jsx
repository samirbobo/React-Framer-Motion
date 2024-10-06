import { motion } from "framer-motion";

const loaderVariants = {
  animateOne: {
    // هنا خليت الكوره تتحرك من اليمين للشمال
    x: [-20, 20],
    // هنا خليت الكوره تتحرك من اعلي لي اسفل
    y: [0, -30],
    // هنا عملت انيميشن ليهم هما الاتنين
    transition: {
      // هنا تفاصيل الانيمشين بخوص محور اكس بشكل مستقل عن محور واي والي بعدها نفس الاسلوب
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

export default function Loader() {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animateOne"
      ></motion.div>
    </>
  );
}
