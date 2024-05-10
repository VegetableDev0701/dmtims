import Image from "next/legacy/image";
import LearnMore from "../LearnMore/LearnMore";
import IIBM from "./images/IIBM.webp";
import DMTIMS from "./images/DMTIMS.webp";
import WCCMB from "./images/WCCMB.webp";
import LegacyTimeline from "../LegacyTimeline/LegacyTimeline";

const VESTrust = () => {
  const legacy = [
    {
      id: 0,
      image: IIBM,
      title: "IIBM",
      text: [
        "IIBM attracts the brightest minds and puts them in an extremely diverse and competitive environment where they continuously strive for excellence while imbibing the human values and leadership qualities.",
        "The institute facilitates practical learning of MBA course by providing an optimal mix of classroom learning and industry exposure. It also acclimatizes students to the dynamics of changing the business world by fostering interest and due awareness, shaping strategy acumen by augmenting analytical and interpersonal skills. Students are motivated to carve a niche for themselves in the market.",
      ],
      link: "https://indiraiibm.edu.in/",
    },
    {
      id: 1,
      image: DMTIMS,
      title: "DMTIMS",
      text: [
        "Welcome to VES’s Dr. Mar Theophilus Institute of Management Studies (DMTIMS), which is managed by “Malankara Orthodox Church Council of Bombay (MOCCB)”. The Institute offers a “Post Graduate Diploma in Management (PGDM)”, two years industry-focused full-time program.",
        "It has state-of-the-art infrastructure, specifically designed to create a stimulating atmosphere. It is located very close to Sanpada and Juinagar railway stations, Navi Mumbai.",
      ],
      link: "",
    },
    {
      id: 2,
      image: WCCMB,
      title: "WCCBM",
      text: [
        "Western College of Commerce & Business Management is conveniently located in the heart of Navi Mumbai at Sanpada. The college conducts Junior College Commerce Courses, and four undergraduate degree courses – B.Com. B.Sc. (IT), B.M.S and B.Com (Accounting & Finance). In order to fulfill the Institution’s vision WCCBM offers the industry a new breed of talented young men and women, thereby creating an atmosphere of professionalism.",
      ],
      link: "http://wccbm.ac.in/infrastructure/",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="VES-Trust" className="dmtims-title">
            VES Trust’s Legacy
          </h2>
          <p className="dmtims-text lg:w-4/5">
            The prestigious MOCCB run VES Trust's Group of Institutes are
            pioneers in education in Mumbai well known for its chain of
            educational institutes established all over Maharashtra and Gujarat
            from KG to PG. More popularly known as the St. Mary's Group of
            Institutes, the span of various schools spreads across different
            cities in Maharashtra, whereas the junior college, the undergraduate
            college and the post graduate colleges are based in Navi Mumbai.
          </p>
          <LegacyTimeline />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8 2xl:gap-10">
            {legacy.map(({ id, image, title, text, link }) => (
              <div key={id} id={title} className="flex flex-col">
                <div className="relative mb-6 h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px]">
                  <Image
                    priority
                    src={image}
                    alt={"img" + id}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="dmtims-subtitle">{title}</p>
                {text.map((item, i) => (
                  <p key={i} className="dmtims-text">
                    {item}
                  </p>
                ))}
                {id != 1 && <LearnMore link={link} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VESTrust;
