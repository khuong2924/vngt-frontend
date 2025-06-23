import React from "react";
import { CalendarIcon, MapPinIcon, StarIcon, ClockIcon, UsersIcon } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent } from "./card";

interface TourCardProps {
  tour: {
    id: number;
    image: string;
    title: string;
    description: string;
    destination: string;
    departureDate: string;
    price: string;
    originalPrice?: string;
    isHighlighted: boolean;
    isDiscounted: boolean;
    buttonVariant: "default" | "outline";
    rating?: number;
    duration?: string;
    groupSize?: string;
    features?: string[];
  };
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          alt={tour.title}
          src={tour.image}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {tour.isDiscounted && (
            <Badge className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              -20%
            </Badge>
          )}
          {tour.isHighlighted && (
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
          tour.isHighlighted ? "text-[#009e74]" : "text-gray-800"
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
              {tour.originalPrice && tour.isDiscounted && (
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
          >
            Chi tiết
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 