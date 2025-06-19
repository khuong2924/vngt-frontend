import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Tour data for mapping
const tourData = [
  {
    id: 1,
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
    destination: "Việt Nam",
    departureDate: "22/08/2000",
    price: "2.750.000 ₫",
    hasDiscount: true,
  },
  {
    id: 2,
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
    destination: "Việt Nam",
    departureDate: "22/08/2000",
    price: "2.750.000 ₫",
    hasDiscount: true,
  },
  {
    id: 3,
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
    destination: "Việt Nam",
    departureDate: "22/08/2000",
    price: "2.750.000 ₫",
    hasDiscount: true,
  },
  {
    id: 4,
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
    destination: "Việt Nam",
    departureDate: "22/08/2000",
    price: "2.750.000 ₫",
    hasDiscount: false,
  },
];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 py-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="[font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-[40px] leading-[48px]">
          Tour Trong Nước
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full rotate-180"
              aria-label="Previous"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Next"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="bg-[#00dba11a] text-main rounded-[42px] px-8 py-4 [font-family:'Manrope',Helvetica] font-medium"
          >
            Xem tất cả
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {tourData.map((tour) => (
          <Card key={tour.id} className="border-none shadow-none">
            <CardContent className="p-0 flex flex-col gap-3">
              <div className="relative">
                <div className="w-full h-[214.5px] bg-gray-200 rounded-md"></div>
                {tour.hasDiscount && (
                  <Badge className="absolute top-2.5 left-2.5 bg-sup text-white font-semibold p-2 rounded-lg">
                    Giảm giá
                  </Badge>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-base">
                  {tour.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                  {tour.description}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 w-[153px]">
                    <MapPinIcon className="h-5 w-5" />
                    <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                      Điểm đến
                    </span>
                  </div>
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.destination}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 w-[153px]">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                      Khởi hành
                    </span>
                  </div>
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.departureDate}
                  </span>
                </div>
              </div>

              <Separator className="my-1" />

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm">
                    Giá chỉ từ
                  </span>
                  <span className="[font-family:'Manrope',Helvetica] font-medium text-sup text-xl">
                    {tour.price}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  className="bg-[#00dba11a] text-main rounded-[42px] px-8 py-4 [font-family:'Manrope',Helvetica] font-medium"
                >
                  Chi tiết
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
