import Head from "next/head";
import React from "react";
import ComplimentaryCertificationsBanner from "../components/ComplimentaryCertificationsBanner/ComplimentaryCertificationsBanner";
import AdditionalSkillCertifications from "../components/AdditionalSkillCertifications/AdditionalSkillCertifications";

function ComplimentaryCertifications() {
  return (
    <div className="cursor-default">
      <Head>
        <title>{`Complimentary Certifications`}</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Complimentary Certifications" />
        <meta
          name="description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/complimentary-certifications"
        />
        <meta property="og:title" content="Complimentary Certifications" />
        <meta
          property="og:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115602803398803487/image_92.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/complimentary-certifications"
        />
        <meta property="twitter:title" content="Complimentary Certifications" />
        <meta
          property="twitter:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115602803398803487/image_92.webp"
        />
      </Head>

      <ComplimentaryCertificationsBanner />

      <AdditionalSkillCertifications />
    </div>
  );
}

export default ComplimentaryCertifications;
