import { MapPinIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for popular Vietnamese tourist destinations
const popularDestinations = [
  {
    name: "Sapa",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Núi rừng Tây Bắc"
  },
  {
    name: "Phú Quốc",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Đảo ngọc Việt Nam"
  },
  {
    name: "Hội An",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Phố cổ di sản"
  },
  {
    name: "Đà Nẵng",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Thành phố đáng sống"
  },
  {
    name: "Nha Trang",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Biển xanh cát trắng"
  },
  {
    name: "Mũi Né",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Đồi cát đỏ"
  },
  {
    name: "Cần Thơ",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Tây Đô sông nước"
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-10 py-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
          Điểm Đến Nổi Bật
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Khám phá những địa điểm du lịch hấp dẫn nhất Việt Nam
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {popularDestinations.map((destination, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-72 h-80 rounded-2xl overflow-hidden border-0 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${destination.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent className="flex flex-col justify-end h-full p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="w-5 h-5 text-[#009e74]" />
                    <span className="[font-family:'Manrope',Helvetica] font-bold text-gray-800 text-lg">
                      {destination.name}
                    </span>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] text-gray-600 text-sm">
                    {destination.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
