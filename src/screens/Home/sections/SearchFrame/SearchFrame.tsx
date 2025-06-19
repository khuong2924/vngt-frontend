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
    { name: "Thái Lan", selected: false },
  ];

  return (
    <Card className="w-full mx-auto p-6 sm:p-8 lg:p-10 rounded-3xl shadow-[0px_16px_32px_#07132c1a] hover:shadow-[0px_20px_40px_#07132c2a] transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
      <CardContent className="flex flex-col items-start justify-center gap-6 p-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
          <div className="font-semibold text-[#15191e] text-lg sm:text-xl">
            Gợi ý một số Tour nổi bật
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {countries.map((country, index) => (
              <Button
                key={index}
                variant="outline"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-[200px] transition-all duration-200 hover:scale-105 ${
                  country.selected
                    ? "bg-[#009e74] text-white border-[#009e74] shadow-lg"
                    : "bg-[#f9f9f9] text-[#65758b] border-gray-200 hover:bg-gray-100 hover:border-[#009e74] hover:text-[#009e74]"
                }`}
              >
                {country.selected && (
                  <img
                    className="w-4 h-4"
                    alt="Check"
                    src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/check--2--1.svg"
                  />
                )}
                <span className="font-medium text-sm sm:text-base">{country.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="w-full bg-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="flex flex-col items-start gap-2">
            <label className="text-sm sm:text-base leading-6 font-medium text-[#15191e]">
              Khởi hành từ
            </label>
            <div className="h-12 p-3 bg-graygray-01 border-2 border-solid border-[#00dba1] flex items-center justify-between w-full rounded-[200px] hover:border-[#009e74] transition-colors duration-200 shadow-sm">
              <span className="font-medium text-[#15191e] text-sm sm:text-base leading-6">
                Việt Nam
              </span>
              <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#009e74]" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm sm:text-base leading-6 font-medium text-[#15191e]">
              Thời gian
            </label>
            <div className="h-12 p-3 bg-graygray-01 border-2 border-solid border-gray-200 flex items-center justify-between w-full rounded-[200px] hover:border-[#009e74] transition-colors duration-200 shadow-sm cursor-pointer group">
              <span className="font-medium text-[#65758b] text-sm sm:text-base leading-6 group-hover:text-[#009e74] transition-colors duration-200">
                Chọn thời gian khởi hành
              </span>
              <img
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200"
                alt="Tabler icon calendar"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/tabler-icon-calendar-month-12.svg"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm sm:text-base leading-6 font-medium text-[#15191e]">
              Số lượng khách
            </label>
            <div className="h-12 p-3 bg-graygray-01 border-2 border-solid border-gray-200 flex items-center justify-between w-full rounded-[200px] hover:border-[#009e74] transition-colors duration-200 shadow-sm cursor-pointer group">
              <span className="font-medium text-[#65758b] text-sm sm:text-base leading-6 group-hover:text-[#009e74] transition-colors duration-200">
                Chọn số lượng khách
              </span>
              <ChevronDownIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm sm:text-base leading-6 font-medium text-[#15191e] opacity-0">
              Tìm kiếm
            </label>
            <Button 
              className="h-12 px-6 bg-gradient-to-r from-[#00dba1] to-[#009e74] hover:from-[#009e74] hover:to-[#00dba1] rounded-[42px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white font-medium" 
              variant="ghost"
            >
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
