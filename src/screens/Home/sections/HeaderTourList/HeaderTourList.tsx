import React from "react";

// Define tour categories data for mapping
const tourCategories = [
  {
    icon: (
      <div className="relative w-[60px] h-[60px]">
        <div className="relative w-[52px] h-[52px] top-1 left-1 bg-[url(https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector.svg)] bg-[100%_100%]">
          <img
            className="absolute w-[43px] h-[43px] top-[9px] left-[9px]"
            alt="Group"
          />
          <img
            className="absolute w-[13px] h-0.5 top-5 left-5"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-6.svg"
          />
          <img
            className="absolute w-[15px] h-[13px] top-[19px] left-[29px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-4.svg"
          />
          <img
            className="absolute w-1.5 h-1.5 top-[23px] left-9"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-3.svg"
          />
          <img
            className="absolute w-1.5 h-1.5 top-[22px] left-8"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-3.svg"
          />
          <img
            className="absolute w-[15px] h-[13px] top-[19px] left-2"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-4.svg"
          />
          <img
            className="absolute w-1.5 h-1.5 top-[23px] left-[15px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-3.svg"
          />
          <img
            className="absolute w-1.5 h-1.5 top-[22px] left-[11px]"
            alt="Vector"
            src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-3.svg"
          />
          <img
            className="absolute w-[38px] h-[15px] top-[18px] left-2"
            alt="Group"
          />
        </div>
      </div>
    ),
    label: "Tour Hè 2025",
  },
  {
    icon: (
      <div className="relative w-[60px] h-[60px] overflow-hidden">
        <div className="relative w-[53px] h-[60px] left-1">
          <div className="relative h-[60px]">
            <div className="absolute w-2.5 h-2.5 top-[19px] left-[38px]">
              <img className="absolute w-1 h-1 top-0 left-1.5" alt="Group" />
              <div className="absolute w-2 h-2 top-0.5 left-0 bg-[100%_100%]">
                <img className="absolute w-2 h-2 top-0 left-0" alt="Group" />
              </div>
            </div>
            <div className="absolute w-2.5 h-2.5 top-[46px] left-[11px]">
              <img className="absolute w-1 h-1 top-0 left-0" alt="Group" />
              <div className="absolute w-2 h-2 top-0.5 left-0.5 bg-[100%_100%]">
                <img className="absolute w-2 h-2 top-0 left-0" alt="Group" />
              </div>
            </div>
            <div className="absolute w-[53px] h-[51px] top-[9px] left-0">
              <div className="absolute w-8 h-8 top-0 left-0 bg-[100%_100%]">
                <img
                  className="absolute w-[23px] h-7 top-1 left-[9px]"
                  alt="Group"
                />
              </div>
              <div className="absolute w-[26px] h-[26px] top-6 left-[26px] bg-[100%_100%]">
                <img
                  className="absolute w-[21px] h-[26px] top-0 left-[5px]"
                  alt="Group"
                />
              </div>
              <img
                className="absolute w-[19px] h-[19px] top-[9px] left-[9px]"
                alt="Vector"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-8.svg"
              />
              <img
                className="absolute w-[18px] h-[18px] top-8 left-[26px]"
                alt="Vector"
                src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-61.svg"
              />
            </div>
            <div className="absolute w-4 h-4 top-0 left-[33px]">
              <div className="relative h-4">
                <div className="absolute w-[15px] h-[15px] top-0 left-px bg-[100%_100%]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0 left-0"
                    alt="Group"
                  />
                </div>
                <img
                  className="absolute w-3 h-3 top-1 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-7.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    label: "Tour Mùa Thu",
  },
  {
    icon: (
      <img
        className="relative w-[60px] h-[60px]"
        alt="Fi"
        src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-642000.svg"
      />
    ),
    label: "Tour Mùa Đông",
  },
  {
    icon: (
      <div className="relative w-[60px] h-[60px] overflow-hidden">
        <div className="relative h-[60px]">
          <div className="absolute w-[60px] h-[60px] top-0 left-0">
            <img
              className="absolute w-10 h-[38px] top-[22px] left-5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-13.svg"
            />
            <img
              className="absolute w-[7px] h-[11px] top-[46px] left-[25px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-10.svg"
            />
            <img
              className="absolute w-[13px] h-3.5 top-[30px] left-5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-1.svg"
            />
            <img
              className="absolute w-[7px] h-3 top-[22px] left-[33px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-26.svg"
            />
            <img
              className="absolute w-[21px] h-5 top-[31px] left-[29px]"
              alt="Group"
            />
            <img
              className="absolute w-[11px] h-[11px] top-9 left-[35px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-16.svg"
            />
            <img
              className="absolute w-[29px] h-[29px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-12.svg"
            />
            <img
              className="absolute w-1 h-1.5 top-[23px] left-2"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-22.svg"
            />
            <img
              className="absolute w-[15px] h-[21px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-31.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[11px] left-[11px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-21.svg"
            />
            <img
              className="absolute w-2.5 h-2.5 top-[13px] left-[50px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-63.svg"
            />
            <img
              className="absolute w-1.5 h-[9px] top-[13px] left-[50px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-18.svg"
            />
          </div>
          <div className="absolute w-[11px] h-[11px] top-0.5 left-[35px] bg-[url(https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-11.svg)] bg-[100%_100%]">
            <img
              className="absolute w-1.5 h-[11px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-15.svg"
            />
          </div>
          <div className="absolute w-[13px] h-3 top-[37px] left-0 bg-[url(https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-82.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[9px] h-3 top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-14.svg"
            />
          </div>
        </div>
      </div>
    ),
    label: "Tour Mùa Xuân",
  },
  {
    icon: (
      <div className="relative w-[60px] h-[60px] overflow-hidden">
        <div className="relative w-12 h-[60px] left-1.5">
          <div className="relative h-[60px]">
            <img
              className="absolute w-[25px] h-14 top-0.5 left-[22px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-24.svg"
            />
            <img
              className="absolute w-[22px] h-[53px] top-[5px] left-0.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-20.svg"
            />
            <img className="absolute w-12 h-[60px] top-0 left-0" alt="Group" />
            <img className="absolute w-7 h-7 top-6 left-2.5" alt="Group" />
            <img
              className="absolute w-5 h-[17px] top-[30px] left-3.5"
              alt="Group"
            />
          </div>
        </div>
      </div>
    ),
    label: "Tour Khuyến Mãi",
  },
  {
    icon: (
      <div className="relative w-[60px] h-[60px]">
        <div className="h-[60px]">
          <div className="relative w-[60px] h-[60px]">
            <img
              className="absolute w-[41px] h-[42px] top-[17px] left-[17px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-23.svg"
            />
            <img
              className="absolute w-[30px] h-[42px] top-[17px] left-[17px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-28.svg"
            />
            <img
              className="absolute w-[60px] h-[60px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-25.svg"
            />
            <img
              className="absolute w-11 h-[59px] top-px left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-83.svg"
            />
            <img
              className="absolute w-[41px] h-[41px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-41.svg"
            />
            <img
              className="absolute w-[41px] h-[34px] top-[7px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-27.svg"
            />
            <img
              className="absolute w-[11px] h-[11px] top-[7px] left-[7px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
            />
            <img
              className="absolute w-1 h-1 top-2.5 left-2.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-19.svg"
            />
            <img
              className="absolute w-[18px] h-[18px] top-[30px] left-[31px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-71.svg"
            />
            <img
              className="absolute w-2 h-2 top-[41px] left-[30px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-76.svg"
            />
            <div className="absolute w-[22px] h-[22px] top-3 left-[11px] bg-[100%_100%]">
              <img
                className="absolute w-[3px] h-[3px] top-3 left-0.5"
                alt="Group"
              />
              <img
                className="absolute w-[3px] h-[3px] top-px left-[13px]"
                alt="Group"
              />
              <img
                className="absolute w-[5px] h-[5px] top-1.5 left-2"
                alt="Group"
              />
            </div>
          </div>
        </div>
      </div>
    ),
    label: "Tour No Shopping",
  },
  {
    icon: (
      <div className="relative w-[60px] h-[60px] overflow-hidden">
        <div className="w-[59px] h-[60px]">
          <div className="relative h-[60px]">
            <img
              className="absolute w-[54px] h-[15px] top-[35px] left-0.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-52.svg"
            />
            <img
              className="absolute w-[57px] h-[38px] top-[3px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-30.svg"
            />
            <img
              className="absolute w-12 h-[13px] top-[47px] left-[5px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-70.svg"
            />
            <img
              className="absolute w-4 h-[23px] top-[3px] left-8"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-29.svg"
            />
            <img
              className="absolute w-[9px] h-[22px] top-1 left-11"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-92.svg"
            />
            <img
              className="absolute w-[15px] h-3.5 top-[22px] left-[35px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-60.svg"
            />
            <img
              className="absolute w-[9px] h-3.5 top-[11px] left-[50px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-35.svg"
            />
            <img
              className="absolute w-[9px] h-[23px] top-9 left-[35px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-38.svg"
            />
            <img
              className="absolute w-[7px] h-[18px] top-[38px] left-[42px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-33.svg"
            />
            <img
              className="absolute w-[15px] h-[19px] top-5 left-[31px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-34.svg"
            />
            <img
              className="absolute w-3 h-5 top-[19px] left-[41px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-37.svg"
            />
            <img
              className="absolute w-2 h-1 top-[26px] left-[35px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-87.svg"
            />
            <img
              className="absolute w-2 h-1 top-[26px] left-[41px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-44.svg"
            />
            <img
              className="absolute w-[5px] h-1.5 top-[17px] left-10"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-45.svg"
            />
            <img
              className="absolute w-[11px] h-3 top-2 left-[37px]"
              alt="Group"
            />
            <img
              className="absolute w-1 h-[13px] top-[19px] left-[46px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-36.svg"
            />
            <img
              className="absolute w-1 h-[13px] top-[19px] left-[34px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-42.svg"
            />
            <img
              className="absolute w-5 h-4 top-[22px] left-[5px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-39.svg"
            />
            <img
              className="absolute w-[11px] h-[23px] top-8 left-[7px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-47.svg"
            />
            <img
              className="absolute w-[9px] h-[27px] top-8 left-[15px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-43.svg"
            />
            <img
              className="absolute w-2 h-2.5 top-0 left-[9px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-46.svg"
            />
            <img
              className="absolute w-[7px] h-2 top-px left-3.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-40.svg"
            />
            <img
              className="absolute w-6 h-5 top-[17px] left-[3px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-55.svg"
            />
            <img
              className="absolute w-[9px] h-[5px] top-[17px] left-2.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-49.svg"
            />
            <img
              className="absolute w-1 h-[15px] top-4 left-[7px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-84.svg"
            />
            <img
              className="absolute w-1 h-[15px] top-4 left-[18px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-51.svg"
            />
            <img
              className="absolute w-[13px] h-[3px] top-2 left-[9px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-50.svg"
            />
            <img
              className="absolute w-2.5 h-3.5 top-[22px] left-[15px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-48.svg"
            />
            <img
              className="absolute w-[7px] h-[11px] top-[26px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-53.svg"
            />
            <img
              className="absolute w-3.5 h-1.5 top-[26px] left-[15px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-54.svg"
            />
            <img
              className="absolute w-[5px] h-1.5 top-3.5 left-[13px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-45.svg"
            />
            <img
              className="absolute w-2.5 h-[13px] top-[5px] left-2.5"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-59.svg"
            />
            <img
              className="absolute w-[7px] h-3 top-[25px] left-[30px]"
              alt="Vector"
              src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/vector-81.svg"
            />
            <div className="absolute w-[3px] h-px top-3 left-[43px] bg-[100%_100%]" />
            <div className="absolute w-[3px] h-0.5 top-4 left-[41px] bg-[100%_100%]" />
            <div className="absolute w-[3px] h-px top-3 left-[39px] bg-[100%_100%]" />
            <div className="absolute w-[3px] h-0.5 top-[9px] left-4 bg-[100%_100%]" />
            <div className="absolute w-[3px] h-0.5 top-3 left-[13px] bg-[100%_100%]" />
            <div className="absolute w-[3px] h-0.5 top-[9px] left-[11px] bg-[100%_100%]" />
          </div>
        </div>
      </div>
    ),
    label: "Tour Mini Group",
  },
  {
    icon: (
      <img
        className="relative w-[60px] h-[60px]"
        alt="Fi"
        src="https://c.animaapp.com/mc2sb7uh9XDRE6/img/fi-3092413.svg"
      />
    ),
    label: "Tour Lễ 2/9",
  },
];

export const Frame3Subsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center gap-6 px-8 py-0">
      {tourCategories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-5 flex-1 grow"
        >
          {category.icon}
          <div className="font-semibold leading-[19.2px] w-fit font-['Manrope',Helvetica] text-[#15191e] text-base tracking-[0] whitespace-nowrap">
            {category.label}
          </div>
        </div>
      ))}
    </section>
  );
};
