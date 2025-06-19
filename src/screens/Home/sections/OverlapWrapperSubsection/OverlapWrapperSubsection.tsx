import { Building2Icon, PlaneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Service data for mapping
const serviceData = [
  {
    icon: <Building2Icon className="w-10 h-10" />,
    title: "Khách sạn",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque eros",
  },
  {
    icon: (
      <div className="relative w-10 h-10 overflow-hidden">
        <div className="relative h-[31px] top-[5px]">
          <img
            className="absolute w-[39px] h-[27px] top-0 left-px"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-56.svg"
          />
          <img
            className="absolute w-[31px] h-2.5 top-px left-1"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-85.svg"
          />
          <img
            className="absolute w-[7px] h-[5px] top-[13px] left-[30px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-58.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-[22px] left-[34px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-64.svg"
          />
          <img
            className="absolute w-1.5 h-[9px] top-[22px] left-[33px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-94.svg"
          />
          <img
            className="absolute w-1 h-[3px] top-[7px] left-9"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-57.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-[13px] left-[33px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
          />
          <img
            className="absolute w-0.5 h-0.5 top-[15px] left-[31px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
          />
          <img
            className="absolute w-[18px] h-[3px] top-4 left-[11px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-62.svg"
          />
          <img
            className="absolute w-[7px] h-[5px] top-[13px] left-[3px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-69.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-[22px] left-[3px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-88.svg"
          />
          <img
            className="absolute w-9 h-[5px] top-[22px] left-0.5"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-66.svg"
          />
          <img
            className="absolute w-1.5 h-[9px] top-[22px] left-px"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-67.svg"
          />
          <img
            className="absolute w-1 h-[3px] top-[7px] left-0"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-65.svg"
          />
          <img
            className="absolute w-[3px] h-[3px] top-[13px] left-1"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
          />
          <img
            className="absolute w-0.5 h-0.5 top-[15px] left-[7px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
          />
          <img
            className="absolute w-[31px] h-2 top-0.5 left-1"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-78.svg"
          />
        </div>
      </div>
    ),
    title: "Thuê Xe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque eros",
  },
  {
    icon: (
      <div className="relative w-10 h-10">
        <div className="h-10">
          <div className="w-10 h-10">
            <div className="relative h-10">
              <img
                className="absolute w-10 h-[21px] top-[19px] left-0"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-1.svg"
              />
              <img
                className="absolute w-10 h-5 top-0 left-0"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-6.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-0.5 left-0.5"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-0.5 left-[31px]"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-2.svg"
              />
              <img
                className="absolute w-[17px] h-3.5 top-[23px] left-[3px]"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-3.svg"
              />
              <img
                className="absolute w-[5px] h-[5px] top-[26px] left-[9px]"
                alt="Oval"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
              />
              <img
                className="absolute w-[9px] h-1.5 top-[31px] left-[7px]"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-5.svg"
              />
              <img
                className="absolute w-[13px] h-[13px] top-[23px] left-[23px]"
                alt="Oval"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
              />
              <img
                className="absolute w-[9px] h-1.5 top-7 left-[26px]"
                alt="Shape"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/shape-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    ),
    title: "VISA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque eros",
  },
  {
    icon: <PlaneIcon className="w-10 h-10" />,
    title: "Vé máy bay",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque eros",
  },
];

export const OverlapWrapperSubsection = () => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col w-full md:w-1/2 items-start gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {serviceData.map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardContent className="flex flex-col items-start gap-3 p-0">
                    {service.icon}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <h3 className="font-semibold text-[#15191e] text-base leading-[20.8px]">
                        {service.title}
                      </h3>
                      <p className="text-[#65758b] text-base leading-6 font-normal">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
            <div className="absolute w-[641px] h-[640px] top-0 right-0 rounded-[320.5px/320px] bg-[linear-gradient(180deg,rgba(0,219,161,1)_0%,rgba(0,219,161,0)_60%)] opacity-10" />
            <img
              className="relative w-full max-w-[620px] h-auto ml-auto"
              alt="Travel services illustration"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
