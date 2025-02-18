import Button from "./Button";
import Nav from "./Nav";
const logo = "assets/images/logo.svg";

function Header() {
  return (
    <>
      <header className="fixed z-20 w-full bg-White p-4 shadow-md lg:px-8">
        <div className="mx-auto flex items-center justify-between lg:max-w-[1440px]">
          <img src={logo} alt="easybank" />
          <Nav />
          <div className="hidden lg:block">
            <Button />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
