import { FunctionComponent } from "react";

interface AmountProps {
  amount: number;
  setAmount: (amount: number) => void;
  max?: number;
}

const Amount: FunctionComponent<AmountProps> = ({ amount, setAmount, max }) => {
  const onChange = (mode: "inc" | "dec"): void => {
    mode === "inc" ? setAmount(amount + 1) : setAmount(amount - 1);
  };

  return (
    <div className="amount-container">
      <button
        onClick={() => {
          onChange("dec");
        }}
        disabled={amount === 1}
      >
        -
      </button>
      <span>{amount}</span>
      <button
        onClick={() => {
          onChange("inc");
        }}
        disabled={max != 0 && amount === max}
      >
        +
      </button>
    </div>
  );
};
export default Amount;
