import { ArrowUpRight } from "../../../../../public/icons";

const AwwardsSection = () => {
  const awwards = [
    {
      id: 1,
      title: "Honorable Mention",
      years: "2022",
      platform: "AWWARDS",
    },
    {
      id: 2,
      title: "Site of The Day",
      years: "2022",
      platform: "CSS Winners",
    },
    {
      id: 3,
      title: "Best UI Design",
      years: "2022",
      platform: "CSS Design Awards",
    },
    {
      id: 4,
      title: "Site of The Day",
      years: "2022",
      platform: "AWWARDS",
    },
  ];

  return (
    <section className="py-10 md:py-[72px]">
      <div className="flex flex-col gap-8 md:gap-14">
        {/* top */}
        <div className="flex flex-col gap-8 md:gap-[56px] md:flex-row md:justify-between">
          {/* image */}
          <div className="bg-[#e5e7eb] md:w-[36%] border flex items-center justify-center h-[363px] rounded-[20px] max-w-full">
            <img
              src="/images/awward.png"
              alt="awward image"
              className="object-cover"
            />
          </div>

          {/* text */}
          <div className="flex flex-col items-center flex-1 gap-6 md:justify-between md:items-start md:gap-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[56px] text-center md:text-left md:text-[72px] font-semibold leading-none break-words">
                Awwards Winning - Independent of The Year
              </h2>

              <p className="text-[18px] text-[#374151] text-center md:text-left">
                Ivan Kazarov - 2022
              </p>
            </div>

            <button className="py-4 px-7 w-fit border rounded-full hover:bg-[#f9fafb] ease-in-out duration-300 border-[#030712]">
              <img src={ArrowUpRight} alt="arrow right icon" />
            </button>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-6">
          {awwards.map((item) => (
            <div
              key={item.id}
              className="flex items-center hover:bg-[#f9fafb] justify-between pb-6 border-b-2 ease-in-out duration-300 cursor-pointer"
            >
              {/* text */}
              <div className="space-y-2">
                <h3 className="text-[22px] font-semibold">{item.title}</h3>
                <p className="text-[#374151] text-lg">
                  {item.years} - {item.platform}
                </p>
              </div>
              {/* button */}
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-[#f9fafb] rounded-full">
                <img src={ArrowUpRight} alt="arrow right icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwwardsSection;
