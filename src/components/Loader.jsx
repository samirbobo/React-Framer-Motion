import { motion, useCycle } from "framer-motion";

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
  animateTwo: {
    x: 0,
    y: [0, -40],
    transition: {
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
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <button onClick={() => cycleAnimation()}> Cycle Animation </button>
    </>
  );
}
// useCycle Hook