import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const Frame4Subsection = (): JSX.Element => {
  // Data for filter tabs
  const filterTabs = [
    { id: "famous-landmarks", label: "Địa danh nổi tiếng", active: true },
    { id: "tour-types", label: "Loại hình tour", active: false },
    { id: "seasonal", label: "Theo mùa", active: false },
    { id: "featured", label: "Nổi bật", active: false },
    { id: "bestsellers", label: "Bán chạy nhất", active: false },
  ];

  // Data for location columns
  const locationColumns = [
    [
      "Moskva",
      "Sankt-Peterburg",
      "Novosibirsk",
      "Yekaterinburg",
      "Nizhny Novgorod",
      "Kazan",
      "Samara",
      "Baikal",
    ],
    [
      "Núi Elbrus",
      "Kamchatka",
      "Altai",
      "Vladivostok",
      "Kremlin",
      "Hermitage",
      "Krasnaya Ploshchad",
      "Istanbul",
    ],
    [
      "Belarus",
      "Ukraine",
      "Kazakhstan",
      "Georgia",
      "Armenia",
      "Barcelona",
      "Rio de Janeiro",
      "Istanbul",
    ],
    [
      "Vladimir",
      "Ivanovo",
      "Tula",
      "Ryazan",
      "Pskov",
      "Novgorod",
      "Murmansk",
      "Petrozavodsk",
    ],
    [
      "Arkhangelsk",
      "Chelyabinsk",
      "Perm",
      "Magnitogorsk",
      "Ufa",
      "Tyumen",
      "Krasnoyarsk",
      "Omsk",
    ],
  ];

  return (
    <Card className="flex flex-col w-full items-start gap-8 p-20 bg-neutral-50 rounded-3xl">
      <Tabs defaultValue="famous-landmarks" className="w-full">
        <TabsList className="flex gap-2 bg-transparent p-0 h-auto">
          {filterTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-10 px-4 py-0 rounded-lg ${
                tab.active
                  ? "bg-sup text-white font-semibold"
                  : "bg-white text-[#15191e] font-normal"
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <CardContent className="p-0 w-full">
        <div className="items-center gap-[98px] self-stretch w-full flex relative">
          {locationColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col items-start gap-3 ${
                columnIndex === 0
                  ? "w-[157px]"
                  : columnIndex === 1
                    ? "w-[148px]"
                    : columnIndex === 2
                      ? "w-[106px]"
                      : columnIndex === 3
                        ? "w-[119px]"
                        : "w-[200px]"
              }`}
            >
              {column.map((location, locationIndex) => (
                <div
                  key={locationIndex}
                  className="text-base leading-4 relative self-stretch font-normal text-[#15191e] tracking-[0]"
                >
                  {location}
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-5 pb-0 px-0 relative self-stretch w-full border-t border-[#cde1d7] p-0">
        <div className="gap-4 inline-flex items-center relative">
          <div className="relative w-20 h-20 overflow-hidden">
            <div className="h-[79px]">
              <div className="relative w-20 h-[79px]">
                <div className="absolute w-[55px] h-[63px] top-4 left-[13px]">
                  <div className="h-[63px]">
                    <div className="relative w-[55px] h-[63px]">
                      <div className="absolute w-[55px] h-[63px] top-0 left-0">
                        <div className="relative h-[63px]">
                          <img
                            className="absolute w-[55px] h-[42px] top-[21px] left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-93.svg"
                          />
                          <img
                            className="absolute w-[15px] h-[7px] top-[35px] left-5"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-73.svg"
                          />
                          <img
                            className="absolute w-[9px] h-1.5 top-[34px] left-[23px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-72.svg"
                          />
                          <img
                            className="absolute w-1.5 h-1.5 top-[34px] left-[25px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-75.svg"
                          />
                          <img
                            className="absolute w-[11px] h-[22px] top-[13px] left-[27px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-74.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[564px] font-normal text-2xl tracking-[0] leading-[31.2px] text-x-5">
            Chúng tôi tạo ra những trải nghiệm <br />
            du lịch đẳng cấp, đáng nhớ
          </div>
        </div>

        <Button className="gap-[13px] px-8 py-4 bg-main rounded-[42px] text-white font-medium text-base">
          Book a tour &amp; Nhận báo giá
        </Button>
      </CardFooter>
    </Card>
  );
};
