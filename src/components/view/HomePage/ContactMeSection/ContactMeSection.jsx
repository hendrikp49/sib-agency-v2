import { ArrowUpRightWhite } from "../../../../../public/icons";

const ContactMeSection = () => {
  return (
    <section className="py-10 md:py-[104px] border-b border-[#4b5563] text-white bg-[#030712] px-5 md:px-[72px]">
      <div className="flex flex-col gap-10">
        {/* top */}
        <p className="text-[28px] font-medium text-center md:text-left">
          HAVE A NICE WORKS? LET&apos;S TALK WITH ME
        </p>
        {/* bottom */}
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <h2 className="text-[58.5px] font-bold text-center md:text-left md:text-[104px] break-all">
            <span className="text-[#6b7280]">hello</span>@kazarov.com
          </h2>
          <button className="h-[72px] bg-[#1f2937] rounded-full w-[72px] flex items-center justify-center">
            <img src={ArrowUpRightWhite} alt="arrow right icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
