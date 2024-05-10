import React from "react";

function IndustryExpertsVisitingFaculty() {
  const faculty = [
    { id: 0, name: "Dr. Apoorva Trivedi" },
    { id: 1, name: "Dr. Ira Kumar" },
    { id: 2, name: "Dr. Kazanfar Khan" },
    { id: 3, name: "Dr. Nishi Kaul" },
    { id: 4, name: "Dr. RC Walke" },
    { id: 5, name: "Dr. Sonali Kale" },
    { id: 6, name: "Prof. A K Saxena" },
    { id: 7, name: "Prof. Abhishek Gurav" },
    { id: 8, name: "Prof. Anand Patil" },
    { id: 9, name: "Prof. Anant Medhekar" },
    { id: 10, name: "Prof. Anil Jadwani" },
    { id: 11, name: "Prof. Ankita Choudhary" },
    { id: 12, name: "Prof. Arvind Chandramohan" },
    { id: 13, name: "Prof. Ashok Ramaswamy" },
    { id: 14, name: "Prof. Ashok VR" },
    { id: 15, name: "Prof. Ashwini Mhatre" },
    { id: 16, name: "Prof. Bawa Singh" },
    { id: 17, name: "Prof. Bharat Nadkarni" },
    { id: 18, name: "Prof. KSS Ramdev" },
    { id: 19, name: "Prof. Ketaki Ghatole" },
    { id: 20, name: "Prof. Laxmi Vaish" },
    { id: 21, name: "Prof. Manasi Salunkhe" },
    { id: 22, name: "Prof. Mayuri Choudhari" },
    { id: 23, name: "Prof. Mohd Maner Omar" },
    { id: 24, name: "Prof. Moreshwar Dhaygude" },
    { id: 25, name: "Prot. Naimesh Tungare" },
    { id: 26, name: "Prof. Nipu Kumar" },
    { id: 27, name: "Prof. Praful Sharma" },
    { id: 28, name: "Prof. RV Raman" },
    { id: 29, name: "Prof. Rahul Katke" },
    { id: 30, name: "Prof. Raj Vilas Kadam" },
    { id: 31, name: "Prof. Ramchandran V R" },
    { id: 32, name: "Prof. Ramkishen Y" },
    { id: 33, name: "Prof. Rohan Abraham Easo" },
    { id: 34, name: "Prof. Rubina Shaikh" },
    { id: 35, name: "Prof. Sadiya Fuggawala" },
    { id: 36, name: "Prof. Sagar Patil" },
    { id: 37, name: "Prof. Sarita Eklahare" },
    { id: 38, name: "Prof. Savita Bodke" },
    { id: 39, name: "Prof. Shambavi Kamat" },
    { id: 40, name: "Prof. Sonia Gupta" },
    { id: 41, name: "Prof. Subhojit Chakraborty" },
    { id: 42, name: "Prof. Suparna Majumdar" },
    { id: 43, name: "Prof. Swati Gaikwad" },
    { id: 44, name: "Prof. Venkateshwarloo" },
    { id: 45, name: "Prof, Vidyanand Joshi" },
    { id: 46, name: "Prof. Vikaram Hande" },
    { id: 47, name: "Prof. Vilas Choudhari" },
    { id: 48, name: "Prof. Vishal Madrecha" },
    { id: 49, name: "Prof. E.V. Gireesh" },
    { id: 50, name: "Prof. Prashant Kulkarni" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h2 id="Support-Capital" className="dmtims-title">
            Industry Experts Visiting Faculty Team
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {faculty.map(({ id, name }) => (
              <p key={id} className="dmtims-text font-normal text-white">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertsVisitingFaculty;
