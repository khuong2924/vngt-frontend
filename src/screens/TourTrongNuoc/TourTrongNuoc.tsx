import React from "react";
import { HeaderSubsection } from "../Home/sections/HeaderSubsection";
import { FooterSubsection } from "../Home/sections/FooterSubsection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const TourTrongNuoc = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header section - Full width, same as Home */}
      <HeaderSubsection />

      {/* Main content container with fixed width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section with enhanced styling */}
        <div className="w-full relative mb-16">
          <div className="w-full h-[500px] relative bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Tour Trong Nước
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Khám phá vẻ đẹp Việt Nam với những hành trình đặc biệt được thiết kế riêng cho bạn
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Khám phá ngay
                  </button>
                  <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    Xem video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation section with enhanced styling */}
        <div className="mb-16">
          <NavigationSection />
        </div>

        {/* Hero section with breadcrumb */}
        <div className="mb-16">
          <HeroSection />
        </div>

        {/* Content section with enhanced spacing */}
        <div className="mb-20">
          <ContentSection />
        </div>

        {/* Call to action section with enhanced styling */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-3xl"></div>
            <div className="relative z-10">
              <CallToActionSection />
            </div>
          </div>
        </div>

        {/* Additional features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Điểm đến đa dạng</h3>
            <p className="text-gray-600 leading-relaxed">
              Từ miền Bắc đến miền Nam, từ biển đảo đến núi rừng, chúng tôi có đầy đủ các tour du lịch trong nước phù hợp với mọi sở thích.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Linh hoạt thời gian</h3>
            <p className="text-gray-600 leading-relaxed">
              Tour từ 1 ngày đến 2 tuần, phù hợp với lịch trình của bạn. Hỗ trợ đặt tour theo yêu cầu riêng.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Trải nghiệm độc đáo</h3>
            <p className="text-gray-600 leading-relaxed">
              Khám phá văn hóa địa phương, thưởng thức ẩm thực đặc sắc và tạo ra những kỷ niệm đáng nhớ.
            </p>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hàng nghìn khách hàng đã tin tưởng và lựa chọn VNGROUP TOURIST cho hành trình khám phá Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Thị Anh",
                location: "Hà Nội",
                content: "Tour Sapa 3 ngày 2 đêm thật tuyệt vời! Hướng dẫn viên nhiệt tình, khách sạn sạch sẽ, đồ ăn ngon.",
                rating: 5
              },
              {
                name: "Trần Văn Bình",
                location: "TP.HCM",
                content: "Lần đầu đi tour miền Tây, cảm giác rất thú vị. Được trải nghiệm cuộc sống sông nước thật sự.",
                rating: 5
              },
              {
                name: "Lê Thị Cẩm",
                location: "Đà Nẵng",
                content: "Tour Phú Quốc đúng như mong đợi. Biển đẹp, resort sang trọng, dịch vụ chuyên nghiệp.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer section - Full width, same as Home */}
      <FooterSubsection />
    </div>
  );
};
