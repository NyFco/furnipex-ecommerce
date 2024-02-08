import { Poppins } from "next/font/google";
import Link from "next/link";
import { FunctionComponent } from "react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface HoverOverlayProps {
  href: string;
}

const HoverOverlay: FunctionComponent<HoverOverlayProps> = ({ href }) => {
  return (
    <div className="hover-overlay">
      <Link
        href={href}
        target="_blank"
        className={`${poppins.className} view-btn`}
      >
        View item
      </Link>
    </div>
  );
};
export default HoverOverlay;
