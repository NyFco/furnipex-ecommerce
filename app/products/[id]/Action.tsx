"use client";

import { FunctionComponent, useState } from "react";
import Amount from "./Amount";

const Action: FunctionComponent = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="action-container">
      <Amount amount={amount} setAmount={setAmount} />
      <button className="addToCart-btn">Add To Cart</button>
    </div>
  );
};
export default Action;
