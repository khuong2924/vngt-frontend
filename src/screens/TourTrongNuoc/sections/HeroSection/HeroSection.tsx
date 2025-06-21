import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full border-t border-[#d8dce3] py-10 px-[148px]">
      <div className="flex flex-col items-start gap-2.5">
        <Breadcrumb className="w-80 font-['Manrope',Helvetica] text-base leading-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-[#65758b] font-normal">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#15191e]" />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-[#15191e] font-semibold">
              Tour trong nước
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1 className="font-['Manrope',Helvetica] font-normal text-[#15191e] text-6xl leading-[72px] tracking-[0] whitespace-nowrap">
          Tour Trong Nước
        </h1>
      </div>
    </section>
  );
};
