import Image from "next/legacy/image";
import SusyKuriakose from "./images/SusyKuriakose.webp";
import SusenVarghese from "./images/SusenVarghese.webp";

const AboutHeads = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Heads" className="dmtims-title">
            From the desk of
          </h2>
          {/* <p className='dmtims-text pb-8 lg:w-4/5'>Welcome to VES’s Dr. Mar Theophilus Institute of Management Studies (DMTIMS), which is managed by “Malankara Orthodox Church Council of Bombay (MOCCB)”. The Institute offers a “Post Graduate Diploma in Management (PGDM)”, two years industry-focused full-time program.</p> */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
            {/* <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={SusyKuriakose}
                  alt="Susy-Kuriakose"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Susy-Kuriakose" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                In -charge Director
              </p>
              <p className="dmtims-subtitle">Dr. Susy Kuriakose</p>
              <p className="dmtims-text">
                DMTIMS is committed to a culture of continuous improvement that
                ensures the currency and relevance of its graduate degree
                programs in the context of an everchanging world and
                fast-evolving technological advancement. DMTIMS completes its
                first year in PGDM program and fosters a mindset by continuously
                enhancing its engagement with industry and the community to
                foster an innovative academic ecosystem with high-quality,
                cutting-edge programs. DMTIMS embraces a learner-centric
                approach to education, with a learning journey for students that
                values personal, academic, and professional success. On behalf
                of the institute's leadership team, I welcome you to DMTIMS.
              </p>
            </div> */}
            <div className="flex flex-col">
              <div className="relative mb-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={SusenVarghese}
                  alt="Susen-Varghese"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Susen-Varghese" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                Director
              </p>
              <p className="dmtims-subtitle">Dr. Susen Varghese</p>
              <p className="dmtims-text">
                Welcome to VES'S AICTE approved Dr. Mar Theophilus Institute of
                Management Studies, Navi Mumbai. Come home to world class
                management education! The two years of DMTIMS edulife is a blend
                of brilliance of educational services and experiences. We ensure
                that every day at DMTIMS, is a date with the best in the
                industry, brimming with intellectual exchanges of classroom
                interactions, experiential learning, corporate seminars,
                outbound encounters, leadership mentoring, exceptional research
                exposure etc. A life transformational journey, awaits our
                student managers with the finesse and fitness of global leader
                with Indian values. Join us to experience it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeads;
