import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#009e74]" />,
      text: "93/8 Phạm Văn Hai, Phường 3 Quận Tân Bình, TP Hồ Chí Minh Việt Nam",
    },
    {
      icon: (
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          <div className="relative h-5 sm:h-6 bg-[url(https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-95.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[11px] sm:w-[13px] h-2 sm:h-2.5 top-[6px] sm:top-[7px] left-[4px] sm:left-[5px]"
              alt="Email icon"
            />
          </div>
        </div>
      ),
      text: "info@vngrouptourist.com",
    },
    {
      icon: <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#009e74]" />,
      text: "0931.867.376 - 0938.322.487",
    },
  ];

  // Quick access links
  const quickLinks = [
    "Giới Thiệu Công Ty",
    "Blog/kiến Thức Nội Thất",
    "Hỗ Trợ Khách Hàng",
    "Tuyển Dụng",
    "Liên Hệ",
  ];

  // Tour categories
  const tourCategories = [
    { name: "Tour quốc tế", highlighted: true },
    { name: "Tour doanh nghiệp", highlighted: false },
    { name: "Tour Inbound", highlighted: false },
    { name: "Tour trong nước", highlighted: false },
  ];

  return (
    <footer className="flex flex-col w-full items-start bg-gradient-to-br from-gray-50 to-white rounded-[60px_60px_0px_0px] overflow-hidden shadow-[0px_-10px_32px_#0000001a]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-end gap-10 relative self-stretch w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between pt-0 pb-10 px-0 relative self-stretch w-full border-b border-gray-200 gap-6">
            <div className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-xl sm:text-2xl lg:text-[28px] tracking-[0] leading-tight">
              CÔNG TY TNHH THƯƠNG MẠI <br />
              VÀ DỊCH VỤ DU LỊCH VNGROUP TOURIST
            </div>

            <img className="relative w-[300px] sm:w-[400px] lg:w-[486px] h-16 sm:h-20 lg:h-24 object-cover" alt="Logo" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative self-stretch w-full">
            {/* Contact Information Section */}
            <div className="flex flex-col items-start gap-6 relative">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#65758b] text-base tracking-[0] leading-[normal]">
                Thông Tin Liên Hệ
              </div>

              <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 relative self-stretch w-full group"
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div className="relative flex-1 [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-sm sm:text-base tracking-[0] leading-relaxed group-hover:text-[#009e74] transition-colors duration-200">
                      {item.text}
                    </div>
                  </div>
                ))}

                <div className="gap-4 inline-flex items-center relative mt-4">
                  <div className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer">
                    <img
                      className="relative w-6 h-6"
                      alt="Facebook"
                      src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-3116491.svg"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer">
                    <div className="relative w-6 h-6 bg-[100%_100%]" />
                  </div>
                  <div className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer">
                    <div className="relative w-6 h-6 bg-[100%_100%]" />
                  </div>
                  <div className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt="Social media"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access Section */}
            <div className="flex flex-col items-start gap-6 relative">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#65758b] text-base tracking-[0] leading-[normal]">
                  Truy Cập Nhanh
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  {quickLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-sm sm:text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#009e74] transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Tours Section */}
            <div className="flex flex-col items-start gap-6 relative">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#65758b] text-base tracking-[0] leading-[normal]">
                Tour Nổi Bật
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                {tourCategories.map((tour, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center ${tour.highlighted ? "justify-center gap-2.5" : ""} relative group cursor-pointer`}
                  >
                    <div
                      className={`relative w-fit [font-family:'Manrope',Helvetica] ${tour.highlighted ? "font-semibold text-[#009e74]" : "font-medium text-graygray-main"} text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors duration-200 group-hover:text-[#009e74]`}
                    >
                      {tour.name}
                    </div>

                    {tour.highlighted && (
                      <div className="flex w-5 h-5 justify-center gap-3 p-1 relative bg-[#009e74] overflow-hidden items-center rounded-[200px] group-hover:scale-110 transition-transform duration-200">
                        <ArrowRightIcon className="relative w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications and Newsletter Section */}
            <div className="flex flex-col items-start justify-center gap-8 relative">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#65758b] text-base tracking-[0] leading-[normal]">
                  Chứng Nhận
                </div>

                <div className="flex items-center gap-3 relative self-stretch w-full">
                  <img
                    className="relative w-[100px] sm:w-[135px] h-6 sm:h-7 object-cover rounded-lg shadow-md"
                    alt="Certification"
                  />
                  <img
                    className="relative w-[90px] sm:w-[120px] h-[26px] sm:h-[34px] rounded-lg shadow-md"
                    alt="Certification"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#65758b] text-base tracking-[0] leading-[normal]">
                  Đăng Ký Nhận Thông Tin Ưu Đãi
                </div>

                <Card className="w-full border border-solid border-gray-200 rounded-[200px] p-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="flex justify-between items-center p-0">
                    <Input
                      className="border-0 shadow-none pl-4 py-3 [font-family:'Manrope',Helvetica] font-normal text-[#65758b] text-sm sm:text-base tracking-[0] leading-6 focus:ring-0"
                      placeholder="Email của bạn"
                    />
                    <div className="flex w-6 h-6 justify-center gap-3 p-1 mr-3 bg-[#009e74] overflow-hidden items-center rounded-[200px] cursor-pointer hover:scale-110 transition-transform duration-200">
                      <ArrowRightIcon className="relative w-4 h-4 text-white" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full border-t border-gray-200" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row h-auto sm:h-10 items-center justify-between gap-3 px-0 py-5 relative self-stretch w-full">
          <div className="inline-flex items-center justify-center gap-[11px] relative">
            <div className="relative w-fit opacity-70 [font-family:'Averta-Regular',Helvetica] font-normal text-graygray-07 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              © All Right Reserved
            </div>

            <div className="relative w-[140px] sm:w-[180px] h-[9px] sm:h-[11.6px]">
              <img
                className="absolute w-3 h-2.5 sm:w-3.5 sm:h-3 top-0 left-0 object-cover"
                alt="Asset"
              />
              <img
                className="absolute w-8 h-2 sm:w-10 sm:h-2.5 top-px left-[14px] sm:left-[17px]"
                alt="Asset"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-[#009e74] transition-colors duration-200">Chính sách bảo mật</span>
            <span className="cursor-pointer hover:text-[#009e74] transition-colors duration-200">Điều khoản sử dụng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
