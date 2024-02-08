import { FunctionComponent } from "react";
import headerItems from "./buttonsList";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  setMenu: (param: boolean) => void;
  className: string;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  setMenu,
  className,
}) => {
  const closeMenu = (): void => {
    setMenu(false);
  };

  return (
    <header className={`mobileMenuContainer ${className}`}>
      <aside className="mobileMenu">
        <ul>
          <li>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={50}
              priority
            />
          </li>
          {headerItems.map((item, idx) => (
            <li key={idx}>
              <Link onClick={closeMenu} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="mobileMenuShadow" onClick={closeMenu} />
    </header>
  );
};
export default MobileMenu;
