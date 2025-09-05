import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Muhammad Qaisar",
    role: "Co-Founder",
    image: "/Qaisar.jpg", // Use your dummy image path
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at Teamo.",
  },
  {
    name: "Danial Gohar",
    role: "Co-Founder",
    image: "/danial-gohar.jpg",
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at Teamo.",
  },
  {
    name: "Faheem Ahmed",
    role: "Co-Founder",
    image: "/faheem_jan.jpg",
    linkedin: "#",
    bio: "I have worked in a range of capacities across dynamic roles helping tech start ups visualize and attain their goals. My background has revolved around devOps, fullstack software development and project management. Currently, I am leading software design and development of niche software applications as a co-founder at Teamo.",
  },
];

const MeetTheTeam = () => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-xl font-semibold text-[#1f2937] mb-2">Our Core Team</h2>
    <hr className="mb-8 border-gray-200" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-[#1f2937] rounded-[2rem] overflow-hidden shadow-lg"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <div className="flex items-center mb-2">
              <FaLinkedin className="text-[#1A73E8] mr-2" />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-white text-sm mt-2">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MeetTheTeam;