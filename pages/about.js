import AboutHero from '../components/AboutHero';
import TailoredSolution from '../components/TailoredSolution';
import MeetTheTeam from '../components/MeetTheTeam';
import Faqs from '../components/Faqs';

import AboutUsStatements from '../components/AboutUsStatements';

import TechnologyStrip from '../components/TechnologyStrip';

const AboutPage = () => (
  <>
    <AboutHero />
    <AboutUsStatements />
    <TechnologyStrip />
    {/* <TailoredSolution /> */}
    <MeetTheTeam />
    <Faqs />
  </>
);

export default AboutPage;
