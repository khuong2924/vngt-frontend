import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSubsection = (): JSX.Element => {
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
    <header className="flex flex-col w-full items-start bg-transparent">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-3 w-full bg-[#f9f9f9]">
        <div className="flex items-center gap-2.5">
          <div className="font-normal text-[#009e74] text-xl">
            Hành trình đẳng cấp – Trải nghiệm khác biệt.
          </div>
        </div>

        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex gap-5 items-center">
            {topNavLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-normal text-[#15191e] text-base leading-6 cursor-pointer">
                  {link}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 p-0 h-auto"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6"
                      alt="Flag"
                      src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-197473.svg"
                    />
                    <span className="font-semibold text-[#15191e] text-base leading-6">
                      VN
                    </span>
                  </div>
                  <ChevronDownIcon className="w-4 h-4" />
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

      {/* Main navigation */}
      <div className="flex w-full items-center justify-between px-8 py-4 bg-white">
        <img className="w-[223px] h-11 object-cover" alt="Logo" />

        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex items-center gap-3">
            {mainNavLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-normal text-[#15191e] text-base leading-6 cursor-pointer">
                  {link}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <Button className="flex gap-2 pl-2 pr-3 py-2 bg-[#fc616a1f] shadow-[inset_0px_2px_24px_#ff212126] rounded-[200px]">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="relative w-[21px] h-6 left-px bg-[100%_100%]">
                    <div className="relative w-3.5 h-[13px] top-[11px] left-1.5">
                      <div className="relative h-[13px]">
                        <img
                          className="absolute w-3 h-[13px] top-0 left-0.5"
                          alt="Vector"
                          src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-80.svg"
                        />
                        <img
                          className="absolute w-3 h-3 top-px left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-90.svg"
                        />
                        <img
                          className="absolute w-[7px] h-2 top-1 left-[5px]"
                          alt="Vector"
                          src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-77.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="font-medium text-[#ff0004] text-base leading-6">
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
