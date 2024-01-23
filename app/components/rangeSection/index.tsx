import { FunctionComponent } from "react";
import RangeList from "./RangeList";
import "@/app/styles/rangeSection.scss";
import { Poppins } from "next/font/google";
import Title from "../sectionTitle";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const RangeSection: FunctionComponent = () => {
  return (
    <section className="range">
      <Title>Browse The Range</Title>
      <p className={poppins.className}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <RangeList />
    </section>
  );
};
export default RangeSection;
