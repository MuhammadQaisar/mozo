import { FaLinkedin } from "react-icons/fa";
import { poppins } from "./ui/font";

const teamMembers = [
  {
    name: "Muhammad Qaisar",
    role: "Co-Founder",
    image: "/Qaisar.jpg", // Use your dummy image path
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at Mozo Technologies.",
  },
  {
    name: "Danial Gohar",
    role: "Co-Founder",
    image: "/danial-gohar.jpg",
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at  Mozo Technologies.",
  },
  {
    name: "Faheem Ahmed",
    role: "Co-Founder",
    image: "/faheem_jan.jpg",
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at  Mozo Technologies.",
  },
];

const MeetTheTeam = () => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <div className="text-center">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-2 ${poppins.className}`}>Our Core Team</h2>
        <hr className="mb-12 border-gray-200 w-24 mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-[#1f2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-sm text-gray-300 mt-2 flex-1">{member.bio}</p>
            <div className="mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1f2937] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F06A6A] transition-colors"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MeetTheTeam;