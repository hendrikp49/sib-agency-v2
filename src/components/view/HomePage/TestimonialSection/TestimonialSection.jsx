import {
  Avatar,
  Django,
  Pipefy,
  Rackspace,
  Teamwork,
} from "../../../../../public/icons";

const TestimonialSection = () => {
  const testimonial = [
    {
      id: 1,
      name: "Richard Jonas",
      job: "CEO",
      company: "Teamwork",
      logo: Teamwork,
      testimoni: `"I had the pleasure of working with Daniel on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Daniel for anyone looking for a talented and professional designer."`,
    },
    {
      id: 2,
      name: "Savanah Megan",
      job: "CEO",
      company: "Django",
      logo: Django,
      testimoni: `“His professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. We are incredibly grateful for Sarah's contributions and would highly recommend her to anyone in need of a talented and reliable designer.”`,
    },
    {
      id: 3,
      name: "Rachel Voskov",
      job: "CEO",
      company: "Pipefy",
      logo: Pipefy,
      testimoni: `“Ivan is an exceptionally talented designer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs that perfectly captured our brand's essence.”`,
    },
    {
      id: 4,
      name: "Richard Jonas",
      job: "CEO",
      company: "Rackspace",
      logo: Rackspace,
      testimoni: `"Working with Ivan was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product."`,
    },
  ];

  return (
    <section className="py-10 md:py-[72px]">
      <div className="flex flex-col gap-8 lg:flex-row md:justify-between lg:gap-[72px]">
        {/* left */}
        <h2 className="text-[56px] lg:w-[394px] text-center md:text-left md:text-[72px] font-semibold leading-none">
          Let&apos;s see what my clients say
        </h2>

        {/* right */}
        <div className="flex flex-col items-center gap-12 lg:w-3/5 md:items-start">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-8 pb-12 border-b-2 md:gap-14"
            >
              {/* testimoni */}
              <p className="text-[22px] text-center md:text-left">
                {item.testimoni}
              </p>

              {/* user container */}
              <div className="flex flex-col items-center gap-6 lg:items-end lg:w-full lg:flex-row md:justify-between md:gap-0">
                {/* user */}
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
                  {/* image */}
                  <div className="w-16 h-16 overflow-hidden rounded-full bg-[#EDEEF0] flex items-center justify-center">
                    <img src={Avatar} alt="avatar icon" />
                  </div>
                  {/* user name */}
                  <div className="space-y-1 text-lg">
                    <h3 className="font-semibold text-center md:text-left">
                      {item.name}
                    </h3>
                    <p className="text-[#6b7280] text-center md:text-left">
                      {item.job} of{" "}
                      <span className="text-[#030712]">{item.company}</span>
                    </p>
                  </div>
                </div>

                {/* logo */}
                <div>
                  <img src={item.logo} alt={item.company} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
