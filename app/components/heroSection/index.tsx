import banner from "@/public/banner.png";
import "@/app/styles/heroSection.scss";
import { Poppins } from "next/font/google";
import { FunctionComponent } from "react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

const HeroSection: FunctionComponent = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${banner.src})` }}>
      <span></span>
      <div className="content">
        <div>
          <p className={poppins.className}>New Arrival!</p>
          <h1 className={poppinsBold.className}>
            Discover Our
            <br />
            New Collection
          </h1>
          <p className={`${poppins.className} desc-text`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            praesentium fugiat minima id atque accusantium ad.
          </p>
        </div>
        <button className={poppins.className}>BUY NOW</button>
      </div>
    </section>
  );
};

export default HeroSection;
