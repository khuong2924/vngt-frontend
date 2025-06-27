import React from "react";
import { ImageGallerySection } from "./section/ImageGallerySection";
import { MainContentSection } from "./section/MainContentSection/MainContentSection";
import { TourDetailsSection } from "./section/TourDetailSection/TourDetailSection";

const ChiTietTour = () => {
  return (
    <div className="flex flex-col gap-16">
      <ImageGallerySection />
      <MainContentSection />
      <TourDetailsSection />
    </div>
  );
};

export default ChiTietTour;
