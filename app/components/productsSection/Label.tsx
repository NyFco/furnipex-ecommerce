import { FunctionComponent } from "react";

interface LabelProps {
  type: "discount" | "new";
  discount?: number;
}

const Label: FunctionComponent<LabelProps> = ({ type, discount }) => {
  return (
    <div className={`${type} label`}>
      <p>{type === "discount" ? `-${discount}%` : "New"}</p>
    </div>
  );
};
export default Label;
