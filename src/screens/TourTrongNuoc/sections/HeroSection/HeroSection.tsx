import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="flex flex-col items-start gap-4">
        <Breadcrumb className="font-['Manrope',Helvetica] text-base leading-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#65758b] font-normal hover:text-[#009e74] transition-colors duration-200">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#15191e]" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/tour-trong-nuoc" className="text-[#15191e] font-semibold">
              Tour trong nước
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="w-full bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="font-['Manrope',Helvetica] font-bold text-[#15191e] text-3xl md:text-4xl leading-tight mb-4">
            Khám phá Việt Nam
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Từ những ngọn núi hùng vĩ của Sapa đến những bãi biển xanh ngắt của Phú Quốc, 
            từ văn hóa đặc sắc của Hội An đến sự nhộn nhịp của Sài Gòn. 
            Hành trình khám phá Việt Nam đang chờ đợi bạn!
          </p>
        </div>
      </div>
    </section>
  );
};
