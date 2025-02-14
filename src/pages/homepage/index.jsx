import Layout from "../../components/layout";
import AboutSection from "../../components/view/HomePage/AboutSection";
import AwwardsSection from "../../components/view/HomePage/AwwardSection/AwwardsSection";
import BrandSection from "../../components/view/HomePage/BrandSection/BrandSection";
import HeroSection from "../../components/view/HomePage/HeroSection/HeroSection";
import InsightSection from "../../components/view/HomePage/InsightSection/InsightSection";
import TestimonialSection from "../../components/view/HomePage/TestimonialSection";
import WorkSection from "../../components/view/HomePage/WorkSection/WorkSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BrandSection />
      <TestimonialSection />
      <AwwardsSection />
      <InsightSection />
    </Layout>
  );
};

export default HomePage;
