import { PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageGallerySection = (): JSX.Element => {

  const reviewImages = [
    "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464097-2.svg",
    "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464097.svg",
    "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464097-4.svg",
    "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464097-3.svg",
    "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464097-1.svg",
  ];

  return (
    <section className="flex flex-col w-full items-start gap-10">
      <div className="flex flex-col items-start justify-center gap-2.5 w-full">
        {/* Breadcrumb navigation */}
        <nav className="w-80 [font-family:'Manrope',Helvetica] font-normal text-base tracking-[0] leading-6">
          <span className="text-[#65758b] hover:text-[#00dba1] transition-colors duration-300 cursor-pointer">Trang chủ</span>
          <span className="text-[#15191e]">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <span className="font-semibold text-[#15191e]"> Tour trong nước</span>
        </nav>

        {/* Tour title */}
        <h1 className="w-full [font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-6xl tracking-[0] leading-[72.0px]">
          Du Lịch Phú Quốc Hè - Grand World - Vinwonders - Safari Từ Sài Gòn
          2025
        </h1>
      </div>

      {/* Image gallery section */}
      <div className="flex items-start gap-4 w-full">
        {/* Main large image */}
        <img
          className="w-[890px] h-[455px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          alt="Phu Quoc beach destination"
          src="https://c.animaapp.com/mc8humq02LtpLJ/img/image-6.png"
        />

        {/* Right sidebar */}
        <div className="flex flex-col w-[310px] items-start gap-4">
          {/* Reviews card */}
          <Card className="w-full bg-[#e5fff8] border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-start justify-center gap-4 p-4">
              {/* Rating and user images */}
              <div className="flex items-center justify-between w-full">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sup text-2xl tracking-[-1.20px] leading-[normal] [font-family:'Manrope',Helvetica]">
                    5.0
                  </span>
                  <img
                    className="w-[19.02px] h-[18.09px]"
                    alt="Star"
                    src="https://c.animaapp.com/mc8humq02LtpLJ/img/star-1.svg"
                  />
                </div>

                {/* User review images */}
                <div className="flex flex-wrap items-center gap-[0px_-12px]">
                  {reviewImages.map((src, index) => (
                    <img
                      key={`review-image-${index}`}
                      className="w-8 h-8 object-cover rounded-full border-2 border-white shadow-sm hover:scale-110 transition-all duration-300"
                      alt={`Customer review ${index + 1}`}
                      src={src}
                    />
                  ))}
                </div>
              </div>

              {/* Review count text */}
              <p className="w-full [font-family:'Manrope',Helvetica] font-normal text-xl tracking-[0] leading-[normal]">
                <span className="text-[#15191e]">Hơn</span>
                <span className="font-bold text-[#00dba1]"> 1000 </span>
                <span className="text-[#15191e]">
                  khách hàng
                  <br />
                  đánh giá trên mạng xã hội
                </span>
              </p>

              {/* Action buttons */}
              <div className="flex items-start gap-2 w-full">
                <Button className="flex-1 bg-[#00dba1] hover:bg-[#00c491] text-white font-medium rounded-[42px] px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Xem tất cả hình ảnh
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="p-3 bg-white rounded-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#00dba1] hover:text-white"
                >
                  <PlayIcon className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary image */}
          <img
            className="w-full h-60 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            alt="Secondary tour image"
            src="https://c.animaapp.com/mc8humq02LtpLJ/img/image-1.png"
          />
        </div>
      </div>
    </section>
  );
};
