"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import Logo from "./Logo";
import { ButtonContact } from "../ButtonContact";
import { MenuNav } from "./MenuNav";

export default function NavBar() {
  


  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <nav className="md-:py-6 px-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Aller à la page d'accueil" className="z-50">
            <Logo />
            <span className="sr-only">Site web 974 Home Page</span>
          </Link>

          <button
            type="button"
            className="block p-2 text-3xl md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>


        {/* Mobile Nav */}
        {/* <div
          className={clsx(
            "gap-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>
          <MenuNav />
            <ButtonContact />
        </div> */}


        {/* Desktop Nav */}
        <div className="hidden md:flex md:gap-6 items-center">

        <MenuNav />
            <ButtonContact />
        </div>
        
        </div>
    </nav>
  );
}
