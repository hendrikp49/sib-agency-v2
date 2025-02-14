import { ArrowRightBlack } from "../../../../../public/icons";

const WorkSection = () => {
  const projects = [
    {
      id: "sportly",
      title: "Sportly",
      subTitle: "Mobile App Design",
    },
    {
      id: "payrole",
      title: "Payrole",
      date: "May 5, 2023",
      subTitle: "Mobile App Design",
    },
    {
      id: "wepay",
      title: "Wepay",
      subTitle: "Mobile App Design",
    },
    {
      id: "estatery",
      title: "Estatery",
      subTitle: "Mobile App Design",
    },
    {
      id: "sportly",
      title: "Sportly",
      subTitle: "Mobile App Design",
    },
  ];

  return (
    <section className="py-10 md:py-[72px]">
      <div className="flex flex-col gap-8 md:gap-14">
        {/* title */}
        <h2 className="text-[56px] md:text-[72px] font-semibold">
          Discover my latest work
        </h2>

        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-8">
          {/* card */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex ${
                project.id === "wepay" && "md:col-span-2"
              } flex-col gap-6`}
            >
              {/* image */}
              <div className="h-[260px] md:h-[400px] bg-[#b3b3b3] rounded-[20px] overflow-hidden">
                <img
                  src="images/hero 1.png"
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* text */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-semibold">{project.title}</h3>
                  <p className="text-lg text-[#374151]">{project.subTitle}</p>
                </div>
                <button className="flex items-center hover:bg-[#f9fafb] ease-in-out duration-300 justify-center md:py-4 md:px-7 w-fit border rounded-full border-[#030712] py-3 px-6">
                  <img src={ArrowRightBlack} alt="arrow right icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center self-center gap-3 font-semibold w-fit">
          View All Works
          <img src={ArrowRightBlack} alt="arrow right icon" />
        </button>
      </div>
    </section>
  );
};

export default WorkSection;
