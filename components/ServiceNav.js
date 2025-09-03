import Link from 'next/link';
import { services } from './services';
import { slugify } from './utils';

const navItems = services.map(service => ({
  label: service.title,
  href: `#${slugify(service.title)}`
}));

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