import Link from 'next/link';
import ServiceNav from "./ServiceNav";
import { services } from "./services";
import { slugify } from "./utils";

const ServiceDetails = () => {

  return (
    <section className="w-full bg-white pt-0 pb-12">
      <ServiceNav />
      {services.map((service, idx) => (
        <Link href={`/services/${slugify(service.title)}`} key={service.title} legacyBehavior>
          <a className="block w-full py-10 px-4 md:px-0" style={{ background: idx % 2 === 0 ? "#F06A6A0D" : "#fff" }}>
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
          </a>
        </Link>
    ))}
  </section>
  )
};

export default ServiceDetails;