const money = "assets/images/image-currency.jpg";
const diner = "assets/images/image-restaurant.jpg";
const plane = "assets/images/image-plane.jpg";
const confetti = "assets/images/image-confetti.jpg";

function Articles() {
  return (
    <div className="grid items-center justify-center bg-VeryLightGray px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center text-4xl text-DarkBlue lg:text-left">
          Latest Articles
        </h2>
        <div className="mt-10 grid items-center gap-4 sm:grid-cols-2 lg:flex">
          <div className="rounded-sm bg-White">
            <img src={money} className="h-48 w-full rounded-t-md" />
            <div className="p-4">
              <span className="text-xs text-GrayishBlue">
                By Claire Robinson
              </span>
              <h3 className="mt-3 text-xl text-DarkBlue hover:text-LimeGreen">
                Receive money in any currency with no fees
              </h3>
              <p className="mt-3 text-sm text-GrayishBlue">
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only recceive money in a single...
              </p>
            </div>
          </div>
          <div className="rounded-sm bg-White">
            <img src={diner} className="h-48 w-full rounded-t-md" />
            <div className="p-4">
              <span className="text-xs text-GrayishBlue">By Wilson Hutton</span>
              <h3 className="mt-3 text-xl text-DarkBlue hover:text-LimeGreen">
                Treat yourself without worrying about money
              </h3>
              <p className="mt-3 text-sm text-GrayishBlue">
                Our simple budgeting feature allows you to seprate out your
                spending and setr realisitic limits each month. That means
                you...
              </p>
            </div>
          </div>
          <div className="rounded-sm bg-White">
            <img src={plane} className="h-48 w-full rounded-t-md" />
            <div className="p-4">
              <span className="text-xs text-GrayishBlue">By Wilson Hutton</span>
              <h3 className="mt-3 text-xl text-DarkBlue hover:text-LimeGreen">
                Take your Easybank card wherever you go
              </h3>
              <p className="mt-3 text-sm text-GrayishBlue">
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchase while you're abroad. We'll even show you...
              </p>
            </div>
          </div>
          <div className="rounded-sm bg-White">
            <img src={confetti} className="h-48 w-full rounded-t-md" />
            <div className="p-4">
              <span className="text-xs text-GrayishBlue">
                By Claire Robison
              </span>
              <h3 className="mt-3 text-xl text-DarkBlue hover:text-LimeGreen">
                Our invite-only Beta accounts are now live!{" "}
              </h3>
              <p className="mt-3 text-sm text-GrayishBlue">
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
