import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button: FunctionComponent<ButtonProps> = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};
export default Button;
