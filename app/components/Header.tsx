import React from 'react';

export default function Header() {
  return (
    <>
      {/* Thanh slogan xanh phía trên */}
      <div className="w-full bg-[#f8faf9] text-[#00b894] text-[17px] py-1 px-2 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Hành trình đẳng cấp – Trải nghiệm khác biệt.</span>
          <div className="flex space-x-6 text-gray-700 text-[15px] font-normal">
            <a href="#" className="hover:underline transition">Dịch vụ Visa</a>
            <a href="#" className="hover:underline transition">Cẩm nang du lịch</a>
            <a href="#" className="hover:underline transition">Về chúng tôi</a>
            <a href="#" className="hover:underline transition">Liên hệ</a>
          </div>
        </div>
      </div>
      {/* Header chính */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo và slogan nhỏ */}
          <div className="flex items-center min-w-[260px]">
            {/* Nếu có ảnh logo thì thay thế img src bên dưới */}
            {/* <img src="/logo.png" alt="logo" className="h-10 w-auto mr-3" /> */}
            <span className="font-extrabold text-xl text-[#00b894] leading-tight tracking-tight font-[var(--font-montserrat)] mr-2">VNGroup Tourist</span>
            <span className="text-xs text-gray-400 font-[var(--font-inter)] mt-2">Thế Giới Bao La - Cùng Nhau Khám Phá</span>
          </div>
          {/* Menu điều hướng */}
          <nav className="flex-1 flex justify-center">
            <div className="flex space-x-6">
              {['TOUR QUỐC TẾ', 'TOUR TRONG NƯỚC', 'TOUR CAO CẤP', 'TOUR ĐOÀN', 'TOUR INBOUND', 'VÉ THAM QUAN DU LỊCH', 'KHUYẾN MÃI'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-800 font-semibold text-[16px] px-1 py-1 hover:text-[#00b894] transition-all duration-200 font-[var(--font-inter)]"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
          {/* Nút và ngôn ngữ */}
          <div className="flex items-center space-x-3 min-w-[220px] justify-end">
            <button className="flex items-center bg-[#ffeaea] text-[#e53935] text-[15px] px-4 py-2 rounded-full font-semibold shadow-none hover:bg-[#ffd6d6] transition-all duration-200">
              <span className="mr-2 text-lg">🎫</span> Combo du lịch hot
            </button>
            <button className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#e53935] text-white text-base font-bold">★</span>
              <span className="text-gray-800 font-semibold text-[15px]">VN</span>
              <svg className="w-3 h-3 ml-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}