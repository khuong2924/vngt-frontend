import {
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    MapPinIcon,
  } from "lucide-react";
  import React from "react";
  import { Badge } from "../../../../components/ui/badge";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import {
    Select,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select";
  import { Separator } from "../../../../components/ui/separator";
  
  export const ContentSection = (): JSX.Element => {
    // Tour data for mapping
    const tourData = [
      {
        id: 1,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: true,
        isDiscounted: false,
        buttonVariant: "default",
      },
      {
        id: 2,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-1.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 3,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-3.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline",
      },
      {
        id: 4,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-3.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline",
      },
      {
        id: 5,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-4.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 6,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-5.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 7,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-7.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 8,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-7.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 9,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-8.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 10,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-9.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
      {
        id: 11,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-11.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline",
      },
      {
        id: 12,
        image: "https://c.animaapp.com/mc36n1re0wWczD/img/image-11.png",
        title:
          "Du lịch Phú Quốc Hè - Grand World - Vinwonders - Safari từ Sài Gòn 2025",
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere arcu. Mauris dui vulputate nulla scelerisque...",
        destination: "Việt Nam",
        departureDate: "22/08/2000",
        price: "2.750.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline",
      },
    ];
  
    // Filter options
    const filterOptions = [
      { id: 1, label: "Tour trong nước", isActive: true },
      { id: 2, label: "Điểm khởi hành", isActive: false },
      { id: 3, label: "Điểm đến", isActive: false },
      { id: 4, label: "Số ngày", isActive: false },
    ];
  
    // Pagination data
    const paginationItems = [
      { page: 1, isActive: true },
      { page: 2, isActive: false },
      { page: 3, isActive: false },
      { page: 4, isActive: false },
      { page: "...", isActive: false },
      { page: 22, isActive: false },
    ];
  
    return (
      <section className="flex flex-col w-full max-w-[1216px] mx-auto items-center justify-center gap-10 py-10">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex items-end justify-between w-full">
            <h1 className="font-normal text-[#15191e] text-[40px] leading-[48px] [font-family:'Manrope',Helvetica] tracking-[0]">
              Tour Trong Nước
            </h1>
  
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <div className="relative w-4 h-4 bg-sup rounded overflow-hidden">
                    <CheckIcon className="absolute w-3 h-3 top-0.5 left-0.5 text-white" />
                  </div>
                </div>
  
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base tracking-[0] leading-[19.2px]">
                  Hiển thị sản phẩm giảm giá
                </span>
              </div>
  
              <div className="flex items-center gap-3">
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base tracking-[0] leading-[19.2px]">
                  Sắp xếp theo:
                </span>
  
                <Select>
                  <SelectTrigger className="bg-white rounded-[200px] border-none">
                    <SelectValue
                      placeholder="Giá thấp - cao"
                      className="[font-family:'Manrope',Helvetica] font-semibold text-[#15191e] text-base tracking-[0] leading-4"
                    />
                    <ChevronDownIcon className="h-4 w-4" />
                  </SelectTrigger>
                </Select>
              </div>
            </div>
          </div>
  
          <div className="flex-col items-start gap-5 flex w-full">
            <div className="flex items-center gap-3 w-full">
              {filterOptions.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  className={`h-12 p-3 flex-1 justify-between rounded-[200px] ${
                    option.isActive
                      ? "border-main text-main font-semibold"
                      : "border-[#d8dce3] text-[#65758b] font-normal"
                  }`}
                >
                  {option.label}
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              ))}
  
              <Button className="px-8 py-4 bg-main text-white rounded-[42px]">
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="grid grid-cols-4 gap-6 w-full">
            {tourData.slice(0, 4).map((tour) => (
              <Card
                key={tour.id}
                className="flex flex-col w-full items-start gap-3 border-none relative"
              >
                <div className="relative w-full">
                  <img
                    className="w-full h-[214.5px] object-cover"
                    alt={tour.title}
                    src={tour.image}
                  />
                  {tour.isDiscounted && (
                    <Badge className="absolute top-2.5 left-2.5 bg-sup text-white p-2 rounded-lg">
                      Giảm giá
                    </Badge>
                  )}
                </div>
  
                <CardContent className="p-0 flex flex-col gap-3 w-full">
                  <h3
                    className={`font-bold ${tour.isHighlighted ? "text-main" : "text-[#15191e]"} text-base leading-normal [font-family:'Manrope',Helvetica]`}
                  >
                    {tour.title}
                  </h3>
  
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.description}
                  </p>
  
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <MapPinIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Điểm đến
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.destination}
                      </span>
                    </div>
  
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Khởi hành
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.departureDate}
                      </span>
                    </div>
                  </div>
  
                  <Separator className="my-1" />
  
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-start">
                      <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm leading-normal">
                        Giá chỉ từ
                      </span>
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-sup text-xl leading-normal">
                        {tour.price}
                      </span>
                    </div>
  
                    <Button
                      variant={
                        tour.buttonVariant === "default" ? "default" : "outline"
                      }
                      className={`px-8 py-4 rounded-[42px] ${
                        tour.buttonVariant === "default"
                          ? "bg-main text-white"
                          : "bg-[#00dba11a] text-main border-none"
                      }`}
                    >
                      Chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          <div className="grid grid-cols-4 gap-6 w-full">
            {tourData.slice(4, 8).map((tour) => (
              <Card
                key={tour.id}
                className="flex flex-col w-full items-start gap-3 border-none relative"
              >
                <div className="relative w-full">
                  <img
                    className="w-full h-[214.5px] object-cover"
                    alt={tour.title}
                    src={tour.image}
                  />
                  {tour.isDiscounted && (
                    <Badge className="absolute top-2.5 left-2.5 bg-sup text-white p-2 rounded-lg">
                      Giảm giá
                    </Badge>
                  )}
                </div>
  
                <CardContent className="p-0 flex flex-col gap-3 w-full">
                  <h3
                    className={`font-bold ${tour.isHighlighted ? "text-main" : "text-[#15191e]"} text-base leading-normal [font-family:'Manrope',Helvetica]`}
                  >
                    {tour.title}
                  </h3>
  
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.description}
                  </p>
  
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <MapPinIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Điểm đến
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.destination}
                      </span>
                    </div>
  
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Khởi hành
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.departureDate}
                      </span>
                    </div>
                  </div>
  
                  <Separator className="my-1" />
  
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-start">
                      <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm leading-normal">
                        Giá chỉ từ
                      </span>
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-sup text-xl leading-normal">
                        {tour.price}
                      </span>
                    </div>
  
                    <Button
                      variant={
                        tour.buttonVariant === "default" ? "default" : "outline"
                      }
                      className={`px-8 py-4 rounded-[42px] ${
                        tour.buttonVariant === "default"
                          ? "bg-main text-white"
                          : "bg-[#00dba11a] text-main border-none"
                      }`}
                    >
                      Chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          <div className="grid grid-cols-4 gap-6 w-full">
            {tourData.slice(8, 12).map((tour) => (
              <Card
                key={tour.id}
                className="flex flex-col w-full items-start gap-3 border-none relative"
              >
                <div className="relative w-full">
                  <img
                    className="w-full h-[214.5px] object-cover"
                    alt={tour.title}
                    src={tour.image}
                  />
                  {tour.isDiscounted && (
                    <Badge className="absolute top-2.5 left-2.5 bg-sup text-white p-2 rounded-lg">
                      Giảm giá
                    </Badge>
                  )}
                </div>
  
                <CardContent className="p-0 flex flex-col gap-3 w-full">
                  <h3
                    className={`font-bold ${tour.isHighlighted ? "text-main" : "text-[#15191e]"} text-base leading-normal [font-family:'Manrope',Helvetica]`}
                  >
                    {tour.title}
                  </h3>
  
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                    {tour.description}
                  </p>
  
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <MapPinIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Điểm đến
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.destination}
                      </span>
                    </div>
  
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1 w-[153px]">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                          Khởi hành
                        </span>
                      </div>
                      <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                        {tour.departureDate}
                      </span>
                    </div>
                  </div>
  
                  <Separator className="my-1" />
  
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-start">
                      <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm leading-normal">
                        Giá chỉ từ
                      </span>
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-sup text-xl leading-normal">
                        {tour.price}
                      </span>
                    </div>
  
                    <Button
                      variant={
                        tour.buttonVariant === "default" ? "default" : "outline"
                      }
                      className={`px-8 py-4 rounded-[42px] ${
                        tour.buttonVariant === "default"
                          ? "bg-main text-white"
                          : "bg-[#00dba11a] text-main border-none"
                      }`}
                    >
                      Chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  
        <div className="flex items-center gap-1.5">
          {paginationItems.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-11 h-11 rounded-[42px] ${
                item.isActive
                  ? "bg-sup text-white border-white"
                  : "bg-white text-[#65758b] border-[#d8dce3]"
              }`}
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-center text-base leading-6">
                {item.page}
              </span>
            </Button>
          ))}
        </div>
      </section>
    );
  };
  