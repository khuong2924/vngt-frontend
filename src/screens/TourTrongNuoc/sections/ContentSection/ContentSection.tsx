import {
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    MapPinIcon,
    SearchIcon,
    FilterIcon,
  } from "lucide-react";
  import React, { useState } from "react";
  import { Badge } from "../../../../components/ui/badge";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import { TourCard, TourData } from "../../../../components/tour";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "../../../../components/ui/select";
  import { Separator } from "../../../../components/ui/separator";
  
  export const ContentSection = (): JSX.Element => {
    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
    const [sortBy, setSortBy] = useState("price-low");
  
    // Enhanced tour data with more details
    const tourData: TourData[] = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Du lịch Sapa 3 ngày 2 đêm - Khám phá núi rừng Tây Bắc",
        description: "Trải nghiệm văn hóa dân tộc, trekking núi Fansipan, thưởng thức ẩm thực địa phương độc đáo.",
        destination: "Sapa, Lào Cai",
        departureDate: "15/12/2024",
        price: "2.750.000 ₫",
        originalPrice: "3.200.000 ₫",
        isHighlighted: true,
        isDiscounted: true,
        buttonVariant: "default" as const,
        rating: 4.8,
        duration: "3 ngày 2 đêm",
        groupSize: "8-15 người",
        features: ["Khách sạn 4*", "Ăn sáng", "Hướng dẫn viên"]
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Tour Phú Quốc 4 ngày 3 đêm - Đảo ngọc Việt Nam",
        description: "Thư giãn tại resort cao cấp, khám phá đảo ngọc với biển xanh cát trắng tuyệt đẹp.",
        destination: "Phú Quốc, Kiên Giang",
        departureDate: "20/12/2024",
        price: "4.500.000 ₫",
        originalPrice: "5.200.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline" as const,
        rating: 4.9,
        duration: "4 ngày 3 đêm",
        groupSize: "6-12 người",
        features: ["Resort 5*", "Ăn buffet", "Spa"]
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Hội An - Đà Nẵng 3 ngày 2 đêm - Phố cổ di sản",
        description: "Khám phá phố cổ Hội An, thưởng thức ẩm thực đặc sắc và văn hóa truyền thống.",
        destination: "Hội An, Quảng Nam",
        departureDate: "25/12/2024",
        price: "3.200.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline" as const,
        rating: 4.7,
        duration: "3 ngày 2 đêm",
        groupSize: "10-20 người",
        features: ["Khách sạn 4*", "Ăn sáng", "Thuyền thúng"]
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Nha Trang 3 ngày 2 đêm - Biển xanh cát trắng",
        description: "Tận hưởng không khí biển trong lành, tham gia các hoạt động thể thao dưới nước.",
        destination: "Nha Trang, Khánh Hòa",
        departureDate: "30/12/2024",
        price: "2.800.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline" as const,
        rating: 4.6,
        duration: "3 ngày 2 đêm",
        groupSize: "8-16 người",
        features: ["Khách sạn 4*", "Ăn sáng", "Lặn biển"]
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Mũi Né 2 ngày 1 đêm - Đồi cát đỏ huyền thoại",
        description: "Khám phá đồi cát đỏ, thưởng thức hải sản tươi ngon và ngắm hoàng hôn tuyệt đẹp.",
        destination: "Mũi Né, Bình Thuận",
        departureDate: "05/01/2025",
        price: "1.800.000 ₫",
        originalPrice: "2.200.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline" as const,
        rating: 4.5,
        duration: "2 ngày 1 đêm",
        groupSize: "6-12 người",
        features: ["Resort 3*", "Ăn sáng", "Xe jeep"]
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Cần Thơ 2 ngày 1 đêm - Tây Đô sông nước",
        description: "Trải nghiệm cuộc sống sông nước miền Tây, thưởng thức ẩm thực đặc sắc.",
        destination: "Cần Thơ",
        departureDate: "10/01/2025",
        price: "1.500.000 ₫",
        originalPrice: "1.800.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline" as const,
        rating: 4.4,
        duration: "2 ngày 1 đêm",
        groupSize: "8-15 người",
        features: ["Khách sạn 3*", "Ăn sáng", "Thuyền sông"]
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Đà Lạt 3 ngày 2 đêm - Thành phố ngàn hoa",
        description: "Khám phá thành phố mộng mơ, thưởng thức không khí mát mẻ và cảnh đẹp thiên nhiên.",
        destination: "Đà Lạt, Lâm Đồng",
        departureDate: "15/01/2025",
        price: "2.900.000 ₫",
        originalPrice: "3.500.000 ₫",
        isHighlighted: false,
        isDiscounted: true,
        buttonVariant: "outline" as const,
        rating: 4.7,
        duration: "3 ngày 2 đêm",
        groupSize: "10-18 người",
        features: ["Resort 4*", "Ăn sáng", "Vườn hoa"]
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Huế 2 ngày 1 đêm - Cố đô di sản",
        description: "Tham quan các di tích lịch sử, thưởng thức ẩm thực cung đình Huế.",
        destination: "Huế, Thừa Thiên Huế",
        departureDate: "20/01/2025",
        price: "2.200.000 ₫",
        isHighlighted: false,
        isDiscounted: false,
        buttonVariant: "outline" as const,
        rating: 4.6,
        duration: "2 ngày 1 đêm",
        groupSize: "8-15 người",
        features: ["Khách sạn 4*", "Ăn sáng", "Thuyền sông Hương"]
      },
    ];
  
    // Filter options
    const filterOptions = [
      { id: 1, label: "Tất cả tour", isActive: true },
      { id: 2, label: "Miền Bắc", isActive: false },
      { id: 3, label: "Miền Trung", isActive: false },
      { id: 4, label: "Miền Nam", isActive: false },
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
  
    // Filter tours based on conditions
    const filteredTours = tourData.filter(tour => {
      if (showDiscountedOnly && !tour.isDiscounted) return false;
      return true;
    });

    const handleTourClick = (tourId: number) => {
      console.log(`Tour clicked: ${tourId}`);
      // Add navigation logic here
    };
  
    return (
      <section className="flex flex-col w-full items-center justify-center gap-8 py-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl md:text-4xl text-gray-800 [font-family:'Manrope',Helvetica]">
              Tour Trong Nước
            </h1>
            <p className="text-gray-600 text-lg">
              Khám phá vẻ đẹp Việt Nam với những hành trình đặc biệt
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Discount Filter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <div className="relative w-4 h-4 bg-red-500 rounded overflow-hidden">
                  <CheckIcon className="absolute w-3 h-3 top-0.5 left-0.5 text-white" />
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showDiscountedOnly}
                  onChange={(e) => setShowDiscountedOnly(e.target.checked)}
                  className="w-4 h-4 text-[#009e74] rounded focus:ring-[#009e74]"
                />
                <span className="text-sm font-medium text-gray-700">
                  Chỉ hiển thị tour giảm giá
                </span>
              </label>
            </div>
  
            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Sắp xếp:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white rounded-full border-gray-200 min-w-[150px]">
                  <SelectValue placeholder="Chọn sắp xếp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Giá thấp - cao</SelectItem>
                  <SelectItem value="price-high">Giá cao - thấp</SelectItem>
                  <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
  
        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                className={`h-10 px-4 rounded-full transition-all duration-200 ${
                  option.isActive
                    ? "border-[#009e74] text-[#009e74] font-semibold bg-[#009e74]/5"
                    : "border-gray-200 text-gray-600 hover:border-[#009e74] hover:text-[#009e74]"
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
  
          <Button className="px-6 py-2 bg-[#009e74] text-white rounded-full hover:bg-[#008a66] transition-all duration-200 flex items-center gap-2">
            <SearchIcon className="w-4 h-4" />
            Tìm kiếm
          </Button>
        </div>
  
        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
          {filteredTours.map((tour) => (
            <TourCard 
              key={tour.id} 
              tour={tour} 
              onClick={() => handleTourClick(tour.id)}
            />
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {paginationItems.map((item, index) => (
            <Button
              key={index}
              variant={item.isActive ? "default" : "outline"}
              className={`w-10 h-10 rounded-full ${
                item.isActive
                  ? "bg-[#009e74] text-white"
                  : "border-gray-200 text-gray-600 hover:border-[#009e74] hover:text-[#009e74]"
              }`}
            >
              {item.page}
            </Button>
          ))}
        </div>
      </section>
    );
  };
  