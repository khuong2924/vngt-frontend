import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

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
const travelCards = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Tips",
    active: true,
  },
  {
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Ẩm thực",
    active: false,
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Điểm đến",
    active: false,
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="flex items-start justify-between w-full mb-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-graygray-07 text-3xl sm:text-4xl lg:text-[40px] leading-tight font-['Manrope',Helvetica]">
            Cẩm Nang Du Lịch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Khám phá những bí quyết và kinh nghiệm du lịch hữu ích từ các chuyên gia
          </p>
        </div>

        <Button
          variant="ghost"
          className="gap-[13px] px-6 sm:px-8 py-3 sm:py-4 bg-[#00dba11a] rounded-[42px] hover:bg-[#00dba130] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="font-['Manrope',Helvetica] font-medium text-main text-sm sm:text-base leading-4">
            Xem tất cả
          </span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
        {/* Travel cards */}
        {travelCards.map((card, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group">
            <CardContent className="flex flex-col items-start gap-6 p-0">
              <div className="flex flex-col items-start gap-4 w-full relative">
                <div className="relative overflow-hidden w-full">
                  <img
                    className="w-full h-[214.5px] object-cover group-hover:scale-110 transition-transform duration-300"
                    alt="Travel destination"
                    src={card.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex flex-col items-start gap-3 w-full px-6">
                  <h3 className="font-['Manrope',Helvetica] font-bold text-[#15191e] text-base leading-tight line-clamp-2 group-hover:text-[#009e74] transition-colors duration-200">
                    {card.title}
                  </h3>
                </div>

                <Badge
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#15191e] rounded-lg p-2 font-['Manrope',Helvetica] font-semibold text-sm leading-[14px] shadow-lg"
                  variant="outline"
                >
                  {card.tag}
                </Badge>
              </div>

              <div className="flex items-center gap-2 px-6 pb-6">
                <span
                  className={`font-['Manrope',Helvetica] font-normal text-sm sm:text-base leading-4 transition-colors duration-200 ${card.active ? "text-main" : "text-[#65758b]"} group-hover:text-[#009e74]`}
                >
                  Tìm hiểu thêm
                </span>
                <div
                  className={`inline-flex p-1 rounded-full transition-all duration-200 ${card.active ? "bg-main" : "bg-[#65758b]"} group-hover:bg-[#009e74] group-hover:scale-110`}
                >
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* List card */}
        <Card className="border border-solid border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
          <CardContent className="flex flex-col justify-between h-full p-6 gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-['Manrope',Helvetica] font-bold text-[#15191e] text-lg mb-2">
                Bài viết nổi bật
              </h3>
              {travelGuideArticles.map((article, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`font-['Manrope',Helvetica] cursor-pointer transition-all duration-200 hover:text-[#009e74] ${article.isActive ? "font-bold text-[#009e74]" : "font-medium text-[#65758b]"} text-sm sm:text-base leading-relaxed line-clamp-2`}
                  >
                    {article.title}
                  </div>
                  {index < travelGuideArticles.length - 1 && (
                    <Separator className="w-full h-px bg-gray-200" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <Button className="w-full mt-4 px-4 py-2 bg-[#00dba11a] text-main hover:bg-[#00dba130] rounded-[42px] transition-all duration-300 hover:scale-105">
              <span className="font-['Manrope',Helvetica] font-medium text-sm leading-4">
                Xem thêm
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
