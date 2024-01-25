import "@/app/styles/footer.scss";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import headerItems from "../header/buttonsList";
import helpItems from "./helpItems";
import { Poppins } from "next/font/google";

const poppinsTitle = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsItem = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsInput = Poppins({ weight: "300", subsets: ["latin"] });

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          <Link href="#">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <ul>
          <li className={`${poppinsTitle.className} list-title`}>Links</li>
          {headerItems.map((item, idx) => (
            <li className={poppinsItem.className} key={idx}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li className={`${poppinsTitle.className} list-title`}>Help</li>
          {helpItems.map((item, idx) => (
            <li className={poppinsItem.className} key={idx}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="newsletter">
          <p className={`${poppinsTitle.className} list-title`}>Newsletter</p>
          <div>
            <input
              className={poppinsInput.className}
              placeholder="Enter Your Email Address"
            />
            <button className={poppinsItem.className}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>2024 furnipex. All rights reverved</p>
      </div>
    </footer>
  );
};
export default Footer;
