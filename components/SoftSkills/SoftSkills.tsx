const SoftSkills = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl">
          <h3 id="Soft-Skills" className="dmtims-subtitle py-2 lg:py-6">
            Soft Skills
          </h3>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Foreign Language
              </p>
              <p className="dmtims-text font-normal text-white">
                Negotiation Skills
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Art of Introduction
              </p>
              <p className="dmtims-text font-normal text-white">
                Corporate Etiquette
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Stress Management
              </p>
              <p className="dmtims-text font-normal text-white">
                Personality Development
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Critical Thinking Skills
              </p>
              <p className="dmtims-text font-normal text-white">
                Emotional Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
