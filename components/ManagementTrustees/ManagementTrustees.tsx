import Image from "next/legacy/image";
import bg from "./images/TrusteesBg.webp";

const ManagementTrustees = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Board-of-Trustees" className="dmtims-title">
            Board of Trustees
          </h2>
          <div className="flex md:items-center md:py-10">
            <div className="relative mb-4 h-[400px] sm:w-96 md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              <Image
                priority
                src={bg}
                alt="bg"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    Hon. President & Managing Trustee
                  </p>
                  <p className="font-bold text-[#414042]">
                    Mr. H.G. Geevarghese Mar Coorilos
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">
                    Mr. M. T. Kochukunju
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. SECRETARY
                  </p>
                  <p className="font-bold text-[#414042]">
                    Rev. Fr. Abraham Joseph
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">
                    Dr. Sunny Pariyaram
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. TREASURER
                  </p>
                  <p className="font-bold text-[#414042]">Mr. M. K. Varghese</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">Mr. M. C. Sunny</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">Dr. Peter Philip</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">
                    Rev. Fr. Thomas K. Chacko
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">Mr. Jacob Varghese</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EE3768]">
                    HON. MEMBER
                  </p>
                  <p className="font-bold text-[#414042]">Mr. Abraham Easo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTrustees;
