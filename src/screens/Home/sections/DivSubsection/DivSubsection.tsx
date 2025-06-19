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
    highlighted: false,
    buttonVariant: "outline",
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
    hasDiscount: false,
    highlighted: true,
    buttonVariant: "default",
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
    hasDiscount: false,
    highlighted: false,
    buttonVariant: "outline",
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
    hasDiscount: true,
    highlighted: false,
    buttonVariant: "outline",
  },
];

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 py-10">
      <div className="flex items-start justify-between w-full">
        <h2 className="[font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-[40px] leading-[48px]">
          Tour Nước Ngoài
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 rounded-full rotate-180"
            >
              <ArrowRightIcon className="w-5 h-5 rotate-180" />
            </Button>

            <Button variant="ghost" size="icon" className="p-2.5 rounded-full">
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>

          <Button
            variant="outline"
            className="gap-[13px] px-8 py-4 bg-[#00dba11a] text-main rounded-[42px] font-medium"
          >
            Xem tất cả
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {tourData.map((tour) => (
          <Card
            key={tour.id}
            className="flex flex-col gap-3 border-none shadow-none"
          >
            <div className="relative">
              <div className="w-full h-[214.5px] bg-gray-200 rounded-md" />

              {tour.hasDiscount && (
                <Badge className="absolute top-2.5 left-2.5 bg-sup text-white font-semibold p-2 rounded-lg">
                  Giảm giá
                </Badge>
              )}
            </div>

            <CardContent className="p-0 flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <h3
                  className={`[font-family:'Manrope',Helvetica] font-bold text-base leading-normal ${tour.highlighted ? "text-main" : "text-[#15191e]"}`}
                >
                  {tour.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                  {tour.description}
                </p>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between w-full rounded-[200px]">
                  <div className="flex items-center gap-1 w-[153px]">
                    <MapPinIcon className="w-5 h-5" />
                    <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                      Điểm đến
                    </span>
                  </div>
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.destination}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full rounded-[200px]">
                  <div className="flex items-center gap-1 w-[153px]">
                    <CalendarIcon className="w-5 h-5" />
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

              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm leading-normal">
                    Giá chỉ từ
                  </span>
                  <span className="[font-family:'Manrope',Helvetica] font-medium text-sup text-xl leading-normal">
                    {tour.price}
                  </span>
                </div>

                <Button
                  variant={
                    tour.buttonVariant === "default" ? "default" : "outline"
                  }
                  className={`px-8 py-4 rounded-[42px] font-medium ${
                    tour.buttonVariant === "default"
                      ? "bg-main text-white"
                      : "bg-[#00dba11a] text-main"
                  }`}
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
