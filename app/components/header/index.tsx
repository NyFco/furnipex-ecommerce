"use client";
import Image from "next/image";
import Button from "./Button";
import headerItems from "./buttonsList";
import MobileMenu from "./MobileMenu";
import { FunctionComponent, useState } from "react";
import "@/app/styles/header.scss";

const Header: FunctionComponent = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<
    boolean | "firstTime"
  >("firstTime");

  return (
    <header className="header">
      <div className="desktop">
        <div className="flex-item">
          <Button href="#">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={50}
              priority
            />
          </Button>
        </div>
        <div className="links flex-item">
          <ul>
            {headerItems.map((item, idx) => (
              <li key={idx}>
                <Button href={item.link}>{item.title}</Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons flex-item">
          <ul>
            <li>
              <Button href="#">
                <Image
                  src="/profile.svg"
                  alt="Profile Vector"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            </li>
            <li>
              <Button href="#">
                <Image
                  src="/search.svg"
                  alt="Search Vector"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            </li>
            <li>
              <Button href="#">
                <Image
                  src="/liked.svg"
                  alt="Liked Vector"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            </li>
            <li>
              <Button href="#">
                <Image
                  src="/cart.svg"
                  alt="Cart Vector"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile">
        <button
          className="burgerBtn"
          onClick={() => {
            setMobileMenuIsOpen(true);
          }}
        >
          <Image src="/burger.svg" alt="menu" width={40} height={40} priority />
        </button>
        <Button href="#">
          <Image src="/logo.svg" alt="Logo" width={200} height={50} priority />
        </Button>
        {mobileMenuIsOpen !== "firstTime" && (
          <MobileMenu
            setMenu={setMobileMenuIsOpen}
            className={mobileMenuIsOpen ? "openMenu" : "closeMenu"}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
