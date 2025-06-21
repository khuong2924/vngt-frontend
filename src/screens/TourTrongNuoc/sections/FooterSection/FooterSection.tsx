import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Contact information data
const contactInfo = [
  {
    icon: "https://c.animaapp.com/mc36n1re0wWczD/img/18.png",
    text: "93/8 Phạm Văn Hai, Phường 3 Quận Tân Bình, TP Hồ Chí Minh Việt Nam",
  },
  {
    icon: "https://c.animaapp.com/mc36n1re0wWczD/img/vector-3.svg",
    innerIcon: "https://c.animaapp.com/mc36n1re0wWczD/img/group-2.png",
    text: "info@vngrouptourist.com",
  },
  {
    icon: "https://c.animaapp.com/mc36n1re0wWczD/img/phone.png",
    text: "0931.867.376 - 0938.322.487",
  },
];

// Social media icons
const socialIcons = [
  {
    src: "https://c.animaapp.com/mc36n1re0wWczD/img/fi-3116491.svg",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mc36n1re0wWczD/img/facebook.png",
    alt: "Facebook",
  },
  {
    src: "https://c.animaapp.com/mc36n1re0wWczD/img/02-youtube.png",
    alt: "Youtube",
  },
  {
    src: "https://c.animaapp.com/mc36n1re0wWczD/img/image-12.png",
    alt: "Social Media",
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

// Tour options
const tourOptions = [
  { name: "Tour quốc tế", highlighted: true },
  { name: "Tour doanh nghiệp", highlighted: false },
  { name: "Tour Inbound", highlighted: false },
  { name: "Tour trong nước", highlighted: false },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start relative bg-white rounded-[60px_60px_0px_0px] overflow-hidden shadow-[0px_-10px_32px_#0000001a]">
      <div className="flex flex-col items-end gap-10 px-[148px] py-10 relative self-stretch w-full">
        <div className="flex items-end justify-between pt-0 pb-10 px-0 relative self-stretch w-full border-b border-[#d8dce3]">
          <div className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-[28px] tracking-[0] leading-[36.4px]">
            CÔNG TY TNHH THƯƠNG MẠI <br />
            VÀ DỊCH VỤ DU LỊCH VNGROUP TOURIST
          </div>

          <img
            className="relative w-[486px] h-24 object-cover"
            alt="Logo"
            src="https://c.animaapp.com/mc36n1re0wWczD/img/logo-ngang1-01-1.png"
          />
        </div>

        <div className="flex items-start gap-8 relative self-stretch w-full">
          {/* Contact Information Column */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
              Thông Tin Liên Hệ
            </div>

            <div className="flex-col items-start gap-5 flex relative self-stretch w-full">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 relative self-stretch w-full"
                >
                  {item.innerIcon ? (
                    <div className="relative w-6 h-6">
                      <div className="relative h-6 bg-[url(https://c.animaapp.com/mc36n1re0wWczD/img/vector-3.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-[13px] h-2.5 top-[7px] left-[5px]"
                          alt="Group"
                          src={item.innerIcon}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative w-6 h-6 bg-[url(https://c.animaapp.com/mc36n1re0wWczD/img/18.png)] bg-[100%_100%]"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                  )}

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-base tracking-[0] leading-6">
                    {item.text}
                  </div>
                </div>
              ))}

              <div className="gap-4 inline-flex items-center relative">
                {socialIcons.map((icon, index) => (
                  <div key={index} className="relative w-8 h-8">
                    <img
                      className="w-full h-full object-cover"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Access Column */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Truy Cập Nhanh
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                {quickLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-base tracking-[0] leading-[normal] cursor-pointer hover:text-main transition-colors"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Tours Column */}
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
              Tour Nổi Bật
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              {tourOptions.map((tour, index) =>
                tour.highlighted ? (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center gap-2.5 relative cursor-pointer"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-main text-base tracking-[0] leading-6 whitespace-nowrap">
                      {tour.name}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-5 h-5 p-1 bg-sup rounded-full border-none"
                    >
                      <ArrowRightIcon className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-graygray-main text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer hover:text-main transition-colors"
                  >
                    {tour.name}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Certifications and Newsletter Column */}
          <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Chứng Nhận
              </div>

              <div className="items-center gap-3 flex relative self-stretch w-full">
                <img
                  className="relative w-[135px] h-7 object-cover"
                  alt="Certification"
                  src="https://c.animaapp.com/mc36n1re0wWczD/img/image-2-1.png"
                />

                <img
                  className="relative w-[120px] h-[34px]"
                  alt="Certification"
                  src="https://c.animaapp.com/mc36n1re0wWczD/img/image-3-1.png"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#65758b] text-base tracking-[0] leading-[normal]">
                Đăng Ký Nhận Thông Tin Ưu Đãi
              </div>

              <div className="flex justify-between items-center w-full relative">
                <Input
                  className="pl-4 pr-12 py-3 bg-white border border-solid border-[#d8dce3] rounded-[200px] [font-family:'Manrope',Helvetica] font-normal text-[#65758b] text-base"
                  placeholder="Email của bạn"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-3 w-6 h-6 p-1 bg-sup rounded-full border-none"
                >
                  <ArrowRightIcon className="h-4 w-4 text-white" />
                </Button>
              </div>
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
              src="https://c.animaapp.com/mc36n1re0wWczD/img/asset-11-2.png"
            />

            <img
              className="absolute w-10 h-2.5 top-px left-[17px]"
              alt="Mona media website"
              src="https://c.animaapp.com/mc36n1re0wWczD/img/mona-media---website.svg"
            />

            <img
              className="absolute w-[105px] h-[11px] top-0 left-[61px]"
              alt="Mona media website"
              src="https://c.animaapp.com/mc36n1re0wWczD/img/mona-media---website-1.svg"
            />

            <img
              className="absolute w-3 h-3 top-0 left-[168px]"
              alt="Share"
              src="https://c.animaapp.com/mc36n1re0wWczD/img/share-3-1.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
