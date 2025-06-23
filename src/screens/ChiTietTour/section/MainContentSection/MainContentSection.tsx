import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Tour itinerary data
const itineraryData = [
  {
    day: "01",
    title: "Sài Gòn - Phú Quốc",
    description: [
      "09h20: Quý khách đến với trung tâm điều hành của công ty ở bản cây Sung. Tại trung tâm điều hành du khách được trang bị đèn Pin, giày, dép và găng tay chuyên dụng và các thiết bị cần thiết để phục vụ thám hiểm hang động. Du khách được nghe hướng dẫn của hướng dẫn viên về sử dụng thiết bị cũng như một số quy tắc khám phá hang động. Sau đó đoàn trải nghiệm nét độc đáo của Hang Nước một hang nhỏ nhưng có nhiều dấu ấn trong chiến tranh Việt Nam.",
      "Đoàn sẽ đến bia Di tích lịch sử tổng trạm thông tin A72 , nơi được giao nhiệm vụ đảm bảo thông tin liên lạc cho chiến trường Miền Nam với nhiều mệnh lệnh quan trọng được truyền trong hang đá này. Sau đó, quý khách đến với hành trình khám phá hang Chà Lòi. Tại đây du khách sẻ trải nghiệm nhiều hoạt động và cung bậc cảm xúc khác nhau như  đi bộ, bò, leo trèo, bơi lội trải nghiệm với hành trình hơn 4km đi trong hang. Du khách cũng đến với sân khấu dã chiến của bộ đội trong chiến tranh Việt Nam.",
    ],
  },
  {
    day: "02",
    title: "Sài Gòn - Phú Quốc",
    description: [
      "09h20: Quý khách đến với trung tâm điều hành của công ty ở bản cây Sung. Tại trung tâm điều hành du khách được trang bị đèn Pin, giày, dép và găng tay chuyên dụng và các thiết bị cần thiết để phục vụ thám hiểm hang động. Du khách được nghe hướng dẫn của hướng dẫn viên về sử dụng thiết bị cũng như một số quy tắc khám phá hang động. Sau đó đoàn trải nghiệm nét độc đáo của Hang Nước một hang nhỏ nhưng có nhiều dấu ấn trong chiến tranh Việt Nam.",
      "Đoàn sẽ đến bia Di tích lịch sử tổng trạm thông tin A72 , nơi được giao nhiệm vụ đảm bảo thông tin liên lạc cho chiến trường Miền Nam với nhiều mệnh lệnh quan trọng được truyền trong hang đá này. Sau đó, quý khách đến với hành trình khám phá hang Chà Lòi. Tại đây du khách sẻ trải nghiệm nhiều hoạt động và cung bậc cảm xúc khác nhau như  đi bộ, bò, leo trèo, bơi lội trải nghiệm với hành trình hơn 4km đi trong hang. Du khách cũng đến với sân khấu dã chiến của bộ đội trong chiến tranh Việt Nam.",
    ],
  },
  {
    day: "03",
    title: "Sài Gòn - Phú Quốc",
    description: [
      "09h20: Quý khách đến với trung tâm điều hành của công ty ở bản cây Sung. Tại trung tâm điều hành du khách được trang bị đèn Pin, giày, dép và găng tay chuyên dụng và các thiết bị cần thiết để phục vụ thám hiểm hang động. Du khách được nghe hướng dẫn của hướng dẫn viên về sử dụng thiết bị cũng như một số quy tắc khám phá hang động. Sau đó đoàn trải nghiệm nét độc đáo của Hang Nước một hang nhỏ nhưng có nhiều dấu ấn trong chiến tranh Việt Nam.",
      "Trong hành trình khám phá này du khách sẽ được chụp nhiều bức hình khám phá đẹp trong hang. Ngoài chiêm ngưỡng hệ thống thạch nhũ tráng lệ cũng như trải nghiệm khám phá mạo hiểm, du khách sẽ đến với con đường hầm tình yêu tuyệt đẹp.",
    ],
  },
];

// Featured activities data
const featuredActivities = [
  {
    image: "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464098.svg",
    title: "House rules",
  },
  {
    image: "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464098-1.svg",
    title: "House rules",
  },
  {
    image: "https://c.animaapp.com/mc8humq02LtpLJ/img/rectangle-3464098-2.svg",
    title: "House rules",
  },
];

// Tour details data
const tourDetails = [
  {
    label: "Điểm khởi hành",
    value: "TP. Hồ Chí Minh",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/group-2.png",
  },
  {
    label: "Ngày khởi hành",
    value: "22/08/2025",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/fi-1827331.svg",
  },
  {
    label: "Thời gian",
    value: "3 ngày 3 đêm",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/vector-14.svg",
  },
  {
    label: "Lưu trú tại",
    value: "Khách sạn 4 sao",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/fi-1946788.svg",
  },
  {
    label: "Mã tour",
    value: "1231245123123",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/group-7.png",
  },
  {
    label: "Số chỗ còn lại",
    value: "22 chỗ còn lại",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/vector-24.svg",
  },
  {
    label: "Phương tiện",
    value: "Xe khách",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/vector-52.svg",
  },
  {
    label: "Loại tour",
    value: "Tour khách đoàn",
    icon: "https://c.animaapp.com/mc8humq02LtpLJ/img/fi-16785869.svg",
    highlight: true,
  },
];

// Tour features
const tourFeatures = [
  "Lorem ipsum dolor sit amet consectetur. Vitae mauris sagittis felis id nec",
  "Lorem ipsum dolor sit amet consectetur. Vitae mauris sagittis felis id nec",
  "Lorem ipsum dolor sit amet consectetur. Vitae mauris sagittis felis id nec",
];

// Terms and regulations data
const termsAndRegulations = [
  {
    title: "House rules",
    content:
      "Check-in after 3:00 PM\nCheck-out before 12:00 PM\nMaximum of 14 guests",
  },
  {
    title: "Safety & accommodation",
    content:
      "Guests are responsible for locking doors and securing their valuables.\nHotels often provide safes in rooms for storing valuables.",
  },
  {
    title: "Cancellation Policy",
    content:
      "Cancellation policies vary, with some hotels offering free cancellation up to 24-48 hours before check-in, while others may charge a fee for cancellations or no-shows.",
  },
  {
    title: "Pet Policy",
    content:
      "Some hotels allow pets with an additional fee and require prior notification.\nHotels that do not allow pets may have strict enforcement of this rule.",
  },
  {
    title: "Room Use",
    content:
      "Rooms are generally for the use of registered guests only.\nDisturbing the room's furniture, fixtures, or equipment may result in additional charges.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex gap-10 px-[148px] py-[100px] bg-white rounded-[60px_60px_0px_0px] shadow-[0px_-16px_32px_#0000001a]">
      {/* Main content column */}
      <div className="flex flex-col w-[763px] gap-10">
        {/* Tour Overview Section */}
        <div className="flex flex-col gap-10">
          <h2 className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-[40px] leading-[48px]">
            Tổng Quan Về Tour
          </h2>
          <p className="text-[#15191e] text-xl leading-[30px] [font-family:'Manrope',Helvetica] font-normal">
            Lorem ipsum dolor sit amet consectetur. Velit accumsan sit posuere
            arcu. Mauris dui vulputate nulla scelerisque eros quam nibh odio
            velit. Interdum netus diam facilisis sapien amet amet in ipsum.
            Morbi facilisis viverra in sit et diam aliquet platea.
          </p>
          <img
            className="w-full h-[350px] object-cover"
            alt="Tour overview image"
            src="https://c.animaapp.com/mc8humq02LtpLJ/img/image-6.png"
          />
        </div>

        <Separator className="w-full" />

        {/* Itinerary Section */}
        <div className="flex flex-col gap-10">
          <h2 className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-[40px] leading-[48px]">
            Lịch Trình
          </h2>

          <div className="flex flex-col gap-10">
            {itineraryData.map((item, index) => (
              <div key={`day-${index}`} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex w-10 h-10 items-center p-[9.23px] bg-color-4 rounded-[769.23px]">
                    <div className="flex items-center p-[3.08px] bg-white rounded-[43.85px]">
                      <img
                        className="w-[15.38px] h-[15.38px]"
                        alt="Day icon"
                        src="https://c.animaapp.com/mc8humq02LtpLJ/img/fi-1789298.svg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[#65758b] text-sm leading-[0.1px]">
                      ngày {item.day}
                    </span>
                    <span className="font-semibold text-[#15191e] text-xl leading-5">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-start pl-14 relative">
                  <div className="flex flex-col gap-4">
                    {item.description.map((paragraph, pIndex) => (
                      <p
                        key={`paragraph-${index}-${pIndex}`}
                        className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base leading-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <img
                    className="absolute w-px h-full top-[-21px] left-5"
                    alt="Timeline"
                    src={`https://c.animaapp.com/mc8humq02LtpLJ/img/vector-3${index === 2 ? "-1" : index === 0 ? "-2" : ""}.svg`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="w-full" />

        {/* Featured Activities Section */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <h2 className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-[40px] leading-[48px]">
              Hoạt Động Nổi Bật
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="p-3.5 bg-[#f9f9f9] rounded-[200px] rotate-180"
              >
                <ArrowRightIcon className="w-5 h-5 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="p-3.5 bg-[#f9f9f9] rounded-[200px]"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {featuredActivities.map((activity, index) => (
              <div
                key={`activity-${index}`}
                className={`flex flex-col items-start gap-4 ${index === 2 ? "mr-[-143px]" : ""}`}
              >
                <img
                  className={`${index === 2 ? "w-[143px]" : "w-[286px]"} h-[286px] object-cover`}
                  alt={activity.title}
                  src={activity.image}
                />
                <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#15191e] text-base leading-4">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <Separator className="w-full" />

        {/* Terms & Regulations Section */}
        <div className="flex flex-col gap-10">
          <h2 className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-[40px] leading-[48px]">
            Điều Khoản &amp; Quy Định
          </h2>

          <Card className="p-5 bg-[#f1fffb] rounded-2xl border-none">
            <CardContent className="p-0 flex flex-col gap-4">
              {termsAndRegulations.map((term, index) => (
                <div key={`term-${index}`} className="flex flex-col gap-3">
                  <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#15191e] text-xl leading-5">
                    {term.title}
                  </h3>
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-graygray-07 text-base leading-6 whitespace-pre-line">
                    {term.content}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sidebar column */}
      <div className="flex flex-col w-[413px] gap-6">
        {/* Navigation Tabs */}
        <Tabs defaultValue="program" className="w-full">
          <TabsList className="flex flex-wrap gap-[16px] bg-transparent h-auto p-0">
            <TabsTrigger
              value="program"
              className="flex w-[198px] px-8 py-4 bg-[#e6fff9] rounded-[42px] text-[#00dba1] font-bold text-base data-[state=active]:bg-[#e6fff9] data-[state=active]:text-[#00dba1]"
            >
              Chương trình
            </TabsTrigger>
            <TabsTrigger
              value="price"
              className="flex w-[200px] px-4 py-4 rounded-[42px] border border-solid border-[#d8dce3] text-[#15191e] font-normal text-base data-[state=active]:bg-[#e6fff9] data-[state=active]:text-[#00dba1]"
            >
              Bảng giá
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="flex w-[200px] px-4 py-4 rounded-[42px] border border-solid border-[#d8dce3] text-[#15191e] font-normal text-base data-[state=active]:bg-[#e6fff9] data-[state=active]:text-[#00dba1]"
            >
              Lịch khởi hành
            </TabsTrigger>
            <TabsTrigger
              value="notes"
              className="flex w-[200px] px-4 py-4 rounded-[42px] border border-solid border-[#d8dce3] text-[#15191e] font-normal text-base data-[state=active]:bg-[#e6fff9] data-[state=active]:text-[#00dba1]"
            >
              Ghi chú
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Tour Details Card */}
        <Card className="flex flex-col gap-6 p-4 border border-solid border-[#00dba1] rounded-2xl">
          <CardContent className="p-0 flex flex-col gap-4">
            {tourDetails.map((detail, index) => (
              <div
                key={`detail-${index}`}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6">
                    <img
                      className="w-6 h-6"
                      alt={detail.label}
                      src={detail.icon}
                    />
                  </div>
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#65758b] text-base leading-4">
                    {detail.label}
                  </span>
                </div>
                <span
                  className={`[font-family:'Manrope',Helvetica] font-normal text-base leading-4 ${detail.highlight ? "text-[#00dba1]" : "text-[#15191e]"}`}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </CardContent>

          {/* Tour Features */}
          <Card className="flex flex-col gap-4 p-4 bg-[#e6fff9] rounded-lg border-none">
            <CardContent className="p-0 flex flex-col gap-4">
              {tourFeatures.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircleIcon className="w-4 h-4 text-[#00dba1]" />
                  <p className="flex-1 text-[#15191e] text-sm leading-[21px] [font-family:'Manrope',Helvetica] font-normal">
                    {feature}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Price and Booking */}
          <div className="flex flex-col gap-5">
            <Separator className="w-full" />
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="[font-family:'Roboto',Helvetica] font-normal text-[#65758b] text-sm">
                  Giá chỉ từ
                </span>
                <span className="[font-family:'Manrope',Helvetica] font-semibold text-sup text-xl">
                  2.750.000 ₫
                </span>
              </div>
              <Button className="px-8 py-4 bg-[#00dba1] text-white rounded-[42px] font-medium">
                Đặt lịch ngay
              </Button>
            </div>
          </div>
        </Card>

        {/* Company Info Card */}
        <Card className="flex flex-col gap-4 p-4 bg-neutral-50 rounded-2xl border-none h-[207px] relative">
          <CardContent className="p-0 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <img
                className="w-[101px] h-5 object-cover"
                alt="Logo"
                src="https://c.animaapp.com/mc8humq02LtpLJ/img/logo-ngang1-01-1-1.png"
              />
              <p className="w-[200px] [font-family:'Manrope',Helvetica] font-semibold text-[#15191e] text-base leading-[20.8px]">
                Chúng tôi tạo ra những trải nghiệm du lịch đẳng cấp, đáng nhớ
              </p>
            </div>

            <Separator className="w-full" />

            <div className="flex gap-3 h-12">
              <Button className="flex-1 gap-2 p-3 bg-sup text-white rounded-[42px] font-medium">
                <img
                  className="w-6 h-6"
                  alt="Contact icon"
                  src="https://c.animaapp.com/mc8humq02LtpLJ/img/fi-724664.svg"
                />
                Liên hệ tư vấn
              </Button>
              <Button
                variant="outline"
                className="flex-1 px-8 py-4 bg-graygray-01 border border-solid border-[#00dba1] text-[#00dba1] rounded-[42px] font-medium"
              >
                In-lưu tour
              </Button>
            </div>
          </CardContent>
          <img
            className="absolute w-[130px] h-[111px] top-4 right-4"
            alt="Company image"
            src="https://c.animaapp.com/mc8humq02LtpLJ/img/image-6-1.png"
          />
        </Card>
      </div>
    </section>
  );
};
