import React from "react";
import { Button } from "../../components/ui/button";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

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
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:9652"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header section */}
        <HeaderSubsection />

        {/* Hero section */}
        <div className="w-full relative">
          <div className="w-full h-[600px] relative bg-[100%_100%]">
            <Button className="absolute top-[270px] left-1/2 transform -translate-x-1/2 bg-main text-white border-[10px] border-solid border-[#00dba11a] rounded-[42px] font-semibold [font-family:'Manrope',Helvetica]">
              Khám phá ngay hôm nay!
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-[280px] left-[148px] bg-[#f9f9f9] -rotate-180 rounded-full p-2.5"
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
              className="absolute top-[280px] right-[148px] bg-[#f9f9f9] rounded-full p-2.5"
            >
              <img
                className="w-5 h-5"
                alt="Tabler icon arrow"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right-2.svg"
              />
            </Button>
          </div>

          <FrameWrapperSubsection />
        </div>

        {/* Main content sections */}
        
        <DivWrapperSubsection />
        <DivSubsection />
        <SectionComponentNodeSubsection />
        <Frame1Subsection />
        <Frame2Subsection />
        <FrameSubsection />

        {/* Carousel section */}
        <div className="flex items-center gap-6 w-full justify-center my-12">
          <img className="w-[124px] h-[463px]" alt="Summer" />

          <div className="relative w-full max-w-[1216px] h-[463px] bg-cover bg-[50%_50%]">
            <div className="flex w-[169px] items-center justify-between absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button
                variant="outline"
                size="icon"
                className="bg-[#00dba1] -rotate-180 rounded-full p-2.5"
              >
                <img
                  className="w-5 h-5 rotate-180"
                  alt="Tabler icon arrow"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right.svg"
                />
              </Button>

              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="bg-[#f9f9f9] rounded-full p-2.5"
              >
                <img
                  className="w-5 h-5"
                  alt="Tabler icon arrow"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-arrow-narrow-right-2.svg"
                />
              </Button>
            </div>
          </div>

          <img className="w-[124px] h-[463px] object-cover" alt="Summer" />
        </div>

        <Frame3Subsection />

        {/* Partners section */}
        <div className="flex flex-col w-full max-w-[1216px] mx-auto items-start justify-center gap-10 py-12">
          <h2 className="font-normal [font-family:'Manrope',Helvetica] text-graygray-07 text-[40px] leading-[48px] whitespace-nowrap">
            Khách Hàng Tiêu Biểu
          </h2>

          <div className="flex items-center justify-center gap-10 w-full flex-wrap">
            {partnerLogos.map((logo) => (
              <img
                key={logo.id}
                className={`${logo.isObjectCover ? "object-cover" : ""}`}
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <OverlapWrapperSubsection />
        <Frame4Subsection />

        {/* Footer section */}
        <FooterSubsection />
      </div>
    </div>
  );
};
