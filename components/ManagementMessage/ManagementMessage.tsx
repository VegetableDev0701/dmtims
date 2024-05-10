import Image from "next/legacy/image";
import PhiliposeMarTheophilus from "./images/PhiliposeMarTheophilus.webp";
import GeevargheseMarCoorilos from "./images/GeevargheseMarCoorilos.webp";
import FatherAbrahamJoseph from "./images/FatherAbrahamJoseph.webp";
import ambarishPatnigere2 from './images/ambarishPatnigere2.png'
const ManagementMessage = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Message-from-Management" className="dmtims-title">
            Message from Management
          </h2>
          {/* <p className='dmtims-text pb-8 lg:w-4/5'>Welcome to VES’s Dr. Mar Theophilus Institute of Management Studies (DMTIMS), which is managed by “Malankara Orthodox Church Council of Bombay (MOCCB)”. The Institute offers a “Post Graduate Diploma in Management (PGDM)”, two years industry-focused full-time program.</p> */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={PhiliposeMarTheophilus}
                  alt="PhiliposeMarTheophilus"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Philipose-Mar-Theophilus" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                Patron
              </p>
              <p className="dmtims-subtitle">
                L. L. His Grace Dr. Philipose Mar <br /> Theophilus,
                Metropolitan
              </p>
              <p className="dmtims-text">
                Late Lamented His Grace Dr. Philipose Mar Theophilus, our
                Patron, was a visionary beyond his times. While his initial
                calling was towards spirituality and emotional uplifting of the
                people at large, he widened this calling into developing
                youngsters into responsible and capable human beings through
                providing affordable education. A graduate from Harvard
                University, USA & Cardiff University, UK, he is known as the
                Ambassador of the Malankara Church and was associated with the
                founding of the World Christian Council. He is also known as the
                Architect of the Bombay Diocese. DMTIMS, our College for PGDM
                Course, is therefore, named in remembrance of this true
                visionary.
              </p>
              <p className="dmtims-text">
                Our head office in Vashi, Navi Mumbai located on the road is
                also named after him, Dr. Mar Theophilus Marg.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mb-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={GeevargheseMarCoorilos}
                  alt="GeevargheseMarCoorilos"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Geevarghese-Mar-Coorilos" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                From the Desk of President & Chief Managing Trustee
              </p>
              <p className="dmtims-subtitle">
                H.G. Geevarghese Mar <br /> Coorilos, Metropolitan
              </p>
              <p className="dmtims-text">
                Vishweshwar Education Society (VES) is a forerunner in
                recognizing the needs of the industry and meeting business
                requirements by developing human capital equipped with
                knowledge, skills and values essential for good performance.
                This journey began in 1998 with the establishment of WCCBM and
                subsequently with IIBM, affiliated to University of Mumbai in
                2007. VES in its efforts to keep with changing trends in the
                academic industry, established DMTIMS, an institution dedicated
                to meet these challenges. We welcome you to DMTIMS to help you
                shape your future, to turn your dreams into reality and to face
                the challenges ahead of you.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={ambarishPatnigere2}
                  alt="ambarishPatnigere"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Ambarish-Patnigere" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                From the Desk of Executive Director - VES Trust
              </p>
              <p className="dmtims-subtitle">Dr. Ambarish Patnigere</p>
              <p className="dmtims-text">
                At Dr. Mar Theophilus Institute of Management Studies we have adopted 
                innovation and creativity as major tools to ensure that we prepare our 
                students to acquire the knowledge and skills that will enable them to lead
                in diverse areas. DMTIMS engagement in research, both at national and 
                international levels, provides a great opportunity for professional
                development along with a competitive advantage.
                DMTIMS is committed to the development of professionalism, leadership 
                qualities, innovation and entrepreneurship attributes among its gratitudes.
                We have a history of excellent placements in multiple organizations. I 
                encourage you to connect with us and look forward to the opportunities 
                that await you at DMTIMS. 
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={FatherAbrahamJoseph}
                  alt="FatherAbrahamJoseph"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
            <div id="Father-Abraham-Joseph" className="flex flex-col py-4">
              <p className="dmtims-subtitle pb-0 font-medium text-[#4C477A]">
                From the Desk of Secretary
              </p>
              <p className="dmtims-subtitle">Rev. Fr Abraham Joseph</p>
              <p className="dmtims-text">
                At DMTIMS we have adopted innovation and creativity as major
                tools to ensure that we prepare our students to acquire the
                knowledge and skills that will enable them to lead in diverse
                areas..DMTIMS engagement in research, both at national and
                international levels, provides a great opportunity for
                professional development along with a competitive advantage.
                DMTIMS is committed to the development of professionalism,
                leadership qualities, innovation and entrepreneurship attributes
                among its graduates. We have a history of excellent placements
                in multiple organizations. I encourage you to connect to us and
                look forward to the opportunities that await you at DMTIMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementMessage;
