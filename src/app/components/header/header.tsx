"use client";

import { useState } from "react";
import Image from "next/image";
import Menu from "./menu";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Promoções",
    "New In",
    "Profissionais",
    "Inspiração",
    "Lojas",
  ];

  const HEADER_HEIGHT = 64;

  return (
    <>
      <header
        className={`
          relative flex w-full xl:px-6 flex-row justify-between py-4 px-[20px] z-50
          bg-transparent xl:bg-white
          transition-colors duration-300
        `}
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="flex items-center gap-5 relative w-full xl:w-auto">
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex xl:items-center justify-center flex-col gap-[5px] xl:w-[21px] xl:h-[21px] w-[49px] h-[24px] cursor-pointer z-50 relative"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-[14px] h-px xl:hidden"
                style={{ backgroundColor: "var(--background)" }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={`xl-${i}`}
                className="w-[14px] h-px hidden xl:block"
                style={{ backgroundColor: "var(--square)" }}
              />
            ))}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0">
            <div className="xl:hidden">
              <Image
                src="/logo-white.png"
                alt="Logo White"
                width={149}
                height={30}
                priority
              />
            </div>
            <div className="hidden xl:block">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={149}
                height={30}
                priority
              />
            </div>
          </div>
          <div className="hidden xl:flex items-center w-[496px] h-[37px] bg-[var(--inputsbg)] pl-3 gap-1 ml-6">
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Image
                src="/search.svg"
                alt="search"
                width={16}
                height={16}
                style={{ color: "var(--inputgrey)" }}
              />
            </div>
            <input
              className="text-sm font-normal placeholder-[var(--inputgrey)] w-[290px] border-none outline-none"
              type="text"
              placeholder="O que procura?"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden xl:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => setActiveLink(item)}
                className={`uppercase cursor-pointer ${
                  activeLink === item ? "font-bold" : "font-normal"
                }`}
                style={{ fontSize: "13px" }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center xl:gap-3">
            {["/profile.svg", "/heartt.svg", "/cart.svg"].map((icon, i) => (
              <div
                key={i}
                className="w-[26px] h-[24px] flex items-center justify-center"
              >
                <Image
                  src={icon}
                  alt={icon}
                  width={18}
                  height={16}
                  className="xl:filter-none filter invert"
                />
              </div>
            ))}
          </div>
        </div>
      </header>
      {menuOpen && (
        <>
          <div
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-white z-50 transition-transform duration-300
              w-full xl:w-[432px]
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <Menu />
          </div>
        </>
      )}
    </>
  );
}
