import React, { useEffect, useState } from "react";
import Datacard from "../Datacard/Datacard";
import "./Main.css";

const Main = () => {
   // declare state
   const [cards, setCards] = useState([]);

   useEffect(() => {
      fetch("./actorsdata.JSON")
         .then((res) => res.json())
         .then((data) => setCards(data));
   }, []);

   return (
      <div>
         {/* card container  */}
         <div className="card_container">
            {cards.map((card) => (
               <Datacard key={card.id} card={card}></Datacard>
            ))}
         </div>

         {/* cart container  */}
         <div className="cart_container"></div>
      </div>
   );
};

export default Main;