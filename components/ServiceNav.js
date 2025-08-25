import Link from 'next/link'; // Use 'react-router-dom' if not using Next.js

const navItems = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  { label: "Web 3.0 (Blockchain)", href: "/services/web3-blockchain" },
  { label: "UX/UI Design", href: "/services/ux-ui-design" },
  { label: "DevOps", href: "/services/devops" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Quality Assurance", href: "/services/quality-assurance" },
  { label: "Business Development", href: "/services/business-development" },
  { label: "Support and Maintenance", href: "/services/support-maintenance" },
];

const ServiceNav = () => (
  <nav className="w-full flex flex-wrap justify-center gap-x-8 gap-y-4 py-8 mt-20">
    {navItems.map(item => (
      <Link key={item.label} href={item.href} passHref>
        <span className="cursor-pointer text-[#000000] font-medium hover:text-[#F06A6A] transition-colors mt-4">
          {item.label}
        </span>
      </Link>
    ))}
  </nav>
);

export default ServiceNav;