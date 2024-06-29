const iconApi = "assets/images/icon-api.svg";
const iconBudgeting = "assets/images/icon-budgeting.svg";
const iconOnboarding = "assets/images/icon-onboarding.svg";
const iconOnline = "assets/images/icon-online.svg";

function Main() {
  return (
    <div className="mt-0 bg-LightGrayishBlue px-4 py-20 lg:-mt-60 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl text-DarkBlue">Why choose Easybank?</h2>
          <p className="mt-8 text-GrayishBlue lg:w-[30rem]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="mt-16 grid w-full items-center justify-center gap-8 text-center sm:grid-cols-2 lg:flex">
          <div className="">
            <img src={iconOnline} className="mx-auto" />
            <h3 className="mt-8 text-xl text-DarkBlue">Online Banking</h3>
            <p className="mt-8 text-GrayishBlue">
              Our modern web and mobile applications allow you keep track of
              your finances wherever you are in the wolrd.
            </p>
          </div>
          <div className="">
            <img src={iconBudgeting} className="mx-auto" />
            <h3 className="mt-8 text-xl text-DarkBlue">Simple Budgeting</h3>
            <p className="mt-8 text-GrayishBlue">
              See exactly whrer your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="">
            <img src={iconOnboarding} className="mx-auto" />
            <h3 className="mt-8 text-xl text-DarkBlue">Fast Onboarding</h3>
            <p className="mt-8 text-GrayishBlue">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="">
            <img src={iconApi} className="mx-auto" />
            <h3 className="mt-8 text-xl text-DarkBlue">Open API</h3>
            <p className="mt-8 text-GrayishBlue">
              Menage your savings, investiments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
