'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Nov 2025 – Present",
    role: "Backend Engineer",
    company: "Visio-Dei",
    location: "Remote",
    type: "Contract",
    description: "Architected the end-to-end system topology for a Stock Trading online KYC system, defining scalable backend modules, microservices boundaries, and secure REST API contracts. Implemented backend services in .NET, engineered CI/CD pipelines with Jenkins and GitHub Actions, and defined AWS cloud architecture.",
    tags: [".NET", "REST API", "Jenkins", "GitHub Actions", "AWS", "Microservices"]
  },
  {
    period: "Jan 2024 – Present",
    role: "Freelance Authorized AWS Instructor (AAI)",
    company: "Discoverer International",
    location: "Orpington, London (Remote)",
    type: "Part Time",
    description: "Deliver Amazon-authorised courses on behalf of AWS. Conduct in-person, virtual classroom and self-paced workshops with live labs and demos. Stay current with AWS newest features and integrate real-world use cases into training content.",
    tags: ["AWS Training", "Cloud", "DevOps", "Virtual Labs", "Curriculum Design"]
  },
  {
    period: "Aug 2024 – Aug 2025",
    role: "Consultant – Community Led Monitoring System",
    company: "Chiweto / Action Aid Malawi",
    location: "Lilongwe, Malawi",
    type: "Contract",
    description: "Architected full system topology for community data collection, developing RESTful APIs, enforcing input validation and authentication, and engineering CI/CD pipelines. Provisioned AWS infrastructure with cost/performance analysis, implemented VPC, IAM, SSL/TLS, container isolation, and Docker orchestration.",
    tags: ["Docker", "AWS", "CI/CD", "REST API", "Security", "PostgreSQL"]
  },
  {
    period: "Nov 2024 – Apr 2025",
    role: "Consultant – National Nutrition Information System",
    company: "Imagivation Tech / Nutrition International",
    location: "Lilongwe, Malawi",
    type: "Contract",
    description: "Conducted comprehensive system reviews of the NNIS architecture using WHO-UNICEF guidance. Led system design evaluations, facilitated stakeholder workshops with Ministry of Health personnel, and developed actionable recommendations for operational efficiency.",
    tags: ["System Design", "Health IT", "Stakeholder Management", "HMIS"]
  },
  {
    period: "May 2024 – Jul 2025",
    role: "Consultant – Digital Library System",
    company: "OBI / Imagivation Tech / Ministry of Education",
    location: "Lilongwe, Malawi",
    type: "Contract",
    description: "Designed and delivered targeted training on Linux, Docker/Docker-Compose, Islandora, and Drupal for Ministry of Education staff. Configured end-to-end digital library systems on-premises and in cloud environments with Fedora/Islandora/Drupal stacks.",
    tags: ["Linux", "Docker", "Drupal", "Islandora", "AWS", "Training"]
  },
  {
    period: "May 2022 – Aug 2025",
    role: "AWS Trainer",
    company: "GIBT – Ghana Institute of Business & Technology",
    location: "Accra, Ghana (Remote)",
    type: "Part Time",
    description: "Designed and delivered comprehensive cloud and DevOps training including AWS fundamentals (EC2, S3, IAM, VPC), Linux administration, Python scripting, Infrastructure-as-Code (Terraform), Docker containerization, and Git/GitHub workflows. Prepared students for AWS and DevOps certifications.",
    tags: ["AWS", "DevOps", "Terraform", "Docker", "Python", "Linux"]
  },
  {
    period: "Oct 2020 – Present",
    role: "System Administrator / Web Developer",
    company: "EIH Chiweto",
    location: "Lilongwe, Malawi",
    type: "Full Time",
    description: "Design, deploy and maintain systems across physical, virtual, cloud, and mobile environments. Manage AWS resources (EC2, S3, databases, VPCs, DNS), implement security policies (VPNs, SELinux, TLS), and automate with Bash/Python/Terraform. Develop and maintain web applications and ODK/Kobo survey platforms.",
    tags: ["Linux", "AWS", "Terraform", "Web Dev", "Security", "Bash", "Python"]
  },
  {
    period: "Dec 2021 – May 2022",
    role: "Backend Engineer – Innovate 265",
    company: "UNDP",
    location: "Lilongwe, Malawi",
    type: "Contract",
    description: "Designed mobile-first backend architecture with robust databases, business logic, and secure RESTful APIs. Implemented enterprise-grade security protocols including HTTPS/TLS, input validation, JWT authentication, and encrypted data storage. Deployed scalable hosting solutions on AWS.",
    tags: ["REST API", "AWS", "Mobile Backend", "JWT", "Security", "MySQL"]
  },
  {
    period: "Dec 2020 – Jan 2022",
    role: "ICT Consultant",
    company: "Sajdi Consulting Engineering Centre",
    location: "Lilongwe, Malawi",
    type: "Contract",
    description: "Responded swiftly to ad-hoc service requests for troubleshooting, maintenance, configuration, and management of hardware, software, and network infrastructure. Performed urgent patch management and provided first and second-line support.",
    tags: ["IT Support", "Networking", "Hardware", "Patch Management"]
  },
  {
    period: "Dec 2020 – Mar 2021",
    role: "SMS Platform Web Application",
    company: "EIH Chiweto",
    location: "Lilongwe, Malawi",
    type: "Project",
    description: "Development of a dashboard for sending and receiving SMS-based communications. Architected API endpoints for integration with a mobile application and provisioned, managed, and maintained the hosting infrastructure.",
    tags: ["Web Dev", "API", "SMS", "Laravel", "Kannel"]
  },
  {
    period: "Jan 2018 – Feb 2019",
    role: "Coding Tutor",
    company: "Huawei Kids Coding Club",
    location: "Blantyre, Malawi",
    type: "Part Time",
    description: "Tutored students in coding fundamentals, planned lessons tailored to individual learning styles, and developed engaging learning materials. Collaborated with parents to track progress and strengthen weak areas.",
    tags: ["Teaching", "Coding", "Mentorship", "Curriculum Design"]
  },
];

const projects = [
  {
    name: "UNDP Innovate 265",
    description: "Android app for gathering, storing, and overseeing grassroots-level innovation data. Built backend APIs, databases, and AWS infrastructure, plus a web interface dashboard.",
    image: "/images/innovate.png",
    link: "https://chiweto.ch/undp",
    year: "2022"
  },
  {
    name: "Chiweto SMS Platform 2.0",
    description: "SMS-based system for bulk messaging and Q&A interactions via a web interface. Architected API endpoints for mobile integration and managed all hosting infrastructure.",
    image: "/images/sms_platform.png",
    link: "https://chiweto.ch/",
    year: "2021"
  },
  {
    name: "Community Led Monitoring System",
    description: "Full-stack community data collection platform for Action Aid Malawi with microservices architecture, Docker, CI/CD pipelines, and AWS infrastructure.",
    image: "/images/innovate.png",
    link: "#",
    year: "2025"
  },
  {
    name: "This Portfolio",
    description: "Anime-themed developer portfolio built with Next.js and Tailwind CSS, featuring dark mode, glassmorphic UI, and interactive design elements.",
    image: "/images/portfolio.png",
    link: "#this",
    year: "2023"
  },
];

const typeColors = {
  "Full Time": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Part Time": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Contract": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Project": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const getYear = period => {
  const m = period.match(/\d{4}/);
  return m ? m[0] : '';
};

const sortedExperiences = [...experiences].sort(
  (a, b) => parseInt(getYear(b.period)) - parseInt(getYear(a.period))
);

const Work = () => {
  return (
    <>
      {/* Experience Timeline */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <span className="font-extrabold text-2xl font-[Dosis] block mb-1">
          Experience <span className="text-red-700">Timeline</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-8 w-10" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-sakura"></div>

          {sortedExperiences.map((exp, idx) => {
            const year     = getYear(exp.period);
            const prevYear = idx > 0 ? getYear(sortedExperiences[idx - 1].period) : null;
            const showYear = year !== prevYear;

            return (
              <div key={idx}>
                {/* Year marker */}
                {showYear && (
                  <motion.div
                    className="relative pl-10 md:pl-16 mb-3 mt-1 flex items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                  >
                    <div className="absolute left-0 md:left-1.5 top-1/2 -translate-y-1/2
                                    w-6 h-6 bg-red-700 rounded-full z-10 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="bg-red-700 text-white text-xs font-[Dosis] font-extrabold
                                     px-4 py-1.5 rounded-full shadow-md tracking-wide">
                      {year}
                    </span>
                  </motion.div>
                )}

                {/* Timeline entry */}
                <motion.div
                  className="relative pl-10 md:pl-16 mb-5 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: showYear ? 0.1 : 0 }}
                >
                  <div className="absolute left-0 md:left-2 top-3 w-5 h-5 bg-sakura-light border-2 border-sakura rounded-full
                                  group-hover:bg-red-700 group-hover:border-red-700 transition-all duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-700 group-hover:bg-white rounded-full transition-colors duration-300" />
                  </div>

                  <motion.div
                    className="border border-sakura-light dark:border-gray-700 rounded-xl p-4 glassmorphic-container
                                group-hover:border-red-700 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white font-[Dosis] leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-red-700 font-[Dosis]">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className="text-xs font-bold text-red-700 font-[Dosis] whitespace-nowrap">{exp.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-[Dosis] font-semibold ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">{exp.location}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {exp.tags.map((tag, tidx) => (
                        <span key={tidx}
                          className="text-xs bg-sakura dark:bg-sakura text-gray-800 px-2 py-0.5 rounded-full font-[Dosis]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects Section */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <span className="font-extrabold text-2xl font-[Dosis] block mb-1">
          Reference <span className="text-red-700">Projects</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-6 w-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <article
              key={idx}
              id={project.link === "#this" ? "this" : undefined}
              className="glassmorphic-container overflow-hidden group hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  className="w-full h-44 object-cover transition duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white font-[Dosis] text-base md:text-lg">
                    {project.name}
                  </h3>
                  <span className="text-xs text-red-700 font-[Dosis] font-bold bg-sakura-light px-2 py-0.5 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-3">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target={project.link !== "#" && project.link !== "#this" ? "_blank" : undefined}
                  className="inline-block bg-sakura-light hover:bg-sakura text-gray-900 text-xs font-bold uppercase
                             px-4 py-2 rounded-lg transition-all duration-300 font-[Dosis]"
                >
                  View Project
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Projects List */}
        <div className="mt-6">
          <span className="font-semibold text-lg font-[Dosis] block mb-3 text-gray-700 dark:text-gray-300">
            More Projects
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { name: "Palgnet Website", desc: "Pan African Learning and Growth Network web platform" },
              { name: "Business Growth Community (BGC)", desc: "Community website for business growth initiatives" },
              { name: "ISPA Website", desc: "Institute of Security Professionals Africa website" },
              { name: "LGR Website", desc: "Learning and Growth Resources web platform" },
              { name: "IEA Website", desc: "Institute of Executive Assistants web presence" },
              { name: "Chiweto SMS Box (Kannel)", desc: "SMS gateway integration with Kannel SMSC platform" },
            ].map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 border border-sakura-light rounded-lg hover:border-red-700 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-[Dosis] block">{p.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
