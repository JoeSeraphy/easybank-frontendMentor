import Button from "./Button";

const logo = "assets/images/logo-white.svg";
const facebook = "assets/images/icon-facebook.svg";
const youtube = "assets/images/icon-youtube.svg";
const twitter = "assets/images/icon-twitter.svg";
const pinterest = "assets/images/icon-pinterest.svg";
const instagram = "assets/images/icon-instagram.svg";

function Footer() {
  return (
    <>
      <footer className="grid items-center bg-DarkBlue px-8 py-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="">
            <img src={logo} alt="Easybank" className="mx-auto" />
            <div className="mt-4 flex items-center justify-center gap-2">
              <img
                src={facebook}
                alt="facebook"
                className="cursor-pointer hover:text-LimeGreen"
              />
              <img
                src={youtube}
                alt="youtube"
                className="cursor-pointer hover:text-LimeGreen"
              />
              <img
                src={twitter}
                alt="twitter"
                className="cursor-pointer hover:text-LimeGreen"
              />
              <img
                src={pinterest}
                alt="pinterest"
                className="cursor-pointer hover:text-LimeGreen"
              />
              <img
                src={instagram}
                alt="instagram"
                className="cursor-pointer hover:text-LimeGreen"
              />
            </div>
          </div>
          <div>
            <nav className="mt-8 grid items-center text-center">
              <ul className="text-sm text-White lg:flex lg:items-center lg:justify-between lg:gap-20">
                <div className="grid gap-4">
                  <li className="cursor-pointer hover:text-LimeGreen">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-LimeGreen">
                    Contact
                  </li>
                  <li className="cursor-pointer hover:text-LimeGreen">Blog</li>
                </div>

                <div className="mt-4 grid gap-4 lg:mt-0">
                  <li className="cursor-pointer hover:text-LimeGreen">
                    Careers
                  </li>
                  <li className="cursor-pointer hover:text-LimeGreen">
                    Support
                  </li>
                  <li className="cursor-pointer hover:text-LimeGreen">
                    Privacy Policy
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div className="mt-8 grid justify-center">
            <Button />
            <br />
            <span className="mt-4 text-center text-sm text-GrayishBlue lg:text-left">
              © Easybank. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
