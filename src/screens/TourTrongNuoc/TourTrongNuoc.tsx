import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "./sections/NavigationSection";

export const TourTrongNuoc = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col w-full" data-model-id="1:10613">
      <HeaderSection />
      <NavigationSection />
      <HeroSection />
      <ContentSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
