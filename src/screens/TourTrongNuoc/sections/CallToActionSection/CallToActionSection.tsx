import {
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    MailSearchIcon,
    SearchIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import {
    Select,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select";
  import { Separator } from "../../../../components/ui/separator";
  
  export const CallToActionSection = (): JSX.Element => {
    // Location filter data
    const locations = [
      { name: "Đà Lạt", selected: true },
      { name: "Tây Nguyên", selected: false },
      { name: "Nha trang", selected: false },
      { name: "Vũng Tàu", selected: false },
      { name: "Măng Đen", selected: false },
      { name: "Tây Ninh", selected: false },
    ];
  
    return (
      <Card className="w-full mx-auto p-10 shadow-[0px_16px_32px_#07132c1a] rounded-3xl">
        <CardContent className="flex flex-col items-start justify-center gap-5 p-0">
          <div className="inline-flex items-center gap-2.5 w-full">
            <div className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base">
              Gợi ý một số Tour nổi bật
            </div>
  
            <div className="inline-flex items-center gap-2 flex-wrap">
              {locations.map((location, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`inline-flex items-center justify-center gap-2 p-2 rounded-[200px] ${
                    location.selected
                      ? "bg-sup text-white"
                      : "bg-[#f9f9f9] text-[#65758b]"
                  }`}
                >
                  <CheckIcon className="w-6 h-6" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-base">
                    {location.name}
                  </span>
                </Button>
              ))}
            </div>
          </div>
  
          <Separator className="w-full" />
  
          <div className="flex items-end gap-3 w-full">
            <div className="flex flex-col items-start gap-2 flex-1">
              <label className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6">
                Loại tour
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-[200px] border border-solid border-[#d8dce3]">
                  <SelectValue
                    placeholder="Tour bay"
                    className="text-[#65758b] [font-family:'Manrope',Helvetica] font-normal text-base"
                  />
                  <ChevronDownIcon className="w-4 h-4" />
                </SelectTrigger>
              </Select>
            </div>
  
            <div className="flex flex-col items-start gap-2 flex-1">
              <label className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6">
                Khởi hành từ
              </label>
              <div className="flex h-12 items-center justify-between p-3 w-full bg-white rounded-[200px] border border-solid border-[#00dba1]">
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6">
                  Việt Nam
                </span>
                <MailSearchIcon className="w-6 h-6" />
              </div>
            </div>
  
            <div className="flex flex-col items-start gap-2 flex-1">
              <label className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6">
                Thời gian
              </label>
              <div className="flex h-12 items-center justify-between p-3 w-full bg-white rounded-[200px] border border-solid border-[#d8dce3]">
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#65758b] text-base leading-6">
                  Chọn thời gian
                </span>
                <CalendarIcon className="w-6 h-6" />
              </div>
            </div>
  
            <div className="flex flex-col items-start gap-2 flex-1">
              <label className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6">
                Số lương khách
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-[200px] border border-solid border-[#d8dce3]">
                  <SelectValue
                    placeholder="Chọn số lương khách"
                    className="text-[#65758b] [font-family:'Manrope',Helvetica] font-normal text-base"
                  />
                  <ChevronDownIcon className="w-4 h-4" />
                </SelectTrigger>
              </Select>
            </div>
  
            <Button
              variant="ghost"
              className="inline-flex items-center p-4 bg-[#00dba11a] rounded-[42px]"
            >
              <SearchIcon className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };
  