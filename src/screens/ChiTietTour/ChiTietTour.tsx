import React from "react";
import { ImageGallerySection } from "./section/ImageGallerySection";
import { MainContentSection } from "./section/MainContentSection/MainContentSection";
import { TourDetailsSection } from "./section/TourDetailSection/TourDetailSection";

const ChiTietTour = () => {
  return (
    <div className="flex flex-col">
      {/* Hero section with enhanced styling */}
      <div className="relative bg-gradient-to-br from-blue-600/5 via-green-600/5 to-yellow-600/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallerySection />
        </div>
      </div>

      {/* Main content section with enhanced styling */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainContentSection />
        </div>
      </div>

      {/* Testimonials section with enhanced styling */}
      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TourDetailsSection />
        </div>
      </div>

      {/* Additional features section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              VNGROUP TOURIST cam kết mang đến những trải nghiệm du lịch tuyệt vời nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chất lượng đảm bảo</h3>
              <p className="text-gray-600 leading-relaxed">
                Chúng tôi cam kết cung cấp dịch vụ chất lượng cao với giá cả hợp lý nhất cho mọi khách hàng.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hỗ trợ 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ hỗ trợ khách hàng chuyên nghiệp, sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trải nghiệm độc đáo</h3>
              <p className="text-gray-600 leading-relaxed">
                Khám phá những điểm đến độc đáo, trải nghiệm văn hóa địa phương và tạo kỷ niệm đáng nhớ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietTour;
