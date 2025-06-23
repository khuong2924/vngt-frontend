import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { TourCard, TourData } from "../../../../components/tour";

// Tour data for mapping
const tourData: TourData[] = [
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
    hasDiscount: false,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop",
  },
];

export const Frame1Subsection = (): JSX.Element => {
  const handleTourClick = (tourId: number) => {
    console.log(`Tour clicked: ${tourId}`);
    // Add navigation logic here
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 py-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 [font-family:'Manrope',Helvetica]">
            Tour Khách Đoàn
          </h1>
          <p className="text-gray-600 text-lg">
            Dịch vụ tour du lịch chuyên nghiệp cho đoàn khách
          </p>
        </div>

        <Button className="px-6 py-2 bg-[#009e74] text-white rounded-full hover:bg-[#008a66] transition-all duration-200 flex items-center gap-2">
          Xem tất cả
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {tourData.map((tour) => (
          <TourCard 
            key={tour.id} 
            tour={tour} 
            variant="featured"
            onClick={() => handleTourClick(tour.id)}
          />
        ))}
      </div>
    </section>
  );
};
