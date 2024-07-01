import Button from "./Button";
const heroImage = "assets/images/image-mockups.png";

function Hero() {
  return (
    <div className="z-0 h-screen overflow-hidden bg-VeryLightGray sm:pb-16">
      <div className="bg-intro-mobile lg:bg-intro-desktop mx-auto lg:flex lg:items-center lg:justify-between lg:pl-8 xl:max-w-[1440px]">
        <img src={heroImage} className="mx-auto -mt-28 grid lg:hidden" />
        <div className="mt-8 text-center lg:-mt-8 lg:w-96 lg:text-left">
          <h1 className="text-4xl text-DarkBlue lg:text-5xl">
            Next generation digital banking
          </h1>
          <p className="my-8 text-base text-GrayishBlue">
            Take your financial life online. Your Easybank account will be a
            one-shop for spending, saving, budgeting, and much more.
          </p>
          <Button />
        </div>
        <img
          src={heroImage}
          className="xl:-mr-50 -mt-24 hidden lg:-mr-32 lg:block lg:w-[44rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
