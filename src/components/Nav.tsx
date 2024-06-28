import { useState } from "react";

const menu = "src/assets/images/icon-hamburger.svg";
const closeMenu = "src/assets/images/icon-close.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const content = (
    <>
      <div className="absolute left-0 right-0 top-[3.2rem] z-10 block h-screen w-full cursor-not-allowed items-center justify-center rounded bg-gradient-to-t from-White/10 to-DarkBlue/90 p-6 lg:hidden">
        <ul className="rounded-md bg-White py-4 text-center text-lg text-DarkBlue">
          <li className="cursor-pointer">Home</li>
          <li className="mt-3 cursor-pointer">About</li>
          <li className="mt-3 cursor-pointer">Contact</li>
          <li className="mt-3 cursor-pointer">Blog</li>
          <li className="mt-3 cursor-pointer">Careers</li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <ul className="hidden gap-8 text-lg text-DarkBlue lg:flex">
        <li className="underline-animation cursor-pointer">Home</li>
        <li className="underline-animation cursor-pointer">About</li>
        <li className="underline-animation cursor-pointer">Contact</li>
        <li className="underline-animation cursor-pointer">Blog</li>
        <li className="underline-animation cursor-pointer">Careers</li>
      </ul>
      <div>{isOpen && content}</div>
      <div>
        <button
          className="block transition duration-200 lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <img src={closeMenu} /> : <img src={menu} />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
