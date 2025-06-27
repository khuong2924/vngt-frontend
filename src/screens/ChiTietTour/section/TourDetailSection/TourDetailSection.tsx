import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const TourDetailsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Diam tincidunt eu magna vitae dolor interdum mattis vestibulum auctor. Turpis tempor elementum ultrices ut id cum odio. Varius ipsum ac viverra et.",
      name: "Hà Tuấn",
      position: "UI/UX Designer",
      isActive: false,
      opacity: "opacity-50",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Diam tincidunt eu magna vitae dolor interdum mattis vestibulum auctor. Turpis tempor elementum ultrices ut id cum odio. Varius ipsum ac viverra et.",
      name: "Hà Tuấn",
      position: "UI/UX Designer",
      isActive: false,
      opacity: "",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Diam tincidunt eu magna vitae dolor interdum mattis vestibulum auctor. Turpis tempor elementum ultrices ut id cum odio. Varius ipsum ac viverra et.",
      name: "Hà Tuấn",
      position: "UI/UX Designer",
      isActive: true,
      opacity: "",
      shadow: "shadow-[0px_4px_24px_#0e21291a]",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Diam tincidunt eu magna vitae dolor interdum mattis vestibulum auctor. Turpis tempor elementum ultrices ut id cum odio. Varius ipsum ac viverra et.",
      name: "Hà Tuấn",
      position: "UI/UX Designer",
      isActive: false,
      opacity: "",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Diam tincidunt eu magna vitae dolor interdum mattis vestibulum auctor. Turpis tempor elementum ultrices ut id cum odio. Varius ipsum ac viverra et.",
      name: "Hà Tuấn",
      position: "UI/UX Designer",
      isActive: false,
      opacity: "opacity-50",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1216px] items-start gap-10 mx-auto">
      <h2 className="font-normal text-[#15191e] text-[40px] leading-[48px] font-['Manrope',Helvetica]">
        Khách Hàng Nói Gì Về Chúng Tôi?
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="flex items-center justify-center h-[420px]">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="flex-none">
              <Card
                className={`w-[390px] rounded-3xl overflow-hidden bg-white ${testimonial.opacity} ${testimonial.shadow || ""}`}
              >
                <CardContent className="flex flex-col items-start gap-[100px] p-6">
                  <div className="flex flex-col h-56 items-start justify-end gap-5 w-full">
                    <img
                      className="w-7 h-6"
                      alt="Quote"
                      src="https://c.animaapp.com/mc8humq02LtpLJ/img/-.svg"
                    />
                    <p className="text-[#15191e] text-xl leading-[30px] font-['Manrope',Helvetica] font-normal">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src="https://c.animaapp.com/mc8humq02LtpLJ/img/ellipse-7.svg"
                        alt="User avatar"
                      />
                      <AvatarFallback>HT</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <h3 className="font-semibold text-[#15191e] text-base leading-6 font-['Manrope',Helvetica]">
                        {testimonial.name}
                      </h3>
                      <p className="font-normal text-[#65758b] text-sm leading-5 font-['Manrope',Helvetica]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
