import BoxReveal from "@/components/magicui/box-reveal";

const Expertise = () => {
  const expertises = [
    {
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <section id="about" className="mt-24 mb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-4">
        <div className="flex-auto flex flex-col w-full items-start justify-center h-full gap-4">
          <BoxReveal boxColor={"transparent"} duration={0.25}>
            <h1 className="text-5xl font-labil font-semibold">Expertise</h1>
          </BoxReveal>
          <BoxReveal boxColor={"transparent"} duration={0.15}>
            <p className="text-balance font-labil">
              Discover my expertise in delivering tailored, <br /> user-centric
              digital solutions.
            </p>
          </BoxReveal>
        </div>
      </div>

      {/* Projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center py-12 gap-7 mt-10 w-full">
        {expertises.map((expertise) => (
          <div
            key={expertise.title}
            className="flex flex-col justify-center gap-4 w-fit max-sm:w-full"
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-labil font-semibold">
                {expertise.title}
              </h1>
              <p className="text-balance font-labil">{expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
