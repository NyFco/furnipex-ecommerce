import { FunctionComponent } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

interface CardProps {
  title: string;
  imgSrc: string;
  href: string;
  alt?: string;
}

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const Card: FunctionComponent<CardProps> = ({
  title,
  imgSrc,
  href,
  alt = "Range",
}) => {
  return (
    <li>
      <Link href={href} className={`card ${poppins.className}`}>
        <Image src={imgSrc} alt={alt} width={400} height={500} />
        <h4>{title}</h4>
      </Link>
    </li>
  );
};
export default Card;
