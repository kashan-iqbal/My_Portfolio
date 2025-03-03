"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      role: "MERN stack developer",
      company: "Greens Fintech ",
      location: "Karachi",
      period: "Oct 2023 - Present",
      responsibilities: [
        "Design, develop, and maintain scalable web applications using the MERN stack.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Write clean, maintainable, and efficient code.",
        "Troubleshoot and debug applications to ensure optimal performance.",
        "Stay updated with emerging technologies and best practices in web development.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Darul Solutions",
      location: "Karachi",
      period: "Dec 2022 - Oct 2023",
      responsibilities: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      role: "Freelance Frontend Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jan 2021 - Nov 2022",
      responsibilities: [
        "Developed custom websites and web applications for clients using React.js, HTML, CSS, and JavaScript.",
        "Collaborated directly with clients to gather requirements, define project scope, and deliver tailored solutions.",
        "Implemented responsive design and optimized websites for performance across all devices and browsers.",
        "Provided ongoing maintenance and updates for web applications, ensuring client satisfaction and technical support.",
        "Utilized version control (Git) to manage and track changes in the development process.",
        "Worked independently and delivered projects within deadlines while maintaining high coding standards.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}

// {
//   company: "Salaba Fasteners",
//   location: "Saudi Arabia (Hybrid)",
//   period: "2024 - Present",
//   role: "MERN Stack Developer",
//   responsibilities: [
//     "Developed full-fledged ERP system using MERN stack",
//     "Designed and implemented RESTful APIs",
//     "Created responsive interfaces with React.js and Redux",
//     "Implemented secure authentication systems",
//     "Utilized WebSockets for real-time features",
//   ],
// },
// {
//   company: "TechVention",
//   location: "Lahore, Pakistan",
//   period: "2022 - 2024",
//   role: "Software Engineer",
//   responsibilities: [
//     "Migrated codebase to Fastify with TypeScript",
//     "Implemented OOP concepts for scalability",
//     "Built backend REST API and OAuth",
//     "Integrated third-party APIs",
//     "Implemented i18n features",
//   ],
// },
