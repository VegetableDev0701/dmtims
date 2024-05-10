// import Image from "next/legacy/image";
// import Link from "next/link";
// import { Dispatch, SetStateAction, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // import Swiper core and required modules
// import SwiperCore, {
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectFade,
// } from "swiper";

// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation]);

// interface Props {
//   setIsProgramsHovered: Dispatch<SetStateAction<boolean>>;
//   isProgramsHovered: boolean;
// }

// const ProgramsMegaMenu = ({
//   setIsProgramsHovered,
//   isProgramsHovered,
// }: Props) => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

//   const slides = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930812561186775050/pretty-young-girl-holding-book-posing-grey-background_1.png",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930812896781406228/Group_1349.png",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813019850674186/Group_1346_1.png",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813059428139008/image_205.png",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813138696306708/Group_1350.png",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813189514465370/pretty-young-girl-holding-book-posing-grey-background_1_1.png",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813247681089536/pretty-young-girl-holding-book-posing-grey-background_1_2.png",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813289607331850/pretty-young-girl-holding-book-posing-grey-background_1_3.png",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813332825444372/pretty-young-girl-holding-book-posing-grey-background_1_4.png",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813372373545030/pretty-young-girl-holding-book-posing-grey-background_1_5.png",
//     },
//     {
//       id: 10,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813457157222500/Group_1351.png",
//     },
//     {
//       id: 11,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813535376773180/Group_1352.png",
//     },
//     {
//       id: 12,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813572756426802/pretty-young-girl-holding-book-posing-grey-background_1_6.png",
//     },
//   ];

//   const changeSlide = (i: number) => {
//     swiperInstance?.slideTo(i);
//   };

//   return (
//     <div
//       onMouseEnter={() => setIsProgramsHovered(true)}
//       onMouseLeave={() => setIsProgramsHovered(false)}
//       className={`absolute hidden w-full bg-white px-4 lg:block ${
//         isProgramsHovered ? "max-h-[50vh]" : "max-h-0"
//       } transform overflow-hidden shadow-md transition-all duration-300`}
//     >
//       <div className="mx-auto flex w-full max-w-screen-2xl py-8">
//         <div className="grid flex-grow grid-cols-3 gap-4">
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Full-Time-PGDM"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Full Time PGDM
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#Program-Overview"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(1)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Program Overview
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-USP"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(2)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS USPs
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-Advantages"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(3)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS Advantages
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-Ergonomics"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS Ergonomics
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#Unique-Way-of-Learning"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   A Unique Way of Learning
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#PGDM-Course-Highlights"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   PGDM Course Highlights
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Core-Courses"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     PGDM Specialization
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#GFF"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(6)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Global Finance & Fintech(GFF)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#IM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   International Marketing(IM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#HCM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(8)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Human Capital Management(HCM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#SCM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(9)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Supply Chain Management(SCM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#IBM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(10)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   International Business Management(IBM)
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#PGDM-Skill-Certifications"}>
//                 <a className="mb-4 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Additional Free PGDM Skill Certifications
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#Soft-Skills"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(11)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Soft Skills
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#Technical-Domain-Skills"}>
//               <a className="mb-4">
//                 <span
//                   onMouseEnter={() => changeSlide(12)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Technical / Domain Skills
//                 </span>
//               </a>
//             </Link>
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Admission-Process"}>
//                 <a
//                   onMouseEnter={() => changeSlide(13)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Admission Process
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <a
//                 onMouseEnter={() => changeSlide(13)}
//                 className="mb-4 text-xl font-medium"
//                 href="/files/DMTIMS-2023-PGDM-Academic-Calendar.pdf"
//                 target="_blank"
//               >
//                 <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                   Academic Calander
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0">
//           <Swiper
//             effect={"fade"}
//             onSwiper={setSwiperInstance}
//             loop={true}
//             allowTouchMove={false}
//             className="flex w-[22rem] select-none xl:w-[24rem] 2xl:w-[26rem]"
//           >
//             {slides.map(({ id, image }) => (
//               <SwiperSlide
//                 tabIndex={0}
//                 key={id}
//                 className={`w-[22rem] overflow-hidden rounded-sm bg-white xl:w-[24rem] 2xl:w-[26rem]`}
//               >
//                 <div className="relative h-[280px]">
//                   <Image
//                     src={image}
//                     alt={"program-megamenu-img-" + id}
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramsMegaMenu;



















/**my changes */
import Image from "next/legacy/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation]);

interface Props {
  setIsProgramsHovered: Dispatch<SetStateAction<boolean>>;
  isProgramsHovered: boolean;
}

const ProgramsMegaMenu = ({
  setIsProgramsHovered,
  isProgramsHovered,
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image:"/newImages/program0.webp"},
    {
      id: 1,
      image: "/newImages/program1.webp"},
    {
      id: 2,
      image:"/newImages/program2.webp"},
    {
      id: 3,
      image:"/newImages/program3.webp"  },
    {
      id: 4,
      image:"/newImages/program3.webp" },
    {
      id: 5,
      image:"/newImages/program4.webp"   },
    {
      id: 6,
      image:"/newImages/program5.webp"  },
    {
      id: 7,
      image: "/newImages/program6.webp"},
    {
      id: 8,
      image:"/newImages/program7.webp"    },
    {
      id: 9,
      image:"/newImages/program8.webp"    },
    {
      id: 10,
      image:"/newImages/program9.webp"    },
    {
      id: 11,
      image:"/newImages/program10.webp"    },
    {
      id: 12,
      image:"/newImages/program11.webp"    },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsProgramsHovered(true)}
      onMouseLeave={() => setIsProgramsHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isProgramsHovered ? "max-h-[50vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/programs#Full-Time-PGDM"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Full Time PGDM
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#Program-Overview"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(1)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Program Overview
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-USP"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(2)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  DMTIMS USPs
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-Advantages"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(3)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  DMTIMS Advantages
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-Ergonomics"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  DMTIMS Ergonomics
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#Unique-Way-of-Learning"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  A Unique Way of Learning
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#PGDM-Course-Highlights"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  PGDM Course Highlights
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/programs#Core-Courses"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    PGDM Specialization
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#GFF"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(6)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Global Finance & Fintech(GFF)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IM"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  International Marketing(IM)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#HCM"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(8)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Human Capital Management(HCM)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#SCM"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(9)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Supply Chain Management(SCM)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  International Business Management(IBM)
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/programs#PGDM-Skill-Certifications"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Additional Free PGDM Skill Certifications
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#Soft-Skills"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(11)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Soft Skills
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#Technical-Domain-Skills"}>
              <a className="mb-4">
                <span
                  onMouseEnter={() => changeSlide(12)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Technical / Domain Skills
                </span>
              </a>
            </Link>
            <div className="flex">
              <Link legacyBehavior href={"/programs#Admission-Process"}>
                <a
                  onMouseEnter={() => changeSlide(13)}
                  className="mb-4 text-xl font-medium"
                >
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Admission Process
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <a
                onMouseEnter={() => changeSlide(13)}
                className="mb-4 text-xl font-medium"
                href="/files/DMTIMS-2023-PGDM-Academic-Calendar.pdf"
                target="_blank"
              >
                <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                  Academic Calander
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <Swiper
            effect={"fade"}
            onSwiper={setSwiperInstance}
            loop={true}
            allowTouchMove={false}
            className="flex w-[22rem] select-none xl:w-[24rem] 2xl:w-[26rem]"
          >
            {slides.map(({ id, image }) => (
              <SwiperSlide
                tabIndex={0}
                key={id}
                className={`w-[22rem] overflow-hidden rounded-sm bg-white xl:w-[24rem] 2xl:w-[26rem]`}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={image}
                    alt={"program-megamenu-img-" + id}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProgramsMegaMenu;
