const SupportCapital = () => {
  const support = [
    { id: 0, name: "Ms. Annie Mathew" },
    { id: 1, name: "Mr. Atul Ramteke" },
    { id: 2, name: "Ms. Jancy Joseph" },
    { id: 3, name: "Ms. Kanchan Gawari" },
    { id: 4, name: "Mr. Jayaraj V. S." },
    { id: 5, name: "Ms. Threza Joseph" },
    { id: 6, name: "Ms. Shailaja Desai" },
    { id: 7, name: "Mr. Shantaram Paradkar" },
    { id: 8, name: "Ms. Archana Shringarpure" },
    { id: 9, name: "Mr. Vikas Narayan Gore" },
    { id: 10, name: "Ms. Jayshree Sriramulu" },
    { id: 11, name: "Mr. Suraj Somade" },
    { id: 12, name: "Fr. Bijo P" },
    { id: 13, name: "Mr. Sunil Vaydande" },
    { id: 14, name: "Mr. Rajesh Kamble" },
    { id: 15, name: "Mr. Chandu Rathod" },
    { id: 16, name: "Ms. Lija Sunil" },
    { id: 17, name: "Mr. Dinesh Singh" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h2 id="Support-Capital" className="dmtims-title">
            Support Capital
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-2 text-center md:grid-cols-3">
            {support.map(({ id, name }) => (
              <p key={id} className="dmtims-text font-normal text-white">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCapital;
