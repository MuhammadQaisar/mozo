import { useRouter } from 'next/router';
import { services } from '../../components/services';
import { slugify } from '../../components/utils';
import ServiceHero from '../../components/ServiceHero';

const ServicePage = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ServiceHero />
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">{service.title}</h1>
        <p className="mt-4 text-lg text-gray-500">{service.description}</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">What's Included:</h2>
          <ul className="mt-4 space-y-4">
            {service.items.map((item) => (
              <li key={item} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { slug: slugify(service.title) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((service) => slugify(service.title) === params.slug);

  return {
    props: {
      service,
    },
  };
}

export default ServicePage;
