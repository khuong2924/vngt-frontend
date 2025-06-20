import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
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
    highlighted: false,
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
    highlighted: false,
  },
];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1216px] items-start gap-10 mx-auto">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-normal [font-family:'Manrope',Helvetica] text-graygray-07 text-[40px] leading-[48px]">
          Ưu Đãi Tour Hot
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full rotate-180"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>

          <Button
            variant="outline"
            className="bg-[#00dba11a] text-main hover:text-main hover:bg-[#00dba130] rounded-[42px] px-8"
          >
            Xem tất cả
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {tourData.map((tour) => (
          <Card key={tour.id} className="relative border-none shadow-none">
            {tour.hasDiscount && (
              <Badge className="absolute top-2.5 left-2.5 bg-sup hover:bg-sup z-10 p-2 rounded-lg">
                Giảm giá
              </Badge>
            )}

            <div className="h-[214.5px] w-full bg-graygray-02 mb-3"></div>

            <CardContent className="p-0 space-y-3">
              <div className="space-y-3">
                <h3
                  className={`font-bold text-base leading-normal ${tour.highlighted ? "text-main" : "text-[#15191e]"}`}
                >
                  {tour.title}
                </h3>
                <p className="font-normal text-sm text-[#15191e] leading-[21px]">
                  {tour.description}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 w-[153px]">
                    <MapPinIcon className="w-5 h-5" />
                    <span className="font-normal text-[#15191e] text-sm leading-[21px]">
                      Điểm đến
                    </span>
                  </div>
                  <span className="font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.destination}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 w-[153px]">
                    <CalendarIcon className="w-5 h-5" />
                    <span className="font-normal text-[#15191e] text-sm leading-[21px]">
                      Khởi hành
                    </span>
                  </div>
                  <span className="font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.departureDate}
                  </span>
                </div>
              </div>
            </CardContent>

            <Separator className="my-3" />

            <CardFooter className="p-0 flex items-start justify-between">
              <div className="flex flex-col items-start">
                <span className="font-normal [font-family:'Roboto',Helvetica] text-[#65758b] text-sm">
                  Giá chỉ từ
                </span>
                <span className="font-medium [font-family:'Manrope',Helvetica] text-sup text-xl">
                  {tour.price}
                </span>
              </div>

              <Button
                variant={tour.highlighted ? "default" : "outline"}
                className={`rounded-[42px] px-8 ${
                  tour.highlighted
                    ? "bg-main hover:bg-main/90 text-white"
                    : "bg-[#00dba11a] hover:bg-[#00dba130] text-main hover:text-main"
                }`}
              >
                Chi tiết
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
