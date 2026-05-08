import AboutSection from '../components/molecules/AboutSection';
import CapabilitiesSection from '../components/molecules/CapabilitiesSection';
import TrustedBySection from '../components/molecules/TrustedBySection';
import Carousel from '../components/organisms/Carousel';
import { usePageTitle } from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle(
    undefined,
    'Industrial electronics design, development, and maintenance since 1991.',
  );
  return (
    <>
      <Carousel />
      <CapabilitiesSection />
      <AboutSection />
      <TrustedBySection />
    </>
  );
};

export default Home;
