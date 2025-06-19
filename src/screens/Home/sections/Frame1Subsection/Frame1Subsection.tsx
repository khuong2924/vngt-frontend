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
    hasDiscount: false,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
  },
];

export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="flex items-start justify-between w-full mb-12">
        <div className="flex flex-col gap-4">
          <h2 className="[font-family:'Manrope',Helvetica] font-bold text-graygray-07 text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            Tour Khách Đoàn
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Khám phá những điểm đến tuyệt vời cùng đoàn khách của bạn với các gói tour chất lượng cao
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 rounded-full rotate-180 hover:bg-gray-100 transition-all duration-200"
            >
              <ArrowRightIcon className="w-5 h-5 rotate-180" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="p-2.5 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>

          <Button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00dba11a] text-main hover:bg-[#00dba130] rounded-[42px] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-sm sm:text-base leading-4">
              Xem tất cả
            </span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {tourData.map((tour) => (
          <Card key={tour.id} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group">
            <CardContent className="p-0 flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-[214.5px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {tour.hasDiscount && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white p-2 rounded-lg shadow-lg">
                    <span className="[font-family:'Manrope',Helvetica] font-semibold text-sm leading-[14px]">
                      Giảm giá
                    </span>
                  </Badge>
                )}
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-3">
                  <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-base leading-tight line-clamp-2 group-hover:text-[#009e74] transition-colors duration-200">
                    {tour.title}
                  </h3>
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px] line-clamp-2">
                    {tour.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 w-[120px] sm:w-[153px]">
                      <MapPinIcon className="w-4 h-4 text-[#009e74]" />
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px]">
                        Điểm đến
                      </span>
                    </div>
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-[#15191e] text-sm leading-[21px]">
                      {tour.destination}
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 w-[120px] sm:w-[153px]">
                      <CalendarIcon className="w-4 h-4 text-[#009e74]" />
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px]">
                        Khởi hành
                      </span>
                    </div>
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-[#15191e] text-sm leading-[21px]">
                      {tour.departureDate}
                    </span>
                  </div>
                </div>

                <Separator className="my-2" />

                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm">
                      Giá chỉ từ
                    </span>
                    <span className="[font-family:'Manrope',Helvetica] font-bold text-red-500 text-xl">
                      {tour.price}
                    </span>
                  </div>

                  <Button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#00dba11a] text-main hover:bg-[#00dba130] rounded-[42px] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-sm sm:text-base leading-4">
                      Chi tiết
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
