const services = [
  {
    title: "Web Development",
    description:
      "Our expertise lies in crafting exceptional websites that are not only user-friendly but also easily manageable, fully functional, secure, and capable of scaling to set you apart from your competitors.",
    items: [
      "Frontend development",
      "Backend development",
      "Full stack development",
      "Web app maintenance and updates",
      "Web app testing",
    ],
    icon: "🌐",
  },
  {
    title: "Mobile App development",
    description:
      "Experience the convenience of tailor-made iOS and Android app development solutions, with encompassing both native and cross-platform options. These offerings are enhanced by rigorous QA testing and comprehensive support services.",
    items: [
      "Android app development",
      "iOS app development",
      "Native mobile app development",
      "Hybrid mobile app development",
      "Wearable device app development",
      "Mobile app maintenance and updates",
    ],
    icon: "📱",
  },
  {
    title: "Artificial Intelligence",
    description:
      "The future is here, and it’s intelligent. Our Artificial Intelligence solutions are designed to elevate your business to new heights. Harness the power of data-driven insights, predictive analytics, and automation to make informed decisions in real-time.",
    items: [
      "AI chatbots",
      "Listening tools",
      "Programmatic ad buying",
      "Big data synthesizers",
      "Algorithms to modernize audience building",
    ],
    icon: "🤖",
  },
  {
    title: "DevOps",
    description:
      "Accelerate your development lifecycle and improve collaboration between development and operations teams. Our DevOps services ensure faster delivery, reliable releases, and scalable infrastructure.",
    items: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Automation scripting",
      "Containerization (Docker, Kubernetes)",
    ],
    icon: "⚙️",
  },
  {
    title: "Cloud Solutions",
    description:
      "Unlock the power of the cloud with scalable, secure, and cost-effective solutions. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
    items: [
      "Cloud migration",
      "Cloud architecture design",
      "Managed cloud services",
      "Cloud security",
      "Hybrid & multi-cloud solutions",
    ],
    icon: "☁️",
  },
  {
    title: "UI/UX Design",
    description:
      "Deliver delightful user experiences with our UI/UX design services. We create intuitive interfaces and engaging journeys that drive user satisfaction and business growth.",
    items: [
      "User research",
      "Wireframing & prototyping",
      "Visual design",
      "Usability testing",
      "Interaction design",
    ],
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach your target audience with our digital marketing solutions. From SEO to social media, we help you grow your brand and drive results.",
    items: [
      "SEO optimization",
      "Social media marketing",
      "Content creation",
      "Email campaigns",
      "Paid advertising (PPC)",
    ],
    icon: "📢",
  },
];

const ServiceDetails = () => (
  <section className="w-full bg-white py-12">
    {services.map((service, idx) => (
      <div
        key={service.title}
        className="w-full py-10 px-4 md:px-0"
        style={{ background: idx % 2 === 0 ? "#F06A6A0D" : "#fff" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Icon and Title */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#F06A6A] mb-2">{service.title}</h3>
            <p className="text-[#000000] text-base">{service.description}</p>
          </div>
          {/* Service Items */}
          <div className="flex flex-wrap gap-4 w-full md:w-2/3 justify-start items-start">
            {service.items.map((item, i) => (
              <div
                key={item}
                className="border-2 border-[#F06A6A] rounded-lg px-4 py-2 text-[#000000] bg-white font-medium text-sm hover:bg-[#F06A6A] hover:text-white transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default ServiceDetails;