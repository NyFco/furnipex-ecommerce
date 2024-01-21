import { FunctionComponent } from "react";

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
    <div className={`mobileMenuContainer ${className}`}>
      <aside className="mobileMenu">MobileMenu</aside>
      <div className="mobileMenuShadow" onClick={closeMenu} />
    </div>
  );
};
export default MobileMenu;
