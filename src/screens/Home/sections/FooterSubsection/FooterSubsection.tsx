import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "93/8 Phạm Văn Hai, Phường 3 Quận Tân Bình, TP Hồ Chí Minh Việt Nam",
    },
    {
      icon: (
        <div className="relative w-6 h-6">
          <div className="relative h-6 bg-[url(https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-95.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[13px] h-2.5 top-[7px] left-[5px]"
              alt="Email icon"
            />
          </div>
        </div>
      ),
      text: "info@vngrouptourist.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
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
    <footer className="flex flex-col w-full items-start bg-white rounded-[60px_60px_0px_0px] overflow-hidden shadow-[0px_-10px_32px_#0000001a]">
      <div className="flex flex-col items-end gap-10 px-[148px] py-10 relative self-stretch w-full">
        <div className="flex items-end justify-between pt-0 pb-10 px-0 relative self-stretch w-full border-b border-[#d8dce3]">
          <div className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-[28px] tracking-[0] leading-[36.4px]">
            CÔNG TY TNHH THƯƠNG MẠI <br />
            VÀ DỊCH VỤ DU LỊCH VNGROUP TOURIST
          </div>

          <img className="relative w-[486px] h-24 object-cover" alt="Logo" />
        </div>

        <div className="flex items-start gap-8 relative self-stretch w-full">
          {/* Contact Information Section */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
              Thông Tin Liên Hệ
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 relative self-stretch w-full"
                >
                  {item.icon}
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-base tracking-[0] leading-6">
                    {item.text}
                  </div>
                </div>
              ))}

              <div className="gap-4 inline-flex items-center relative">
                <img
                  className="relative w-8 h-8"
                  alt="Facebook"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-3116491.svg"
                />
                <div className="relative w-8 h-8 bg-[100%_100%]" />
                <div className="relative w-8 h-8 bg-[100%_100%]" />
                <img
                  className="relative w-8 h-8 object-cover"
                  alt="Social media"
                />
              </div>
            </div>
          </div>

          {/* Quick Access Section */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Truy Cập Nhanh
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                {quickLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-base tracking-[0] leading-[normal] cursor-pointer hover:text-main"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Tours Section */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
              Tour Nổi Bật
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              {tourCategories.map((tour, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center ${tour.highlighted ? "justify-center gap-2.5" : ""} relative`}
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] ${tour.highlighted ? "font-semibold text-main" : "font-medium text-graygray-main"} text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer`}
                  >
                    {tour.name}
                  </div>

                  {tour.highlighted && (
                    <div className="flex w-5 h-5 justify-center gap-3 p-1 relative bg-sup overflow-hidden items-center rounded-[200px]">
                      <ArrowRightIcon className="relative w-4 h-4 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Newsletter Section */}
          <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Chứng Nhận
              </div>

              <div className="flex items-center gap-3 relative self-stretch w-full">
                <img
                  className="relative w-[135px] h-7 object-cover"
                  alt="Certification"
                />
                <img
                  className="relative w-[120px] h-[34px]"
                  alt="Certification"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Đăng Ký Nhận Thông Tin Ưu Đãi
              </div>

              <Card className="w-full border border-solid border-[#d8dce3] rounded-[200px] p-0 bg-white">
                <CardContent className="flex justify-between items-center p-0">
                  <Input
                    className="border-0 shadow-none pl-4 py-3 [font-family:'Manrope',Helvetica] font-normal text-[#65758b] text-base tracking-[0] leading-6"
                    placeholder="Email của bạn"
                  />
                  <div className="flex w-6 h-6 justify-center gap-3 p-1 mr-3 bg-sup overflow-hidden items-center rounded-[200px]">
                    <ArrowRightIcon className="relative w-4 h-4 text-white" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full border-t border-[#d8dce3]" />

      <div className="flex h-10 items-center justify-around gap-3 px-0 py-5 relative self-stretch w-full">
        <div className="inline-flex items-center justify-center gap-[11px] relative mt-[-11.00px] mb-[-11.00px]">
          <div className="relative w-fit mt-[-1.00px] opacity-70 [font-family:'Averta-Regular',Helvetica] font-normal text-graygray-07 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            © All Right Reserved
          </div>

          <div className="relative w-[180px] h-[11.6px]">
            <img
              className="absolute w-3.5 h-3 top-0 left-0 object-cover"
              alt="Asset"
            />
            <img
              className="absolute w-10 h-2.5 top-px left-[17px]"
              alt="Mona media website"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/mona-media---website-1.svg"
            />
            <img
              className="absolute w-[105px] h-[11px] top-0 left-[61px]"
              alt="Mona media website"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/mona-media---website.svg"
            />
            <img
              className="absolute w-3 h-3 top-0 left-[168px]"
              alt="Share"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/share-3-1.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
