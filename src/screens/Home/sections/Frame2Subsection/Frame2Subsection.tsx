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
    image: "https://c.animaapp.com/mc2sb7uh9XDRE6/img/42-1.svg",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Tips",
    active: true,
  },
  {
    image: "https://c.animaapp.com/mc2sb7uh9XDRE6/img/42.svg",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Ẩm thực",
    active: false,
  },
  {
    image: "https://c.animaapp.com/mc2sb7uh9XDRE6/img/42-2.svg",
    title:
      "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
    tag: "Điểm đến",
    active: false,
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1216px] items-start gap-10 mx-auto">
      <div className="flex items-start justify-between w-full">
        <h2 className="font-normal text-graygray-07 text-[40px] leading-[48px] font-['Manrope',Helvetica]">
          Cẩm Nang Du Lịch
        </h2>

        <Button
          variant="ghost"
          className="gap-[13px] px-8 py-4 bg-[#00dba11a] rounded-[42px]"
        >
          <span className="font-['Manrope',Helvetica] font-medium text-main text-base leading-4">
            Xem tất cả
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-6 w-full">
        {/* First card with image */}
        {travelCards.map((card, index) => (
          <Card key={index} className="w-[286px] border-none shadow-none">
            <CardContent className="flex flex-col items-start gap-6 p-0">
              <div className="flex flex-col items-start gap-3 w-full relative">
                <img
                  className="w-full h-[214.5px] object-cover"
                  alt="Travel destination"
                  src={card.image}
                />

                <div className="flex flex-col items-start gap-3 w-full">
                  <h3 className="font-['Manrope',Helvetica] font-bold text-[#15191e] text-base leading-normal">
                    {card.title}
                  </h3>
                </div>

                <Badge
                  className="absolute top-2.5 left-2.5 bg-white text-[#15191e] rounded-lg p-2 font-['Manrope',Helvetica] font-semibold text-sm leading-[14px]"
                  variant="outline"
                >
                  {card.tag}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`font-['Manrope',Helvetica] font-normal text-base leading-4 ${card.active ? "text-main" : "text-[#65758b]"}`}
                >
                  Tìm hiểu thêm
                </span>
                <div
                  className={`inline-flex p-0.5 ${card.active ? "bg-main" : "bg-[#65758b]"} rounded-[200px]`}
                >
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* List card */}
        <Card className="w-[286px] h-[305px] p-3 border border-solid border-[#d8dce3] rounded-2xl">
          <CardContent className="flex flex-col justify-between h-full p-0 gap-2">
            {travelGuideArticles.map((article, index) => (
              <React.Fragment key={index}>
                <div
                  className={`font-['Manrope',Helvetica] ${article.isActive ? "font-bold text-sup" : "font-medium text-[#65758b]"} text-base leading-normal`}
                >
                  {article.title}
                </div>
                {index < travelGuideArticles.length - 1 && (
                  <Separator className="w-full h-px" />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
