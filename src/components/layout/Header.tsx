import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Header = (): JSX.Element => {
  // Top navigation links
  const topNavLinks = [
    "Dịch vụ Visa",
    "Cẩm nang du lịch",
    "Về chúng tôi",
    "Liên hệ",
  ];

  // Main navigation links
  const mainNavLinks = [
    "TOUR QUỐC TẾ",
    "TOUR TRONG NƯỚC",
    "TOUR CAO CẤP",
    "TOUR ĐOÀN",
    "TOUR INBOUND",
    "VÉ THAM QUAN DU LỊCH",
    "KHUYẾN MÃI",
  ];

  return (
    <header className="flex flex-col w-full items-start bg-transparent shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-center w-full bg-gradient-to-r from-[#f9f9f9] to-[#f0f0f0]">
        <div className="max-w-7xl w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2.5">
            <div className="font-normal text-[#009e74] text-lg sm:text-xl">
              Hành trình đẳng cấp – Trải nghiệm khác biệt.
            </div>
          </div>

          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex gap-3 sm:gap-5 items-center">       
              {topNavLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="font-normal text-[#15191e] text-sm sm:text-base leading-6 cursor-pointer hover:text-[#009e74] transition-colors duration-200">
                    {link}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 p-0 h-auto hover:bg-white/50 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        alt="Flag"
                        src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-197473.svg"
                      />
                      <span className="font-semibold text-[#15191e] text-sm sm:text-base leading-6">
                        VN
                      </span>
                    </div>
                    <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>VN</DropdownMenuItem>
                  <DropdownMenuItem>EN</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex w-full items-center justify-center bg-white border-b border-gray-100">
        <div className="max-w-7xl w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <img className="w-[180px] sm:w-[223px] h-9 sm:h-11 object-cover" alt="Logo" />

          <NavigationMenu className="max-w-none hidden lg:block">
            <NavigationMenuList className="flex items-center gap-2 lg:gap-3">
              {mainNavLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="font-normal text-[#15191e] text-sm lg:text-base leading-6 cursor-pointer hover:text-[#009e74] transition-colors duration-200 whitespace-nowrap">
                    {link}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Button className="flex gap-2 pl-2 pr-3 py-2 bg-[#fc616a1f] shadow-[inset_0px_2px_24px_#ff212126] rounded-[200px] hover:bg-[#fc616a2f] transition-all duration-200">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 overflow-hidden">
                    <div className="relative w-[18px] sm:w-[21px] h-5 sm:h-6 left-px bg-[100%_100%]">
                      <div className="relative w-3 sm:w-3.5 h-[11px] sm:h-[13px] top-[9px] sm:top-[11px] left-1 sm:left-1.5">
                        <div className="relative h-[11px] sm:h-[13px]">
                          <img
                            className="absolute w-2.5 sm:w-3 h-[11px] sm:h-[13px] top-0 left-0.5"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-80.svg"
                          />
                          <img
                            className="absolute w-2.5 sm:w-3 h-2.5 sm:h-3 top-px left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-90.svg"
                          />
                          <img
                            className="absolute w-[6px] sm:w-[7px] h-1.5 sm:h-2 top-1 left-[4px] sm:left-[5px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-77.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="font-medium text-[#ff0004] text-sm sm:text-base leading-6">
                    Combo du lịch hot
                  </span>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}; 