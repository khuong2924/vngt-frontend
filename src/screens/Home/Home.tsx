import React from "react";
import { Button } from "../../components/ui/button";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/HeaderTourList";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/SearchFrame";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/TourHotSection";
// import { HeaderTourList } from "./sections/HeaderTourList";

export const Home = (): JSX.Element => {
  // Data for partner logos
  const partnerLogos = [
    { id: 1, alt: "Screenshot", width: "137px", height: "60px" },
    { id: 2, alt: "Image", width: "127.5px", height: "60px" },
    { id: 3, alt: "Image", width: "136px", height: "60px" },
    { id: 4, alt: "Screenshot", width: "136px", height: "60px" },
    {
      id: 5,
      alt: "Partner logo",
      width: "228px",
      height: "60px",
      src: "https://c.animaapp.com/mc2sb7uh9XDRE6/img/partner-logo-1.svg",
    },
    {
      id: 6,
      alt: "Partner logo",
      width: "136px",
      height: "60px",
      isObjectCover: true,
    },
    { id: 7, alt: "Partner logo", width: "136px", height: "60px" },
    { id: 8, alt: "Partner logo", width: "136px", height: "60px" },
    {
      id: 9,
      alt: "Partner logo",
      width: "166px",
      height: "60px",
      src: "https://c.animaapp.com/mc2sb7uh9XDRE6/img/partner-logo--1--1.svg",
    },
    { id: 10, alt: "Logo", width: "137px", height: "60px" },
    { id: 11, alt: "Partner logo", width: "100%", height: "80px" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header section - Full width */}
      <HeaderSubsection />

      {/* Main content container with fixed width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="w-full relative mb-16">
          <div className="w-full h-[600px] relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
            
            <Button className="absolute top-[270px] left-1/2 transform -translate-x-1/2 bg-main text-white border-[10px] border-solid border-[#00dba11a] rounded-[42px] font-semibold [font-family:'Manrope',Helvetica] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Khám phá ngay hôm nay!
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-[280px] left-[148px] bg-white/90 backdrop-blur-sm -rotate-180 rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <img
                className="w-5 h-5 rotate-180"
                alt="Tabler icon arrow"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-[280px] right-[148px] bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <img
                className="w-5 h-5"
                alt="Tabler icon arrow"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right-2.svg"
              />
            </Button>
          </div>

          <div className="mt-8">
            <FrameWrapperSubsection />
          </div>
        </div>

        {/* Main content sections with consistent spacing */}
        <div className="space-y-20">
          <Frame3Subsection/>
          <DivWrapperSubsection />
          <DivSubsection />
          <SectionComponentNodeSubsection />
          <Frame1Subsection />
          <Frame2Subsection />
          <FrameSubsection />
        </div>

        {/* Carousel section */}
        <div className="flex items-center gap-6 w-full justify-center my-20">
          <img className="w-[124px] h-[463px] rounded-2xl shadow-lg" alt="Summer" />

          <div className="relative w-full max-w-[1216px] h-[463px] bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5"></div>
            
            <div className="flex w-[169px] items-center justify-between absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button
                variant="outline"
                size="icon"
                className="bg-[#00dba1] -rotate-180 rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <img
                  className="w-5 h-5 rotate-180"
                  alt="Tabler icon arrow"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right.svg"
                />
              </Button>

              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#d9d9d9] rounded-full transition-all duration-300 hover:bg-[#00dba1]"></div>
                <div className="w-2 h-2 bg-[#d9d9d9] rounded-full transition-all duration-300 hover:bg-[#00dba1]"></div>
                <div className="w-2 h-2 bg-[#d9d9d9] rounded-full transition-all duration-300 hover:bg-[#00dba1]"></div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <img
                  className="w-5 h-5"
                  alt="Tabler icon arrow"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right-2.svg"
                />
              </Button>
            </div>
          </div>

          <img className="w-[124px] h-[463px] object-cover rounded-2xl shadow-lg" alt="Summer" />
        </div>

        {/* Partners section */}
        <div className="flex flex-col w-full items-start justify-center gap-10 py-16 mb-20">
          <h2 className="font-normal [font-family:'Manrope',Helvetica] text-graygray-07 text-[40px] leading-[48px] whitespace-nowrap">
            Khách Hàng Tiêu Biểu
          </h2>

          <div className="flex items-center justify-center gap-10 w-full flex-wrap">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  className={`${logo.isObjectCover ? "object-cover" : ""} rounded-lg`}
                  style={{ width: logo.width, height: logo.height }}
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>

        <OverlapWrapperSubsection />
        <Frame4Subsection />
      </div>

      {/* Footer section - Full width */}
      <FooterSubsection />
    </div>
  );
};
