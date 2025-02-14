import { ArrowRight, ArrowUpRight } from "../../../../../public/icons";

const HeroSection = () => {
  return (
    <div className="py-10 md:py-[72px] space-y-[64px] overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-[1056px] mx-auto gap-10">
        <h1 className="text-[58.5px] lg:text-[104px] md:text-7xl font-bold tracking-tight text-center md:text-left leading-none">
          I&apos;m a visual designer with passion to create
          <span className="text-[#9ca3af]"> a great experiences</span>
        </h1>

        <div className="flex items-center justify-center gap-8">
          <hr className="w-1/2 h-px hidden md:block bg-[#d1d5db]" />
          <p className="text-[22px] text-[#374151] leading-tight text-center md:text-left">
            I&apos;m Ivan, a Visual Designer living in Munich, and I focus on
            making digital experiences that are easy to use, enjoyable, and get
            the job done.
          </p>
        </div>

        <div className="flex flex-col w-full gap-10 md:items-end md:flex-row-reverse md:justify-between">
          <button className="py-6 px-[37px] items-center justify-center text-[22px] md:w-fit w-full bg-[#030312] hover:bg-[#030312]/80 ease-in-out duration-300 flex gap-3 text-white rounded-full font-semibold">
            Let&apos;s talk
            <img src={ArrowRight} alt="arrow right icon" />
          </button>

          <ul className="grid w-fit self-center md:w-auto md:self-auto grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[56px] font-medium place-items-center md:place-items-start h-fit">
            <li className="flex gap-3 cursor-pointer group">
              <button className="text-sm uppercase group-hover:underline">
                Instagram
              </button>
              <img src={ArrowUpRight} alt="arrow right icon" />
            </li>
            <li className="flex gap-3 cursor-pointer group">
              <button className="text-sm uppercase group-hover:underline">
                Behance
              </button>
              <img src={ArrowUpRight} alt="arrow right icon" />
            </li>
            <li className="flex col-span-2 gap-3 cursor-pointer group md:col-auto">
              <button className="text-sm uppercase group-hover:underline">
                Dribble
              </button>
              <img src={ArrowUpRight} alt="arrow right icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
