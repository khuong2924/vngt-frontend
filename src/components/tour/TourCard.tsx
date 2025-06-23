import React from "react";
import { CalendarIcon, MapPinIcon, StarIcon, ClockIcon, UsersIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export interface TourData {
  id: number;
  image?: string;
  title: string;
  description: string;
  destination: string;
  departureDate: string;
  price: string;
  originalPrice?: string;
  isHighlighted?: boolean;
  isDiscounted?: boolean;
  hasDiscount?: boolean;
  highlighted?: boolean;
  buttonVariant?: "default" | "outline";
  rating?: number;
  duration?: string;
  groupSize?: string;
  features?: string[];
  tag?: string;
  active?: boolean;
}

interface TourCardProps {
  tour: TourData;
  variant?: "default" | "compact" | "featured" | "guide";
  className?: string;
  onClick?: () => void;
}

export const TourCard: React.FC<TourCardProps> = ({ 
  tour, 
  variant = "default", 
  className = "",
  onClick 
}) => {
  const isDiscounted = tour.isDiscounted || tour.hasDiscount;
  const isHighlighted = tour.isHighlighted || tour.highlighted;

  // Compact variant (used in some home sections)
  if (variant === "compact") {
    return (
      <Card className={`border-none shadow-none ${className}`}>
        <CardContent className="p-0 flex flex-col gap-3">
          <div className="relative">
            {tour.image ? (
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[214.5px] object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-[214.5px] bg-gray-200 rounded-md"></div>
            )}
            {isDiscounted && (
              <Badge className="absolute top-2.5 left-2.5 bg-sup text-white font-semibold p-2 rounded-lg">
                Giảm giá
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`[font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-base ${
              isHighlighted ? "text-main" : ""
            }`}>
              {tour.title}
            </h3>
            <p className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
              {tour.description}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1 w-[153px]">
                <MapPinIcon className="h-5 w-5" />
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
                <CalendarIcon className="h-5 w-5" />
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                  Khởi hành
                </span>
              </div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-sm leading-[21px]">
                {tour.departureDate}
              </span>
            </div>
          </div>

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
              variant={tour.buttonVariant === "default" ? "default" : "outline"}
              className={`px-8 py-4 rounded-[42px] font-medium ${
                tour.buttonVariant === "default"
                  ? "bg-main text-white"
                  : "bg-[#00dba11a] text-main"
              }`}
              onClick={onClick}
            >
              Chi tiết
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Featured variant (used in tour sections with enhanced styling)
  if (variant === "featured") {
    return (
      <Card className={`border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group ${className}`}>
        <CardContent className="p-0 flex flex-col">
          <div className="relative overflow-hidden">
            {tour.image && (
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-[214.5px] object-cover group-hover:scale-110 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            {isDiscounted && (
              <Badge className="absolute top-3 left-3 bg-red-500 text-white p-2 rounded-lg shadow-lg">
                <span className="[font-family:'Manrope',Helvetica] font-semibold text-sm leading-[14px]">
                  Giảm giá
                </span>
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-4 p-6">
            <div className="flex flex-col gap-3">
              <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#15191e] text-base leading-tight line-clamp-2 group-hover:text-[#009e74] transition-colors duration-200">
                {tour.title}
              </h3>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px] line-clamp-2">
                {tour.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 w-[120px] sm:w-[153px]">
                  <MapPinIcon className="w-4 h-4 text-[#009e74]" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px]">
                    Điểm đến
                  </span>
                </div>
                <span className="[font-family:'Manrope',Helvetica] font-medium text-[#15191e] text-sm leading-[21px]">
                  {tour.destination}
                </span>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 w-[120px] sm:w-[153px]">
                  <CalendarIcon className="w-4 h-4 text-[#009e74]" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-gray-600 text-sm leading-[21px]">
                    Khởi hành
                  </span>
                </div>
                <span className="[font-family:'Manrope',Helvetica] font-medium text-[#15191e] text-sm leading-[21px]">
                  {tour.departureDate}
                </span>
              </div>
            </div>

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
                variant="outline"
                className="px-8 py-4 rounded-[42px] font-medium bg-[#00dba11a] text-main"
                onClick={onClick}
              >
                Chi tiết
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Guide variant (used in travel guide sections)
  if (variant === "guide") {
    return (
      <Card className={`border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group ${className}`}>
        <CardContent className="flex flex-col items-start gap-6 p-0">
          <div className="flex flex-col items-start gap-4 w-full relative">
            <div className="relative overflow-hidden w-full">
              {tour.image && (
                <img
                  className="w-full h-[214.5px] object-cover group-hover:scale-110 transition-transform duration-300"
                  alt="Travel destination"
                  src={tour.image}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full px-6">
              <h3 className="font-['Manrope',Helvetica] font-bold text-[#15191e] text-base leading-tight line-clamp-2 group-hover:text-[#009e74] transition-colors duration-200">
                {tour.title}
              </h3>
            </div>

            {tour.tag && (
              <Badge
                className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#15191e] rounded-lg p-2 font-['Manrope',Helvetica] font-semibold text-sm leading-[14px] shadow-lg"
                variant="outline"
              >
                {tour.tag}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant (full featured tour card)
  return (
    <Card className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {tour.image ? (
          <img
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            alt={tour.title}
            src={tour.image}
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-gray-200"></div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isDiscounted && (
            <Badge className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              -20%
            </Badge>
          )}
          {isHighlighted && (
            <Badge className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              HOT
            </Badge>
          )}
        </div>

        {/* Rating */}
        {tour.rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-800">{tour.rating}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className={`font-bold text-lg leading-tight mb-3 line-clamp-2 ${
          isHighlighted ? "text-[#009e74]" : "text-gray-800"
        }`}>
          {tour.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Tour Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-4 h-4 text-[#009e74]" />
              <span className="text-sm">Điểm đến</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{tour.destination}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="w-4 h-4 text-[#009e74]" />
              <span className="text-sm">Khởi hành</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{tour.departureDate}</span>
          </div>

          {tour.duration && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-4 h-4 text-[#009e74]" />
                <span className="text-sm">Thời gian</span>
              </div>
              <span className="text-sm font-medium text-gray-800">{tour.duration}</span>
            </div>
          )}

          {tour.groupSize && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <UsersIcon className="w-4 h-4 text-[#009e74]" />
                <span className="text-sm">Số người</span>
              </div>
              <span className="text-sm font-medium text-gray-800">{tour.groupSize}</span>
            </div>
          )}
        </div>

        {/* Features */}
        {tour.features && tour.features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tour.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
                {feature}
              </Badge>
            ))}
          </div>
        )}

        {/* Price and Button */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Giá chỉ từ</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#009e74]">{tour.price}</span>
              {tour.originalPrice && isDiscounted && (
                <span className="text-sm text-gray-400 line-through">{tour.originalPrice}</span>
              )}
            </div>
          </div>

          <Button
            variant={tour.buttonVariant === "default" ? "default" : "outline"}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              tour.buttonVariant === "default"
                ? "bg-[#009e74] text-white hover:bg-[#008a66] hover:scale-105"
                : "bg-[#009e74]/10 text-[#009e74] border-[#009e74]/20 hover:bg-[#009e74]/20 hover:scale-105"
            }`}
            onClick={onClick}
          >
            Chi tiết
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 