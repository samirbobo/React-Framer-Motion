import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import Model from "./components/Model";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModel, setShowModel] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Model showModel={showModel} />

      {/* هنا انا ضفت الكمبونانت دا عشان اعمل انيميشن فيه حاله التبديل بين الرويتس بتاعي */}
      {/* mode="wait" بتخلي الانيمشين يتم بشكل سلس بين الرويتس بدون تداخل او مشاكل */}
      {/* onExitComplete فايده الفانكشن ديه ان لو الروات اتغير وخلاص الكمبونانت خرج من روتت بتاع رياكت اعمل الفانكشن ديه */}
      <AnimatePresence mode="wait" onExitComplete={() => setShowModel(false)}>
        {/* location انا ضفت خاصيه اللوكاشن عشان الكمبونانت بتاع الانيمشين يفهم ان الروت اتغير في يغير الروات بانيمشن معاه */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModel={setShowModel} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
