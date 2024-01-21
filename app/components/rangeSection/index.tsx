import { FunctionComponent } from "react";
import RangeList from "./RangeList";
import "@/app/styles/rangeSection.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsTitle = Poppins({ weight: "700", subsets: ["latin"] });

const RangeSection: FunctionComponent = () => {
  return (
    <section className="range">
      <h2 className={poppinsTitle.className}>Browse The Range</h2>
      <p className={poppins.className}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <RangeList />
    </section>
  );
};
export default RangeSection;
