import { MapPinIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for popular tourist destinations
const popularDestinations = [
  {
    name: "Hermitage",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769602-1.png",
  },
  {
    name: "Moskva",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769597.png",
  },
  {
    name: "Sankt-Peterburg",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769600.png",
  },
  {
    name: "Novosibirsk",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769599.png",
  },
  {
    name: "Yekaterinburg",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769598.png",
  },
  {
    name: "Nizhny Novgorod",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769597.png",
  },
  {
    name: "Hermitage",
    image: "https://c.animaapp.com/mc36n1re0wWczD/img/frame-2144769602-1.png",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-10 py-10">
      <h2 className="text-[40px] font-normal text-graygray-07 leading-[48px] [font-family:'Manrope',Helvetica]">
        Các Điểm Du Lịch Phổ Biến
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {popularDestinations.map((destination, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-60 h-60 rounded-2xl overflow-hidden border-0 cursor-pointer"
              style={{
                backgroundImage: `url(${destination.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent className="flex items-end h-full p-2.5">
                <div className="inline-flex h-10 items-center gap-2 px-3 py-0 bg-[#1d1d1d4c] rounded-[10px] backdrop-blur-[3px] backdrop-brightness-[100%]">
                  <MapPinIcon className="w-4 h-4 text-white" />
                  <span className="[font-family:'Manrope',Helvetica] font-medium text-graygray-01 text-base leading-4 whitespace-nowrap">
                    {destination.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
