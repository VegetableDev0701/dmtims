import Image from "next/legacy/image";
import ProgramOverviewImg from "./images/ProgramOverviewImg.webp";

const ProgramOverview = () => {
  const AboutLinks = [
    { id: 0, link: "/", text: "Mission" },
    { id: 1, link: "/", text: "Vision" },
    { id: 2, link: "/", text: "Overview" },
    { id: 3, link: "/", text: "VES Trust" },
    { id: 4, link: "/", text: "Message from Management" },
    { id: 5, link: "/", text: "Advisory Council" },
    { id: 7, link: "/", text: "Infrastructure" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl py-8">
          <h1 id="Full-Time-PGDM" className="dmtims-title lg:pb-2">
            Post Graduate Diploma in Management
          </h1>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col py-8">
              <p id="Program-Overview" className="dmtims-subtitle">
                Program Overview
              </p>
              <p className="pb-4 text-lg font-semibold">
                DMTIMS's PGDM flagship programme’s multidisciplinary learning
                offers a fine blend of general management and functional
                specializations offered in Marketing, Finance, Human Resources,
                and Operations.
              </p>
              <p className="dmtims-text">
                It aims to nurture students as competent future managers with
                leadership abilities and an innovative mindset combined with
                exposure to real-life business scenarios. <br /> Its
                transformative pedagogy includes lectures, on-field industrial
                projects, simulation games promoting cross-functional leadership
                which is delivered by outstanding academicians and renowned
                Industry experts from leading companies.
              </p>
            </div>
            <div className="flex-shrink-0 lg:w-1/2">
              <div className="relative h-[350px] sm:h-[375px] md:h-[400px] lg:ml-16 lg:h-[425px] xl:ml-32 2xl:ml-48">
                <Image
                  priority
                  src={ProgramOverviewImg}
                  alt="ProgramOverviewImg"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
