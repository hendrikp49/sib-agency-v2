import { ArrowRightBlack } from "../../../../../public/icons";

const AboutSection = () => {
  return (
    <section className="py-10 md:py-[72px]  flex flex-col md:flex-row gap-8 lg:gap-14">
      {/* image */}
      <div className="md:max-w-[395px] w-full h-[385px] mx-auto max-w-[335px] rounded-[20px] overflow-hidden bg-[#b3b3b3]">
        <img
          src="images/hero 2.png"
          alt="about-me"
          className="object-cover w-full h-full"
        />
      </div>

      {/* text */}
      <div className="flex flex-col gap-8 md:gap-10 w-full max-w-[605px] mx-auto">
        <div className="flex flex-col flex-1 gap-4 md:gap-6">
          <h1 className="text-[56px] md:text-[71px] text-center md:text-left font-semibold leading-none break-words">
            Design that sparks engagement and inspires action
          </h1>
          <p className="text-[#374151] text-lg text-center md:text-left">
            I&apos;m a Product Designer living in Munich, and I focus on making
            digital experiences that are easy to use, enjoyable, and get the job
            done. I love tackling challenging problems and creating solutions
            that truly matter to people.
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 font-semibold hover:underline md:w-fit">
          About Me
          <img src={ArrowRightBlack} alt="arrow right icon" />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
