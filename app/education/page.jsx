import React from 'react';

const education = [
  {
    year: "2026",
    title: "KCNA: Kubernetes and Cloud Native Associate",
    institution: "The Linux Foundation",
    detail: "Cloud-native technologies and Kubernetes ecosystem",
  },
  {
    year: "2026",
    title: "AWS Certified Machine Learning Engineer – Associate",
    institution: "Amazon Web Services",
    detail: "Machine learning engineering on AWS",
  },
  {
    year: "2025",
    title: "AWS Certified AI Practitioner",
    institution: "Amazon Web Services",
    detail: "AI/ML concepts and AWS AI services",
  },
  {
    year: "2025",
    title: "AWS Certified Developer – Associate",
    institution: "Amazon Web Services",
    detail: "Developing and maintaining applications on AWS",
  },
  {
    year: "2025",
    title: "AWS Certified Solutions Architect – Professional",
    institution: "Amazon Web Services",
    detail: "Advanced system design and enterprise architecture on AWS",
  },
  {
    year: "2025",
    title: "Kubernetes and Cloud Native Essentials (LFS250)",
    institution: "The Linux Foundation",
    detail: "Container orchestration and cloud-native fundamentals",
  },
  {
    year: "2024",
    title: "AWS Certified Machine Learning – Specialty",
    institution: "Amazon Web Services",
    detail: "Designing and implementing ML solutions on AWS",
  },
  {
    year: "2023",
    title: "Champion – AWS Authorized Instructor",
    institution: "Amazon Web Services",
    detail: "Recognized as a top-performing AWS training partner instructor",
  },
  {
    year: "2023",
    title: "AWS Certified SysOps Administrator – Associate",
    institution: "Amazon Web Services",
    detail: "Deploy, manage, and operate scalable AWS systems",
  },
  {
    year: "2023",
    title: "Front End Development Libraries",
    institution: "freeCodeCamp",
    detail: "React, Redux, Bootstrap, jQuery and D3.js",
  },
  {
    year: "2022",
    title: "ALX-T Cloud Developer Nanodegree",
    institution: "Udacity",
    detail: "Full cloud developer program: microservices, Kubernetes, CI/CD on AWS",
  },
  {
    year: "2022",
    title: "AWS Certified Solutions Architect – Associate",
    institution: "Amazon Web Services",
    detail: "Cloud solution design and AWS best practices",
  },
  {
    year: "2022",
    title: "AWS re/Start Graduate",
    institution: "Amazon Web Services",
    detail: "Cloud computing fundamentals and career preparation program",
  },
  {
    year: "2022",
    title: "SQL Basic",
    institution: "HackerRank",
    detail: "SQL querying and relational database fundamentals",
  },
  {
    year: "2021",
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    detail: "Foundational AWS cloud concepts, services, and billing",
  },
  {
    year: "2020",
    title: "BSc. Information Technology (Second Upper Class)",
    institution: "University of Malawi – The Polytechnic",
    detail: "4-year undergraduate degree in Information Technology, graduated with honours",
    highlight: true,
  },
];

const institutionColor = (institution) => {
  if (institution.includes("Amazon")) return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
  if (institution.includes("Linux")) return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200";
  if (institution.includes("Udacity")) return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  if (institution.includes("freeCodeCamp")) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  if (institution.includes("HackerRank")) return "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200";
  return "bg-sakura text-gray-800";
};

const Education = () => {
  const years = [...new Set(education.map(e => e.year))];

  return (
    <>
      {/* Header */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-5 font-['Roboto']">
        <span className="font-extrabold text-xl md:text-5xl leading-snug font-[Dosis] block mb-3">
          Education & <span className="text-red-700">Learning</span>
        </span>
        <p className="font-[Dosis] leading-relaxed text-gray-700 dark:text-gray-300">
          A continuous learner with a BSc in Information Technology and 17+ industry certifications
          spanning AWS, Kubernetes, cloud development, and web technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <span className="font-extrabold text-2xl font-[Dosis] block mb-1">
          Academic & Certification <span className="text-red-700">Timeline</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-8 w-10" />

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-sakura"></div>

          {years.map((year) => {
            const items = education.filter(e => e.year === year);
            return (
              <div key={year} className="relative mb-2">
                {/* Year marker */}
                <div className="relative pl-10 md:pl-16 mb-3">
                  <div className="absolute left-0 md:left-2 top-1 w-6 h-6 bg-red-700 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-extrabold font-[Dosis] text-red-700">{year}</span>
                </div>

                {/* Items for this year */}
                <div className="pl-10 md:pl-16 space-y-3 mb-6">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`glassmorphic-container p-4 rounded-xl border transition-all duration-300 hover:border-red-700 group
                        ${item.highlight ? "border-red-700 shadow-lg" : "border-sakura-light"}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-sm md:text-base font-bold font-[Dosis] leading-snug
                            ${item.highlight ? "text-red-700" : "text-gray-900 dark:text-white"}`}>
                            {item.highlight && <span className="mr-1">🎓</span>}
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-[Dosis]">{item.detail}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-[Dosis] font-semibold flex-shrink-0 ${institutionColor(item.institution)}`}>
                          {item.institution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <span className="font-extrabold text-2xl font-[Dosis] block mb-1">
          Core <span className="text-red-700">Skills</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-6 w-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { category: "Cloud & Infrastructure", skills: ["AWS (EC2, S3, VPC, IAM, CloudWatch)", "Terraform / CloudFormation", "Docker & Docker Compose", "Kubernetes (KCNA)", "Linux System Administration"] },
            { category: "Development", skills: ["JavaScript, PHP, Laravel, Next.js", "Python, Bash scripting", "REST API design", ".NET Backend", "WordPress"] },
            { category: "DevOps & Automation", skills: ["Jenkins, GitHub Actions", "Git & GitHub", "CI/CD Pipelines", "Systems Manager", "Virtualization (VMware, Hyper-V, KVM)"] },
            { category: "Databases", skills: ["MySQL, PostgreSQL, SQLite", "Database schema design", "Performance tuning", "AWS RDS"] },
          ].map((group, idx) => (
            <div key={idx} className="glassmorphic-container p-4 rounded-xl border border-sakura-light hover:border-red-700 transition-colors duration-300">
              <h3 className="font-bold font-[Dosis] text-base mb-3 text-gray-900 dark:text-white">{group.category}</h3>
              <ul className="space-y-1">
                {group.skills.map((skill, sidx) => (
                  <li key={sidx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 font-[Dosis]">
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
