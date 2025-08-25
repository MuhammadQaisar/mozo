import Layout from '../components/Layout';
import ServiceSection from '../components/ui/ServiceSection';
import CTA from '../components/ui/CTA'; // Assuming this path is correct
import ServiceNav from '../components/ServiceNav';
import ServiceIntro from '../components/ServiceIntro';
import ServiceDetails from '../components/ServiceDetails';
import ServiceCTA from '../components/ServiceCTA';

const ServicesPage = () => {
  return (
    <>
      <ServiceNav />
      <ServiceIntro />
      <ServiceDetails />
      <CTA/>
    </>
  );
};

export default ServicesPage;
