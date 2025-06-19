import { ChevronDownIcon, SearchIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Data for country filters
  const countries = [
    { name: "Nhật Bản", selected: true },
    { name: "Hàn Quốc", selected: false },
    { name: "Đài Loan", selected: false },
    { name: "Hong Kong", selected: false },
    { name: "Mỹ", selected: false },
    { name: "Đài Loan", selected: false }, // Duplicate in original code
  ];

  return (
    <Card className="w-full mx-auto p-10 rounded-3xl shadow-[0px_16px_32px_#07132c1a]">
      <CardContent className="flex flex-col items-start justify-center gap-5 p-0">
        <div className="flex items-center gap-2.5 w-full">
          <div className="font-normal text-[#15191e] text-base">
            Gợi ý một số Tour nổi bật
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {countries.map((country, index) => (
              <Button
                key={index}
                variant="outline"
                className={`flex items-center justify-center gap-1 p-2 rounded-[200px] ${
                  country.selected
                    ? "bg-sup text-white"
                    : "bg-[#f9f9f9] text-[#65758b]"
                }`}
              >
                <img
                  className="w-6 h-6"
                  alt="Check"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/check--2--1.svg"
                />
                <span className="font-normal text-base">{country.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="w-full" />

        <div className="flex items-end gap-3 w-full">
          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="text-base leading-6 font-normal text-[#15191e]">
              Khởi hành từ
            </label>
            <div className="h-12 p-3 bg-graygray-01 border border-solid border-[#00dba1] flex items-center justify-between w-full rounded-[200px]">
              <span className="font-normal text-[#15191e] text-base leading-6">
                Việt Nam
              </span>
              <StarIcon className="w-6 h-6" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="text-base leading-6 font-normal text-[#15191e]">
              Thời gian
            </label>
            <div className="h-12 p-3 bg-graygray-01 border border-solid border-[#d8dce3] flex items-center justify-between w-full rounded-[200px]">
              <span className="font-normal text-[#65758b] text-base leading-6">
                Chọn thời gian khởi hành
              </span>
              <img
                className="w-6 h-6"
                alt="Tabler icon calendar"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-calendar-month-12.svg"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 flex-1">
            <label className="text-base leading-6 font-normal text-[#15191e]">
              Số lương khách
            </label>
            <div className="h-12 p-3 bg-graygray-01 border border-solid border-[#d8dce3] flex items-center justify-between w-full rounded-[200px]">
              <span className="font-normal text-[#65758b] text-base leading-6">
                Chọn số lương khách
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </div>

          <Button className="p-4 bg-[#00dba11a] rounded-[42px]" variant="ghost">
            <SearchIcon className="w-6 h-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
