import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

const AboutOverview = () => {
  const AboutLinks = [
    { id: 1, link: "#DMTIMS-Rankings", text: "DMTIMS Rankings" },
    { id: 2, link: "#Core-Values", text: "Core Values" },
    { id: 3, link: "#VES-Trust", text: "VES Trust’s Legacy" },
    {
      id: 4,
      link: "#Message-from-Management",
      text: "Message from Management",
    },
    { id: 5, link: "#Heads", text: "From the desk of" },
    { id: 6, link: "#Board-of-Trustees", text: "Board of Trustees" },
    { id: 7, link: "#Board-of-Studies", text: "Board of Studies" },
    { id: 8, link: "#Invitees", text: "Invitees" },
    { id: 9, link: "#Advisory-Council", text: "Advisory Council" },
    { id: 10, link: "#Infrastructure", text: "Infrastructure" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl border-b-2 border-[#BDBDBD] pt-8">
          <div className="flex flex-col-reverse py-4 lg:flex-row">
            <div className="flex flex-col py-8">
              <h1 id="About-DMTIMS" className="dmtims-subtitle">
                About DMTIMS
              </h1>
              <p className="dmtims-text">
                With the city of dreams, Mumbai within an hour on the right side
                and the twin hill stations of Lonavala & Khandala within an hour
                on its left side, located in the precincts of a peaceful and
                vibrant urban community, in the midst of swaying palm trees and
                open lawns and sublimely surrounded by malls, shopping centres,
                multi cuisine restaurants, medical centres, railway stations and
                bus depots within 2 kms of its campus, Dr. Mar Theophilus
                Institute of Management Studies, under the Vishweshwar Education
                Society Trust (VES), is an ideal locale for a conducive two-year
                higher management education study. Led by a distinguished and
                exceptional faculty team, scholarly community of students,
                steered by an outstanding Board of Studies, a rich legacy of UG
                to PG educational institutes and buoyed by international
                collaborations, Dr. Mar Theophilus Institute of Management
                Studies (DMTIMS) is emerging as the most preferred Business
                School in Navi Mumbai within a short span of time.
              </p>
              <p className="dmtims-text">
                DMTIMS, through its 2-year full time AICTE approved PGDM program
                aims to impart education, combined with creation, dissemination
                and application of knowledge, met in an integrated form, to
                create a synergetic impact. The Institute fosters and nurtures
                leaders capable of making a positive difference in the
                management of corporate sectors. We inculcate human values and
                professional ethics in our students, which help them make
                decisions and conceive and create paths that are good and long
                lasting not only for them, but also for the society, the nation,
                and for the world as a whole.
              </p>
            </div>
            <div className="flex-shrink-0 px-2 lg:w-1/2">
              <div className="mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-[#F2F2F2] lg:ml-auto lg:mr-0">
                <div className="h-2 bg-[#EE3768]" />
                <div className="flex flex-col py-2">
                  <h1 className="px-6 pt-2 text-3xl font-bold text-[#4C477A] lg:pt-4 lg:pb-2 lg:text-4xl">
                    About Us
                  </h1>
                  {AboutLinks &&
                    AboutLinks.map((item) => (
                      <Link legacyBehavior key={item.id} href={item.link}>
                        <a className="group mx-4 border-b-2 py-1 last:border-none">
                          <div className="flex transform items-end rounded-md border-[#BDBDBD] py-1 px-2 transition duration-300 hover:bg-[rgba(189,189,189,0.35)]">
                            <p className="flex-grow font-medium text-[#28314A] lg:text-lg">
                              {item.text}
                            </p>
                            <ArrowRightIcon className="h-8 w-8 transform rounded-full border-2 border-[#FFB800] p-1 text-[#4C477A] transition duration-300 group-hover:rotate-45" />
                          </div>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
