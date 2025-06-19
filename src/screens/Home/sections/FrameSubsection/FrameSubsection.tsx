import React from "react";

export const FrameSubsection = (): JSX.Element => {
  // Data for the first column
  const guideLinks = [
    "Giới thiệu",
    "Quy định chung",
    "Hướng dẫn thanh toán",
    "Hướng dẫn đặt tour",
    "Huỷ và đổi vé",
    "Quà tặng du lịch",
    "Chăm sóc khách hàng",
    "Khảo sát ý kiến khách hàng",
  ];

  // Data for the second column
  const infoLinks = [
    "Góc truyền thông",
    "Khuyến mãi",
    "Tin tức chung",
    "Cẩm nang du lịch",
    "Trải nghiệm khách hàng",
    "Khách hàng tiêu biểu",
    "Hồ sơ năng lực",
    "Liên hệ",
  ];

  // Data for the third column
  const serviceLinks = [
    "Tour khách đoàn",
    "Teambuilding",
    "Tổ chức sự kiện",
    "M.I.C.E",
    "Đại lý vé máy bay",
    "Dịch vụ Visa",
  ];

  return (
    <footer className="flex w-full items-start gap-[60px] px-[148px] py-[100px] border-t-2 border-[#d8dce3]">
      <div className="flex-col items-start gap-5 flex-1 grow rounded-2xl flex">
        <h3 className="w-fit font-['Manrope',Helvetica] font-extrabold text-[#15191e] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
          HƯỚNG DẪN
        </h3>

        <nav className="w-full gap-4 flex flex-col items-start">
          {guideLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-xl leading-5 self-stretch font-['Manrope',Helvetica] font-normal text-[#15191e] tracking-[0] hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex-col items-start gap-5 flex-1 grow rounded-2xl flex">
        <h3 className="w-fit font-['Manrope',Helvetica] font-extrabold text-[#15191e] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
          THÔNG TIN
        </h3>

        <nav className="w-full gap-4 flex flex-col items-start">
          {infoLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-xl leading-5 self-stretch font-['Manrope',Helvetica] font-normal text-[#15191e] tracking-[0] hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex-col items-start gap-5 flex-1 grow rounded-2xl flex">
        <h3 className="w-fit font-['Manrope',Helvetica] font-extrabold text-[#15191e] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
          DỊCH VỤ
        </h3>

        <nav className="w-full gap-4 flex flex-col items-start">
          {serviceLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-xl leading-5 self-stretch font-['Manrope',Helvetica] font-normal text-[#15191e] tracking-[0] hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
