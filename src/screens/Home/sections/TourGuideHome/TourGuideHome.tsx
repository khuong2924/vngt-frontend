import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { TourCard, TourData } from "../../../../components/tour";

// Travel guide data
const travelGuideArticles = [
  {
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    isActive: true,
  },
  {
    title: "Tân Trang Văn Phòng Tại Nhà Với Mẫu Bàn Làm Việc Đa Năng 2025",
    isActive: false,
  },
  {
    title: "Không Gian Làm Việc Nhỏ? Đã Có Giải Pháp Bàn Gấp Gọn Tiện Lợi",
    isActive: false,
  },
  {
    title: "Bàn Làm Việc Phong Cách Bắc Âu – Đơn Giản Mà Sang Trọng",
    isActive: false,
  },
];

// Travel cards data
const travelCards: TourData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description: "Khám phá đảo ngọc với những trải nghiệm tuyệt vời",
    destination: "Phú Quốc",
    departureDate: "22/08/2025",
    price: "2.750.000 ₫",
    tag: "Tips",
    active: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description: "Thưởng thức ẩm thực đặc sắc của đảo ngọc",
    destination: "Phú Quốc",
    departureDate: "22/08/2025",
    price: "2.750.000 ₫",
    tag: "Ẩm thực",
    active: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description: "Khám phá những điểm đến hấp dẫn nhất",
    destination: "Phú Quốc",
    departureDate: "22/08/2025",
    price: "2.750.000 ₫",
    tag: "Điểm đến",
    active: false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    description: "Hướng dẫn chi tiết cho chuyến đi hoàn hảo",
    destination: "Phú Quốc",
    departureDate: "22/08/2025",
    price: "2.750.000 ₫",
    tag: "Hướng dẫn",
    active: false,
  },
];

export const Frame2Subsection = (): JSX.Element => {
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
            Cẩm Nang Du Lịch
          </h1>
          <p className="text-gray-600 text-lg">
            Những thông tin hữu ích cho chuyến đi của bạn
          </p>
        </div>

        <Button className="px-6 py-2 bg-[#009e74] text-white rounded-full hover:bg-[#008a66] transition-all duration-200 flex items-center gap-2">
          Xem tất cả
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
        {/* Travel cards */}
        {travelCards.map((card) => (
          <TourCard 
            key={card.id} 
            tour={card} 
            variant="guide"
            onClick={() => handleTourClick(card.id)}
          />
        ))}
      </div>
    </section>
  );
};
