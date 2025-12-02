import { FaLinkedin } from "react-icons/fa";
import { urbanist } from "./ui/font";
import Image from "next/image";

const teamMembers = [
  {
    name: "Muhammad Qaisar",
    role: "Software Engineer",
    image: "/Qaisar.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-qaisar863/",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at Mozo Technologies.",
  },
  {
    name: "Danial Gohar",
    role: "CEO - Founder",
    image: "/danial-gohar.jpg",
    linkedin: "https://www.linkedin.com/in/itsdanialgohar/",
    bio: "With over 7 years of experience in the tech industry, I have helped startups and established businesses successfully launch products, conduct in-depth market research, and scale their operations effectively. My work focuses on optimizing business processes and workflows to drive efficiency and sustainable growth. As a founder and CEO, I’m passionate about turning ideas into impactful solutions that create measurable value.",
  },
  {
    name: "Faheem Ahmed",
    role: "Mobile App Developer",
    image: "/faheem_jan.jpg",
    linkedin: "https://www.linkedin.com/in/fisforfaheem/",
    bio: "To briefly describe myself I would say that I am a workaholic. I am energetic and collaborate well with others.I have a passion for perfection and I seek it in every aspect of my life let it be work or anything else. I am good with authority and have no problems complying with rules and regulations",
  },
];

const MeetTheTeam = () => (
  <section className="bg-white py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-gray-900 ${urbanist.className}`}
        >
          Our Core Team
        </h2>
        <p
          className={`mt-4 text-lg text-gray-600 max-w-2xl mx-auto ${urbanist.className}`}
        >
          The driving force behind our innovation and success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col"
          >
            <div className="relative w-full h-72">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3
                className={`text-2xl font-bold text-gray-900 mb-1 ${urbanist.className}`}
              >
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold text-md mb-4">
                {member.role}
              </p>
              <p
                className={`text-base text-gray-700 leading-relaxed flex-1 ${urbanist.className}`}
              >
                {member.bio}
              </p>
              <div className="mt-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1f2937] text-white px-5 py-3 rounded-lg text-base font-semibold transition-colors duration-300"
                >
                  <FaLinkedin className="mr-2 text-xl" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MeetTheTeam;
