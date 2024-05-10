import Image from "next/legacy/image";
import Bg from "./images/FacultyBg.webp";

const FacultyBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pt-8 pb-4 ">
          <div className="flex flex-col py-4 lg:flex-row lg:items-center">
            <div className="flex-shrink-0 pb-2 lg:mx-auto lg:py-10">
              <div className="relative h-[3.5rem] overflow-hidden md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
                <h4 className="text-5xl font-bold tracking-tighter text-[#EE3768] md:text-6xl lg:text-7xl xl:text-8xl">
                  Meet the
                </h4>
              </div>
              <div className="relative h-[3.5rem] overflow-hidden md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
                <h4 className="text-5xl font-bold tracking-tighter text-[#EE3768] md:text-6xl lg:text-7xl xl:text-8xl">
                  <u className="text-[#FFB800]">
                    <em className="text-[#EE3768]">visionaries</em>
                  </u>{" "}
                  that
                </h4>
              </div>
              <div className="relative mb-5 h-[3.5rem] overflow-hidden md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
                <h4 className="text-5xl font-bold tracking-tighter text-[#EE3768] md:text-6xl lg:text-7xl xl:text-8xl">
                  drive our vision
                </h4>
              </div>
            </div>
            <div className="flex-grow lg:px-8 xl:px-16">
              <p className="pb-5 text-lg font-medium text-[#28314A] sm:text-xl md:pb-8 md:text-2xl xl:text-3xl">
                To create a competitive learning environment, enabling our
                stakeholders to realize their full potential
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Faculty-Banner"
          src={Bg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col bg-[#FFB800] px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-6">
          <div className="flex flex-col py-4 ">
            <p className="pb-2 font-bold uppercase text-[#4C477A] lg:text-lg xl:text-xl 2xl:text-2xl">
              Our Mission
            </p>
            <p className="text-lg font-medium text-white lg:text-xl xl:text-2xl 2xl:text-3xl">
              <em>
                “To become an Internationally ranking business school, providing
                quality & holistic education to develop inspiring leaders to
                transform the business world.”
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyBanner;
