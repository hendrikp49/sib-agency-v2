import { ArrowRightBlack } from "../../../../../public/icons";

const InsightSection = () => {
  const insight = [
    {
      id: 1,
      text: "Mastering the Art of Color Theory: A Visual Designer's Guide",
    },
    {
      id: 2,
      text: "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
    },
  ];

  return (
    <div className="py-10 md:py-16">
      <div className="flex flex-col gap-10">
        {/* top */}
        <div className="flex flex-col gap-10 pb-8 border-b">
          <div className="flex justify-between">
            {/* Title */}
            <h5 className="md:text-[40px] w-full text-center md:w-auto md:text-left text-[32px] font-bold">
              Latest Insight
            </h5>

            {/* button */}
            <button className="items-center hidden gap-2 h-fit md:flex">
              <span className="font-semibold">View All Insights</span>
              <img src={ArrowRightBlack} alt="Arrow Right icon" />
            </button>
          </div>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {insight.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 md:items-center md:flex-row"
            >
              <div className="h-[145px] md:h-[130px] w-full md:max-w-[180px] rounded-[20px] overflow-hidden bg-[#b3b3b3]">
                <img
                  src="images/hero 3.png"
                  alt="insight"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h5 className="text-[22px] font-semibold">{item.text}</h5>
                <p className="text-lg text-[#374151]">May 5, 2023</p>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 px-4 py-2 mx-auto w-fit md:hidden">
          <span className="font-semibold">View All Insights</span>
          <img src={ArrowRightBlack} alt="Arrow Right icon" />
        </button>
      </div>
    </div>
  );
};

export default InsightSection;
