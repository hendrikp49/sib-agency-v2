import {
  ArrowUpRightWhite,
  Instagram,
  Tiktok,
  Twitter,
  Youtube,
} from "../../../public/icons";

const Footer = () => {
  return (
    <footer className="py-10 px-5 relative md:p-[72px] bg-[#030712] text-white">
      <div className="flex flex-col gap-[56px] md:gap-[93px]">
        {/* top */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-[64px]">
          {/* nav */}
          <ul className="flex gap-8 text-sm font-medium md:gap-10">
            <li>
              <a href="#" className="underline">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                WORKS
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                INSIGHTS
              </a>
            </li>
          </ul>
          {/* socmed */}
          <div className="flex gap-8">
            <button>
              <img src={Twitter} alt="Twitter" />
            </button>
            <button>
              <img src={Youtube} alt="Youtube" />
            </button>
            <button>
              <img src={Tiktok} alt="Tiktok" />
            </button>
            <button>
              <img src={Instagram} alt="Instagram" />
            </button>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-[72px] md:flex-row md:justify-between">
          {/* left */}
          <div className="flex flex-col gap-6 max-w-[380px] w-full">
            <h4 className="text-[#6b7280] text-[22px]">
              Keep up with me if you can.
            </h4>
            <div className="relative pb-5 border-b-2 w-">
              <input
                type="text"
                className="text-[#4b5563] bg-transparent focus:outline-none"
                placeholder="Enter your email"
              />
              <div className="absolute top-0 right-0 w-6 h-6">
                <img
                  src={ArrowUpRightWhite}
                  alt="Arrow right icon"
                  className=""
                />
              </div>
            </div>
          </div>
          {/* rigth */}
          <p className="text-[#4b5563] self-end w-full text-center md:w-auto md:text-left">
            ©2023 All Rights Reserved. Designed with 🤍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
