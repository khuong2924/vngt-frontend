import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Top navigation items
  const topNavItems = [
    "Dịch vụ Visa",
    "Cẩm nang du lịch",
    "Về chúng tôi",
    "Liên hệ",
  ];

  // Main navigation items
  const mainNavItems = [
    "TOUR QUỐC TẾ",
    "TOUR TRONG NƯỚC",
    "TOUR CAO CẤP",
    "TOUR ĐOÀN",
    "TOUR INBOUND",
    "VÉ THAM QUAN DU LỊCH",
    "KHUYẾN MÃI",
  ];

  return (
    <header className="flex flex-col w-full items-start bg-transparent">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between px-8 py-3 relative self-stretch w-full bg-[#f9f9f9]">
        {/* Tagline */}
        <div className="inline-flex items-center justify-center gap-2.5">
          <div className="[font-family:'Manrope',Helvetica] font-normal text-[#009e74] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Hành trình đẳng cấp – Trải nghiệm khác biệt.
          </div>
        </div>

        {/* Top navigation links */}
        <NavigationMenu>
          <NavigationMenuList className="gap-5 inline-flex items-center">
            {topNavItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base tracking-[0] leading-6 whitespace-nowrap">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Language selector */}
            <NavigationMenuItem>
              <div className="inline-flex gap-2 items-center rounded-[200px]">
                <div className="inline-flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    alt="Flag"
                    src="https://c.animaapp.com/mc36n1re0wWczD/img/fi-197473.svg"
                  />
                  <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#15191e] text-base tracking-[0] leading-6 whitespace-nowrap">
                    VN
                  </div>
                </div>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Main navigation bar */}
      <div className="flex w-full items-center justify-between px-8 py-4 bg-white">
        {/* Logo placeholder */}
        <div className="relative w-[223px] h-11" />

        {/* Main navigation links */}
        <NavigationMenu>
          <NavigationMenuList className="inline-flex items-center gap-3">
            {mainNavItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="[font-family:'Manrope',Helvetica] font-normal text-[#15191e] text-base tracking-[0] leading-6 whitespace-nowrap">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Hot combo button */}
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="inline-flex gap-2 pl-2 pr-3 py-2 bg-[#fc616a1f] shadow-[inset_0px_2px_24px_#ff212126] items-center rounded-[200px]"
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="relative w-[21px] h-6 left-px bg-[url(https://c.animaapp.com/mc36n1re0wWczD/img/group.png)] bg-[100%_100%]">
                    <div className="relative w-3.5 h-[13px] top-[11px] left-1.5">
                      <div className="relative h-[13px]">
                        <img
                          className="absolute w-3 h-[13px] top-0 left-0.5"
                          alt="Vector"
                          src="https://c.animaapp.com/mc36n1re0wWczD/img/vector.svg"
                        />
                        <img
                          className="absolute w-3 h-3 top-px left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/mc36n1re0wWczD/img/vector-4.svg"
                        />
                        <img
                          className="absolute w-[7px] h-2 top-1 left-[5px]"
                          alt="Vector"
                          src="https://c.animaapp.com/mc36n1re0wWczD/img/vector-5.svg"
                        />
                        <img
                          className="absolute w-[9px] h-[9px] top-0 left-0"
                          alt="Group"
                          src="https://c.animaapp.com/mc36n1re0wWczD/img/group-1.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="[font-family:'Manrope',Helvetica] font-medium text-[#ff0004] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Combo du lịch hot
                </span>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
