import { useRouter } from "next/dist/client/router";

import { useState, useEffect } from "react";

import animateScrollTo from "animated-scroll-to";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Header() {
  const router = useRouter();

  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 160) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  // #042825

  return (
    <>
      <header
        className={
          colorChange
            ? "bg-yellow flex justify-between text-gray px-5 md:px-20 py-2 fixed z-50 w-full transition-all"
            : "flex justify-between text-white px-5 md:px-20 py-5 fixed z-50 w-full"
        }
      >
        <div>
          <h1 className="font-staat text-4xl md:text-5xl leading-10">BUGG.</h1>
        </div>
        <div className="hidden md:flex items-center gap-20 text-base font-poppins font-medium">
          <button
            onClick={() => {
              animateScrollTo(document.querySelector(".services"));
            }}
          >
            Diensten
          </button>
          <button
            onClick={() => {
              animateScrollTo(document.querySelector(".about"));
            }}
          >
            Over Ons
          </button>
          <button
            onClick={() => {
              animateScrollTo(document.querySelector(".contact"));
            }}
          >
            Contact
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              animateScrollTo(document.querySelector(".contact"));
            }}
            className={
              colorChange
                ? "border-2 font-poppins border-gray text-gray px-4 py-2 rounded hover:bg-gray hover:text-yellow transition-all active:scale-95"
                : "border-2 font-poppins border-yellow text-yellow px-4 py-2 rounded hover:bg-yellow hover:text-black transition-all active:scale-95"
            }
          >
            Start een project
          </button>
        </div>
      </header>
      <div></div>
    </>
  );
}

export default Header;
