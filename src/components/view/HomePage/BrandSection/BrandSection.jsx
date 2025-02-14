import { Django, Pipefy, Portal, Rackspace } from "../../../../../public/icons";

const BrandSection = () => {
  const brand = [
    {
      id: 1,
      logo: Pipefy,
      title: "UIUX & Branding",
      year: 2022,
    },
    {
      id: 2,
      logo: Django,
      title: "UIUX & Branding",
      year: 2022,
    },
    {
      id: 3,
      logo: Rackspace,
      title: "UIUX & Branding",
      year: 2022,
    },
    {
      id: 4,
      logo: Portal,
      title: "UIUX & Branding",
      year: 2022,
    },
  ];
  return (
    <section className="py-10 md:py-[72px]">
      <div className="flex flex-col items-center gap-8 md:items-start md:gap-14">
        {/* title */}
        <h2 className="text-[56px] md:text-[72px] text-center md:text-left leading-none font-semibold">
          A visual partner for brands, companies, and agencies
        </h2>

        {/* Brand Container */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:justify-between md:gap-12">
          {/* Brand Card */}
          {brand.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between gap-6 md:items-start"
            >
              <div className="max-w-[156px]">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-semibold text-center md:text-left">
                  {item.title}
                </h3>
                <p className="text-lg text-[#374151] text-center md:text-left">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
