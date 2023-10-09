import React, { ReactNode } from "react";
import BannerSection from "./Atoms/BannerSection";
import IntegrationSection from "./Atoms/IntegrationSection";
import CustomerSection from "./Atoms/CustomerSection";
import FeatureSection from "./Atoms/FeaturesSection";
import MailSection from "./Atoms/MailSection";


interface LandingpageProps {
  children: ReactNode;
}

const Landingpage: React.FC<LandingpageProps> = () => {
  return (
    <div>
      <BannerSection />
      <FeatureSection />
      <IntegrationSection /> 
      <CustomerSection />
      <MailSection/>
    </div>
  );
};

export default Landingpage;
