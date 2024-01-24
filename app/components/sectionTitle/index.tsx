import { Poppins } from "next/font/google";
import { FunctionComponent, ReactNode } from "react";

const poppinsTitle = Poppins({ weight: "700", subsets: ["latin"] });

const Title: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <h2 className={`${poppinsTitle.className} section-title`}>{children}</h2>;
};
export default Title;
