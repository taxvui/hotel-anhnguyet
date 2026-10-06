'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  Star, 
  Maximize2, 
  Bed, 
  Utensils, 
  ShieldCheck, 
  Waves, 
  Wine, 
  Compass, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Sparkles,
  ExternalLink,
  Eye,
  ZoomIn,
  X,
  FileText,
  Calculator,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { 
  HOTEL_INFO, 
  ROOMS_DATA, 
  MENU_SPECIALTIES, 
  HIGHLIGHTS_DATA, 
  TESTIMONIALS,
  SET_MENUS_DATA,
  ORIGINAL_MENU_SCANS,
  HOTEL_GALLERY_IMAGES,
  Room,
  MenuItem,
  SetMenuPackage,
  OriginalMenuScan,
  GalleryItem
} from '../data/hotelData';
import { BookingModal } from '../components/BookingModal';
import { NewsSection } from '../components/NewsSection';

interface HomePageProps {
  onOpenBookingModal?: (type?: 'room' | 'table') => void;
}

export default function HomePage({
  onOpenBookingModal,
}: HomePageProps) {
  // Booking modal internal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'room' | 'table'>('room');
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [selectedDishName, setSelectedDishName] = useState<string | undefined>(undefined);

  // Quick reservation bar state
  const [quickService, setQuickService] = useState<'room' | 'table'>('room');
  const [quickDate, setQuickDate] = useState('2026-09-25');
  const [quickGuests, setQuickGuests] = useState('2');

  // Restaurant Section Sub-tabs & Quotation State (Source: https://anhnguyethotel.com/our-menus/)
  const [restaurantSubTab, setRestaurantSubTab] = useState<'quotation' | 'scans' | 'alacarte'>('quotation');
  const [selectedSetMenuId, setSelectedSetMenuId] = useState<string>('menu-150k');
  const [calcPaxCount, setCalcPaxCount] = useState<number>(20);
  const [activeScanPage, setActiveScanPage] = useState<OriginalMenuScan | null>(null);

  // Menu category filter for A La Carte
  const [menuFilter, setMenuFilter] = useState<'all' | 'crab' | 'seafood' | 'local' | 'banquet'>('all');

  // Gallery Section Filter & Lightbox (All authentic photos from anhnguyethotel.com)
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'restaurant' | 'menus' | 'events' | 'pool'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Active room preview
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const handleOpenBooking = (type: 'room' | 'table' = 'room', roomId?: string, dishName?: string) => {
    setBookingType(type);
    setSelectedRoomId(roomId);
    setSelectedDishName(dishName);
    if (onOpenBookingModal) {
      onOpenBookingModal(type);
    } else {
      setIsBookingOpen(true);
    }
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOpenBooking(quickService);
  };

  const filteredMenu = menuFilter === 'all' 
    ? MENU_SPECIALTIES 
    : MENU_SPECIALTIES.filter(item => item.category === menuFilter);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#e8ecf1] selection:bg-[#d4af37]/30 selection:text-white">
      {/* ==========================================================
          HERO SECTION (Apple Liquid Glass Luxury)
          ========================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Ambience & Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.18),rgba(11,15,20,0))]" />
        
        {/* Subtle Decorative Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Ambient Glowing Blobs */}
        <div className="ambient-champagne-glow top-1/4 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-champagne-glow bottom-1/4 right-1/4 w-[30rem] h-[30rem] opacity-70" />

        <div className="relative max-w-7xl mx-auto w-full z-10">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Value Proposition & Hero CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Unboxed Metadata (Zero-Pill Discipline) */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#d4af37] font-medium tracking-wide">
                <span>Khách sạn & Nhà hàng Trung Tâm Cà Mau</span>
                <span aria-hidden="true" className="text-neutral-500">·</span>
                <span>207 Phan Ngọc Hiển</span>
                <span aria-hidden="true" className="text-neutral-500">·</span>
                <span>Tiêu Chuẩn VIP 4 Sao</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.15] text-balance">
                Đẳng Cấp Nghỉ Dưỡng & <br className="hidden sm:inline" />
                <span className="text-gradient-champagne">
                  Tinh Hoa Ẩm Thực Cà Mau
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Tọa lạc tại tâm điểm phồn hoa nhất thành phố, Khách sạn & Nhà hàng Ánh Nguyệt kiến tạo không gian phòng Suite thanh lịch cùng thế giới ẩm thực Cua Năm Căn và hải sản ngập mặn trứ danh Đất Mũi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleOpenBooking('room')}
                  className="w-full sm:w-auto liquid-btn-champagne px-8 py-3.5 rounded-2xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Đặt Phòng VIP Trực Tiếp</span>
                </button>

                <button
                  onClick={() => handleOpenBooking('table')}
                  className="w-full sm:w-auto liquid-btn-ghost px-7 py-3.5 rounded-2xl text-sm sm:text-base font-medium flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Utensils className="w-4 h-4 text-[#d4af37]" />
                  <span>Đặt Bàn Thưởng Thức Cua</span>
                </button>
              </div>

              {/* Quick Trust Markers (No pills, clean unboxed typography) */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Giá gốc trực tiếp không phụ phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                  <span>4.9/5 điểm hài lòng từ hơn 1,200 khách</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Phục vụ phòng & đón tiễn 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Liquid Glass Card */}
            <div className="lg:col-span-5 relative">
              <div className="liquid-glass-hero p-3 sm:p-4 rounded-3xl relative overflow-hidden border border-white/20 shadow-2xl">
                {/* Visual Glass Overlay & Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 group">
                  <img
                    src="https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_9612.jpg"
                    alt="Không gian phòng nghỉ Khách sạn Ánh Nguyệt Cà Mau"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 py-1 px-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-[#f4e8d0] font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Không Gian Nghỉ Dưỡng Ánh Nguyệt</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      Phòng Nghỉ Chuẩn 4 Sao
                    </span>
                    <h3 className="text-lg font-bold text-white font-display">
                      Tầm Nhìn Ôm Trọn Trung Tâm Cà Mau
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-neutral-300">
                      <span>Tiện nghi cao cấp · 4 hạng phòng</span>
                      <span className="font-semibold text-[#d4af37]">Chỉ từ 590.000đ/đêm</span>
                    </div>
                  </div>
                </div>

                {/* Sub Features Strip inside Glass */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                    <span className="text-[11px] text-neutral-400 block">Ẩm Thực Đặc Sản</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">Cua Năm Căn Tươi Sống</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                    <span className="text-[11px] text-neutral-400 block">Tiện Ích Nghỉ Dưỡng</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">Hồ Bơi & Phòng Hội Nghị</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Liquid Reservation Floating Bar */}
          <div className="mt-10 lg:mt-14">
            <div className="liquid-glass p-4 sm:p-6 rounded-3xl border border-white/15 shadow-2xl">
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* Service Type Switch */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Nhu Cầu Của Bạn
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value as 'room' | 'table')}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="room">Nghỉ Dưỡng (Đặt Phòng)</option>
                    <option value="table">Ăn Uống (Đặt Bàn Cua/Tiệc)</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#d4af37]" />
                    <span>Ngày Check-in / Đến</span>
                  </label>
                  <input
                    type="date"
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#d4af37]" />
                    <span>Số Lượng Khách</span>
                  </label>
                  <select
                    value={quickGuests}
                    onChange={(e) => setQuickGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="1">1 Khách</option>
                    <option value="2">2 Khách (Cặp đôi/Doanh nhân)</option>
                    <option value="4">3 - 4 Khách (Gia đình)</option>
                    <option value="group">Đoàn công tác / Tiệc đông</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-2 sm:pt-0">
                  <label className="hidden lg:block text-[11px] text-transparent mb-1.5">
                    Hành động
                  </label>
                  <button
                    type="submit"
                    className="w-full liquid-btn-champagne py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Kiểm Tra Tình Trạng</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          GIỚI THIỆU & ĐIỂM NỔI BẬT (Strategic Position & Service)
          ========================================================== */}
      <section id="gioi-thieu" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Vị Thế Khác Biệt Tại Thành Phố Cà Mau
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white text-balance">
              Điểm Dừng Chân Lý Tưởng Giữa Lòng Trung Tâm
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              So với các cơ sở lưu trú và nhà hàng đơn thuần tại Cà Mau, Ánh Nguyệt tự hào mang đến tổ hợp nghỉ dưỡng 4 sao trọn gói với vị trí đắc địa và tiêu chuẩn dịch vụ vượt trội.
            </p>
          </div>

          {/* Highlights Bento-grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS_DATA.map((item) => (
              <div
                key={item.number}
                className="liquid-glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="font-display text-2xl font-bold text-gradient-gold">
                      {item.number}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Ưu Thế
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-lg font-bold font-display text-white tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {item.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Comparison Banner */}
          <div className="mt-12 liquid-glass p-6 sm:p-8 rounded-3xl border border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Trải Nghiệm Chuẩn Mực
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Tại Sao Khách Doanh Nghiệp & Gia Đình Luôn Chọn Ánh Nguyệt?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Cách bến xe và sân bay chỉ 5 phút di chuyển. Xe ô tô 16-45 chỗ đỗ xe thoải mái tại bãi riêng có bảo vệ 24/24. Tận hưởng bữa sáng buffet địa phương và ăn tối cua Cà Mau ngay trong khách sạn mà không cần di chuyển tìm quán xa.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => handleOpenBooking('room')}
                  className="liquid-btn-champagne py-3 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-center cursor-pointer"
                >
                  Đặt Phòng Trực Tiếp
                </button>
                <a
                  href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`}
                  className="liquid-btn-ghost py-3 px-5 rounded-2xl text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Tư Vấn Hotline: {HOTEL_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          BẢNG PHÒNG & SUITES VIP
          ========================================================== */}
      <section id="phong-nghi" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0d1219]/60">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
                Không Gian Lưu Trú Thượng Lưu
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
                Hệ Thống Phòng Nghỉ & Suites VIP
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Mỗi căn phòng tại Ánh Nguyệt đều được trang bị hệ thống kính cách âm hai lớp, nệm cao su non êm ái và phòng tắm kính phong cách hiện đại.
            </p>
          </div>

          {/* Rooms Grid - Hiển thị 3 cột chuẩn */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="liquid-glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Room Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    
                    {room.isPopular && (
                      <div className="absolute top-3.5 left-3.5 py-1 px-3 rounded-xl bg-[#d4af37] text-black text-xs font-semibold shadow-md">
                        Hạng Phòng VIP Yêu Thích
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-neutral-200">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15">
                        {room.area}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15">
                        {room.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div>
                        <span className="text-[11px] text-[#d4af37] font-semibold uppercase tracking-wider block">
                          {room.category}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                          {room.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-base sm:text-lg font-bold text-[#d4af37] font-display tabular-nums">
                          {room.pricePerNight.toLocaleString('vi-VN')}đ
                        </span>
                        <span className="text-[10px] text-neutral-400 block">/ đêm</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 line-clamp-2 mb-3.5 leading-relaxed font-light">
                      {room.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-3 border-t border-white/10">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Room Card Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => handleOpenBooking('room', room.id)}
                    className="w-full liquid-btn-champagne py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Đặt Hạng Phòng Này</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Card 5: Ưu Đãi Khách Đoàn & Doanh Nghiệp (Hoàn thiện lưới 3 cột cân đối) */}
            <div className="liquid-glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-white/5 to-[#d4af37]/5">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-[#d4af37] font-semibold uppercase tracking-wider block">
                  Dành Cho Đoàn & Công Ty
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                  Chính Sách Khách Đoàn Doanh Nghiệp
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                  Chiết khấu đặc biệt khi đặt từ 5 phòng trở lên. Cung cấp đầy đủ hợp đồng, xuất hóa đơn VAT điện tử nhanh chóng, hỗ trợ phòng hội nghị và xe đón tiễn sân bay Cà Mau.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Chiết khấu trực tiếp theo số lượng phòng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Hóa đơn VAT và thủ tục công tác chuẩn chỉnh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Miễn phí vé trải nghiệm hồ bơi ngoài trời</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href={`tel:${HOTEL_INFO.phoneMobile.replace(/\s+/g, '')}`}
                  className="w-full liquid-btn-ghost py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline Quản Lý: {HOTEL_INFO.phoneMobile}</span>
                </a>
              </div>
            </div>

            {/* Card 6: Đặt Phòng Trực Tiếp - Giá Tốt Nhất (Hoàn thiện lưới 3 cột cân đối) */}
            <div className="liquid-glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-white/5 to-emerald-500/5">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider block">
                  Đảm Bảo Quyền Lợi Khách Hàng
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                  Cam Kết Giá Trực Tiếp Tốt Nhất
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                  Đặt phòng trực tiếp tại Khách sạn Ánh Nguyệt để nhận mức giá ưu đãi nhất không qua trung gian. Giữ phòng chỉ trong 3 phút, linh hoạt nhận phòng sớm và hỗ trợ 24/7.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hotline Lễ Tân 24/7: {HOTEL_INFO.hotline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Nhận phòng nhanh chóng chỉ cần đọc số điện thoại</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Vị trí trung tâm đại lộ Phan Ngọc Hiển, TP. Cà Mau</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`}
                  className="w-full liquid-btn-champagne py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi Lễ Tân Giữ Phòng Ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          ẨM THỰC ĐẶC SẢN & BÁO GIÁ NHÀ HÀNG ÁNH NGUYỆT 
          (Nguồn chính thức: https://anhnguyethotel.com/our-menus/)
          ========================================================== */}
      <section id="dac-san" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Mỹ Vị Đất Mũi & Báo Giá Thực Đơn 2025
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white text-balance">
              Nhà Hàng Ẩm Thực Ánh Nguyệt
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Chuyên phục vụ cơm đoàn du lịch, công tác, tiệc hải sản Cua Năm Căn tươi sống và sự kiện hội nghị với thực đơn phong phú từ 110.000đ/khách.
            </p>
          </div>

          {/* Sub-Tabs Switcher for Restaurant Sections */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setRestaurantSubTab('quotation')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                restaurantSubTab === 'quotation'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89325] text-black shadow-lg shadow-[#d4af37]/25'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Báo Giá Cơm Đoàn (110K - 250K)</span>
            </button>
            <button
              onClick={() => setRestaurantSubTab('scans')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                restaurantSubTab === 'scans'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89325] text-black shadow-lg shadow-[#d4af37]/25'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Bản Scan Thực Đơn Niêm Yết (6 Trang Gốc)</span>
            </button>
            <button
              onClick={() => setRestaurantSubTab('alacarte')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                restaurantSubTab === 'alacarte'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89325] text-black shadow-lg shadow-[#d4af37]/25'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Món Đặc Sản Gọi Món (A La Carte)</span>
            </button>
          </div>

          {/* TAB 1: BÁO GIÁ CƠM ĐOÀN CHI TIẾT (Theo nguồn https://anhnguyethotel.com/our-menus/) */}
          {restaurantSubTab === 'quotation' && (
            <div className="space-y-10 animate-in fade-in duration-300">
              {/* Official Commitment Banner */}
              <div className="liquid-glass p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#121820] to-[#0c1016]">
                <div className="max-w-3xl">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 mb-3">
                    Thông Điệp Từ Nhà Hàng Ánh Nguyệt
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                    NHÀ HÀNG ÁNH NGUYỆT – CHUYÊN PHỤC VỤ CƠM ĐOÀN CHẤT LƯỢNG – GIÁ HỢP LÝ
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                    Tọa lạc tại trung tâm TP. Cà Mau, Nhà hàng Ánh Nguyệt là điểm đến lý tưởng cho các đoàn khách du lịch, công ty, học sinh – sinh viên, và các tour lữ hành. Chúng tôi chuyên phục vụ cơm đoàn số lượng lớn với thực đơn đa dạng, món ăn phong phú, đậm đà hương vị miền Tây Nam Bộ.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Không gian rộng rãi, thoáng mát, sức chứa hàng trăm khách</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Phục vụ nhanh chóng, chuyên nghiệp, đúng giờ theo lịch trình</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Thực đơn linh hoạt, có thể đặt trước theo yêu cầu đặc biệt</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Giá cả cạnh tranh từ 110K – 250K/suất, chất lượng đảm bảo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Tier Selector & Live Quotation Calculator */}
              <div className="liquid-glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
                      1. Chọn Mức Giá Suất Ăn Đoàn
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      Bảng Giá Niêm Yết Theo Suất (VNĐ / Khách)
                    </h4>
                  </div>

                  {/* Calculator Control */}
                  <div className="flex flex-wrap items-center gap-3 bg-black/40 p-3 rounded-2xl border border-white/10">
                    <span className="text-xs text-neutral-300 font-medium">Số lượng khách đoàn:</span>
                    <div className="flex items-center gap-1.5">
                      {[10, 20, 30, 50, 100].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setCalcPaxCount(num)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            calcPaxCount === num
                              ? 'bg-[#d4af37] text-black'
                              : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                          }`}
                        >
                          {num} khách
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={calcPaxCount}
                      onChange={(e) => setCalcPaxCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-white text-center font-bold focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Price Tier Pills */}
                <div className="flex flex-wrap gap-2 pt-6 pb-4">
                  {SET_MENUS_DATA.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedSetMenuId(pkg.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedSetMenuId === pkg.id
                          ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 scale-105'
                          : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {pkg.priceFormatted} / khách
                    </button>
                  ))}
                </div>

                {/* Quotation Summary Card for Selected Tier */}
                {(() => {
                  const currentPkg = SET_MENUS_DATA.find((p) => p.id === selectedSetMenuId) || SET_MENUS_DATA[4];
                  const totalEstimated = currentPkg.pricePerPax * calcPaxCount;
                  return (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#d4af37]/15 to-transparent border border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                            Dự Toán Chi Phí Tạm Tính ({calcPaxCount} Khách)
                          </div>
                          <div className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                            {totalEstimated.toLocaleString('vi-VN')} đ
                            <span className="text-xs text-neutral-400 font-normal ml-2">
                              ({currentPkg.priceFormatted} x {calcPaxCount} khách)
                            </span>
                          </div>
                          <div className="text-[11px] text-neutral-400 mt-1">
                            {currentPkg.note}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleOpenBooking('table', undefined, `Cơm đoàn ${currentPkg.priceFormatted} (${calcPaxCount} khách)`)}
                            className="liquid-btn-champagne px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer shadow-md flex items-center gap-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Đặt Suất Ăn Này Ngay</span>
                          </button>
                          <a
                            href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`}
                            className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#d4af37] bg-white/5 hover:bg-white/10 border border-[#d4af37]/30 whitespace-nowrap flex items-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Tư Vấn: {HOTEL_INFO.hotline}</span>
                          </a>
                        </div>
                      </div>

                      {/* Detail Sets of this tier */}
                      <div>
                        <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-4 flex items-center justify-between">
                          <span>Các Thực Đơn Thuộc Mức Giá {currentPkg.priceFormatted}:</span>
                          <span className="text-neutral-500 text-[11px]">Đã bao gồm Cơm trắng + Trái cây + Trà đá</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {currentPkg.sets.map((set, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                                  <span className="font-display font-bold text-sm text-[#d4af37]">
                                    {set.setName}
                                  </span>
                                  <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md">
                                    {set.dishes.length} món
                                  </span>
                                </div>
                                <ul className="space-y-2 text-xs text-neutral-200">
                                  {set.dishes.map((dish, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-2">
                                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                                      <span className="leading-snug">{dish}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleOpenBooking('table', undefined, `Cơm đoàn ${currentPkg.priceFormatted} - ${set.setName}`)}
                                className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-[#d4af37]/20 hover:text-[#d4af37] border border-white/10 text-[11px] font-semibold text-neutral-300 transition-colors cursor-pointer"
                              >
                                Chọn {set.setName}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* TAB 2: BẢN SCAN THỰC ĐƠN GỐC TỪ WEBSITE (6 Trang Chính Thức) */}
          {restaurantSubTab === 'scans' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                  Tài Liệu Niêm Yết Chính Thức 2025
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  6 Trang Scan Thực Đơn Gốc Nhà Hàng Ánh Nguyệt
                </h3>
                <p className="text-xs text-neutral-400 mt-2">
                  Bản scan trực tiếp được đăng tải tại website chính thức anhnguyethotel.com/our-menus/. Quý khách bấm vào từng trang để phóng to xem rõ nét chi tiết từng món ăn.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ORIGINAL_MENU_SCANS.map((scan) => (
                  <div
                    key={scan.page}
                    className="liquid-glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Scan Preview Image */}
                      <div 
                        onClick={() => setActiveScanPage(scan)}
                        className="relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer"
                      >
                        <img
                          src={scan.imageUrl}
                          alt={scan.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-black/80 text-[#d4af37] text-xs font-bold border border-[#d4af37]/40 flex items-center gap-1.5 shadow-xl">
                            <ZoomIn className="w-4 h-4" />
                            <span>Phóng To Bản Gốc</span>
                          </span>
                        </div>
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md text-[#d4af37] text-xs font-bold border border-white/10">
                          Trang {scan.page}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                          {scan.priceRange}
                        </div>
                      </div>

                      {/* Detail Info */}
                      <div className="p-5">
                        <h4 className="font-display text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                          {scan.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-2 line-clamp-3 leading-relaxed font-light">
                          {scan.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveScanPage(scan)}
                        className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-200 border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Xem Bản Rõ Nét</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenBooking('table', undefined, `Đặt tiệc theo ${scan.title} (${scan.priceRange})`)}
                        className="px-3.5 py-2 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-xs font-bold text-[#d4af37] border border-[#d4af37]/30 cursor-pointer transition-colors"
                      >
                        Đặt Ngay
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MÓN ĐẶC SẢN GỌI MÓN (A LA CARTE) */}
          {restaurantSubTab === 'alacarte' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Filter Tabs for A La Carte */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {[
                  { id: 'all', label: 'Tất Cả Món Ngon' },
                  { id: 'crab', label: 'Cua Cà Mau Trứ Danh' },
                  { id: 'seafood', label: 'Hải Sản Đất Mũi' },
                  { id: 'local', label: 'Món Đồng & Lẩu Mắm' },
                  { id: 'banquet', label: 'Set Yến Tiệc VIP' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setMenuFilter(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      menuFilter === tab.id
                        ? 'bg-[#d4af37] text-black font-semibold shadow-lg shadow-[#d4af37]/20'
                        : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenu.map((item) => (
                  <div
                    key={item.id}
                    className="liquid-glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Dish Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {item.badge && (
                          <div className="absolute top-3 left-3 py-1 px-2.5 rounded-lg bg-[#d4af37] text-black text-[11px] font-semibold shadow-sm">
                            {item.badge}
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-200">
                          <span className="text-[11px] text-[#f4e8d0] font-medium">
                            {item.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Dish Info */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-display text-base font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <div className="text-right whitespace-nowrap">
                            <span className="text-sm font-bold text-[#d4af37] font-display tabular-nums">
                              {item.price}
                            </span>
                            <span className="text-[10px] text-neutral-400 block">{item.unit}</span>
                          </div>
                        </div>

                        <p className="text-xs text-neutral-300 leading-relaxed font-light line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        onClick={() => handleOpenBooking('table', undefined, item.name)}
                        className="w-full liquid-btn-ghost py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:border-[#d4af37]/40"
                      >
                        <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Đặt Bàn Thưởng Thức Món Này</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restaurant Booking Callout Banner */}
          <div className="mt-12 liquid-glass p-6 sm:p-8 rounded-3xl border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                Phục Vụ Cơm Đoàn & Tiệc Gia Đình
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Quý Khách Cần Đặt Phòng Lạnh VIP Hoặc Tiệc Cua Số Lượng Lớn?
              </h3>
              <p className="text-xs text-neutral-300">
                Nhà hàng Ánh Nguyệt có 8 phòng ăn riêng tư từ 8 đến 40 khách, sảnh tiệc 500 khách, phục vụ âm thanh và karaoke hiện đại.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenBooking('table')}
                className="liquid-btn-champagne px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer shadow-lg shadow-[#d4af37]/20"
              >
                Đặt Bàn / Phòng VIP Ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          THƯ VIỆN HÌNH ẢNH & GALLERY CHÍNH THỨC
          (Toàn bộ hình ảnh thực tế từ website https://anhnguyethotel.com)
          ========================================================== */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#090d12]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Hình Ảnh Thực Tế Từ Website Anhnguyethotel.com
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Thư Viện Ảnh Khách Sạn & Nhà Hàng Ánh Nguyệt
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Trọn bộ hình ảnh thực tế không gian phòng nghỉ, ẩm thực đặc sản Cà Mau, sảnh tiệc cưới hội nghị, hồ bơi ngoài trời và 6 trang scan thực đơn gốc năm 2025.
            </p>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: `Tất Cả Ảnh (${HOTEL_GALLERY_IMAGES.length})` },
              { id: 'rooms', label: 'Phòng Nghỉ & Khách Sạn' },
              { id: 'restaurant', label: 'Nhà Hàng & Món Ăn' },
              { id: 'menus', label: 'Bảng Thực Đơn Niêm Yết' },
              { id: 'events', label: 'Hội Nghị & Tiệc Cưới' },
              { id: 'pool', label: 'Hồ Bơi & Tiện Ích' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  galleryFilter === tab.id
                    ? 'bg-[#d4af37] text-black font-semibold shadow-lg shadow-[#d4af37]/20'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Images Grid - 3 Cột Chuẩn */}
          {(() => {
            const displayImages = galleryFilter === 'all'
              ? HOTEL_GALLERY_IMAGES
              : HOTEL_GALLERY_IMAGES.filter((img) => img.category === galleryFilter);

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayImages.map((img, index) => (
                  <div
                    key={img.id}
                    onClick={() => setActiveLightboxIndex(index)}
                    className="liquid-glass-card rounded-3xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                        <img
                          src={img.imageUrl}
                          alt={img.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-[11px] font-semibold text-[#d4af37] border border-white/15">
                          {img.categoryLabel}
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                          <span className="w-12 h-12 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center shadow-xl">
                            <ZoomIn className="w-6 h-6" />
                          </span>
                        </div>
                      </div>

                      {/* Image Caption */}
                      <div className="p-5">
                        <h4 className="font-display text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                          {img.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-2 line-clamp-2 leading-relaxed font-light">
                          {img.caption}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 pt-3">
                      <span className="text-[11px] text-[#d4af37] flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Xem chi tiết ảnh</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* MODAL: Phóng To Bản Scan Thực Đơn Niêm Yết */}
      {activeScanPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#10151c] border border-white/15 rounded-3xl p-5 sm:p-6 overflow-y-auto flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  Bản Scan Gốc Năm 2025 (Trang {activeScanPage.page})
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {activeScanPage.title} — {activeScanPage.priceRange}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveScanPage(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image */}
            <div className="flex-1 overflow-auto rounded-2xl bg-black/60 border border-white/10 p-2 flex items-center justify-center">
              <img
                src={activeScanPage.fullImageUrl || activeScanPage.imageUrl}
                alt={activeScanPage.title}
                className="max-h-[65vh] w-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Description & Footer Actions */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-neutral-300 max-w-md font-light leading-relaxed">
                {activeScanPage.description}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Gọi Lễ Tân: {HOTEL_INFO.hotline}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const page = activeScanPage;
                    setActiveScanPage(null);
                    handleOpenBooking('table', undefined, `Đặt tiệc ${page.title} (${page.priceRange})`);
                  }}
                  className="liquid-btn-champagne px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer shadow-md"
                >
                  Đặt Bàn Theo Thực Đơn Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL LIGHTBOX: Duyệt Xem Bộ Sưu Tập Ảnh Gallery Toàn Màn Hình */}
      {activeLightboxIndex !== null && (() => {
        const displayImages = galleryFilter === 'all'
          ? HOTEL_GALLERY_IMAGES
          : HOTEL_GALLERY_IMAGES.filter((img) => img.category === galleryFilter);
        const currentImg = displayImages[activeLightboxIndex] || displayImages[0];

        const handlePrev = () => {
          setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayImages.length - 1));
        };

        const handleNext = () => {
          setActiveLightboxIndex((prev) => (prev !== null && prev < displayImages.length - 1 ? prev + 1 : 0));
        };

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-neutral-300 hover:text-white border border-white/15 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black border border-white/15 transition-all cursor-pointer"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black border border-white/15 transition-all cursor-pointer"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center">
              <div className="relative overflow-hidden rounded-2xl bg-black border border-white/10 max-h-[72vh] flex items-center justify-center">
                <img
                  src={currentImg.imageUrl}
                  alt={currentImg.title}
                  className="max-h-[72vh] w-auto object-contain rounded-2xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption and details below */}
              <div className="w-full max-w-2xl mt-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#d4af37]/20 text-[#d4af37] font-semibold border border-[#d4af37]/30">
                      {currentImg.categoryLabel}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {activeLightboxIndex + 1} / {displayImages.length}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-white mt-1">
                    {currentImg.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-light mt-0.5">
                    {currentImg.caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveLightboxIndex(null);
                    if (currentImg.category === 'rooms') {
                      handleOpenBooking('room');
                    } else {
                      handleOpenBooking('table', undefined, currentImg.title);
                    }
                  }}
                  className="liquid-btn-champagne px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer shadow-md shrink-0 mx-auto sm:mx-0"
                >
                  {currentImg.category === 'rooms' ? 'Đặt Phòng Ngay' : 'Đặt Bàn Ngay'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ==========================================================
          TIỆN ÍCH KHÁCH SẠN & SỰ KIỆN (Bento Glass Grid)
          ========================================================== */}
      <section id="tien-ich" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0c1016]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Dịch Vụ Khép Kín 4 Sao
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Tiện Nghi Hoàn Hảo Cho Kỳ Nghỉ Đáng Nhớ
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Mọi nhu cầu từ thư giãn bên làn nước mát, tổ chức sự kiện trọng đại đến khám phá các danh thắng Cà Mau đều được phục vụ tận tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Hồ bơi ngoài trời */}
            <div className="liquid-glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-5">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Hồ Bơi Sân Vườn Ngoài Trời
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Làn nước trong xanh giữa không gian cây xanh miền nhiệt đới. Nơi thư giãn lý tưởng sau chuyến đi dài hoặc sau ngày làm việc căng thẳng tại Cà Mau.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#d4af37] font-medium">
                Mở cửa: 06:00 - 21:00 hàng ngày (Miễn phí cho khách lưu trú)
              </div>
            </div>

            {/* Bento Card 2: Trung tâm hội nghị & Tiệc cưới */}
            <div className="liquid-glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-5">
                  <Wine className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Trung Tâm Hội Nghị & Sảnh Tiệc 500 Khách
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Hệ thống màn hình LED cỡ lớn, âm thanh ánh sáng hiện đại cùng thực đơn yến tiệc sang trọng. Địa điểm tin cậy cho đại hội, hội thảo và tiệc cưới hàng đầu.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#d4af37] font-medium">
                Sức chứa linh hoạt từ 50 đến 500 khách
              </div>
            </div>

            {/* Bento Card 3: Xe đưa đón & Tour Mũi Cà Mau */}
            <div className="liquid-glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Đưa Đón Sân Bay & Tour Đất Mũi
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Hỗ trợ xe đưa đón riêng từ Sân bay Cà Mau hoặc Bến xe về khách sạn. Tư vấn và kết nối tour ca nô lướt sóng xuyên rừng ngập mặn tới Cột mốc tọa độ Quốc gia.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#d4af37] font-medium">
                Xe đời mới 7 - 16 - 29 chỗ phục vụ theo yêu cầu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TIN TỨC & CẨM NANG DU LỊCH CÀ MAU (TỰ ĐỘNG CÀO RSS & SEO)
          ========================================================== */}
      <NewsSection onNavigateToNews={() => { window.location.hash = '/tin-tuc'; }} />

      {/* ==========================================================
          ĐÁNH GIÁ KHÁCH HÀNG (Claim-to-Proof Adjacency)
          ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Cảm Nhận Thực Tế
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Sự Hài Lòng Của Quý Thực Khách & Du Khách
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={index}
                className="liquid-glass p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#d4af37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-neutral-400">{t.title}</div>
                  </div>
                  <span className="text-[11px] text-neutral-500">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          VỊ TRÍ CHIẾN LƯỢC & BẢN ĐỒ GOOGLE MAPS
          ========================================================== */}
      <section id="vi-tri" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0b0e13]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Tọa Độ Trung Tâm TP. Cà Mau
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mt-1">
                  Địa Chỉ Thuận Tiện Bậc Nhất
                </h2>
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                  Nằm ngay trên mặt tiền đại lộ Phan Ngọc Hiển - trục đường chính sầm uất quy tụ các cơ quan ban ngành, ngân hàng, điểm mua sắm tấp nập của TP. Cà Mau.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">Địa chỉ chính xác</div>
                    <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                      {HOTEL_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">Điện thoại đặt phòng & bàn tiệc</div>
                    <div className="text-xs sm:text-sm text-[#d4af37] font-semibold mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`} className="hover:underline">
                        Lễ Tân: {HOTEL_INFO.hotline}
                      </a>
                      <span className="text-neutral-500">·</span>
                      <a href={`tel:${HOTEL_INFO.phoneMobile.replace(/\s+/g, '')}`} className="hover:underline">
                        Quản Lý: {HOTEL_INFO.phoneMobile}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">Email liên hệ công việc & sự kiện</div>
                    <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                      {HOTEL_INFO.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-btn-champagne px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Mở Chỉ Đường Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="lg:col-span-7">
              <div className="liquid-glass p-3 rounded-3xl border border-white/15 overflow-hidden shadow-2xl relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  {/* Google Maps Embed iframe for Ca Mau location */}
                  <iframe
                    title="Bản đồ chỉ đường Khách sạn Ánh Nguyệt Cà Mau"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.5684534571936!2d105.15024227495574!3d9.176881990890693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1490218b0c2e3%3A0x6b8f322ea1ba70cf!2zMjA3IFBoYW4gTmfhu41jIEhp4buDbiwgUGjGsOG7nW5nIDYsIFRow6BuaCBwaOG7kSBDw6AgTWF1LCBDw6AgTWF1!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  {/* Floating Marker Badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#0b0f14]/90 backdrop-blur-xl border border-[#d4af37]/40 shadow-xl max-w-xs pointer-events-none">
                    <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-xs">
                      <MapPin className="w-4 h-4" />
                      <span>Ánh Nguyệt Hotel & Dining</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-1">
                      207 Phan Ngọc Hiển, Phường Tân Thành, Tỉnh Cà Mau
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          FOOTER & SCHEMA LOCALBUSINESS
          ========================================================== */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#07090d] text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand Wordmark & Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8a6814] p-0.5 flex items-center justify-center">
                  <div className="w-full h-full bg-[#0b0f14] rounded-[10px] flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-[#d4af37]">AN</span>
                  </div>
                </div>
                <div className="font-display font-bold text-base text-white tracking-wide">
                  ÁNH NGUYỆT CÀ MAU
                </div>
              </div>
              <p className="text-xs leading-relaxed text-neutral-400">
                Tổ hợp Khách sạn tiêu chuẩn 4 sao & Nhà hàng ẩm thực đặc sản Cua Cà Mau số một tại trung tâm thành phố.
              </p>
              <div className="text-[11px] text-neutral-500">
                Giờ mở cửa: Phục vụ 24/7 (Phòng nghỉ) · 06:00 - 23:00 (Nhà hàng)
              </div>
            </div>

            {/* Col 2: Navigation Mirror */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white">
                Khám Phá Nhanh
              </div>
              <ul className="space-y-2 text-xs">
                <li><a href="#gioi-thieu" className="hover:text-[#d4af37] transition-colors">Về Ánh Nguyệt</a></li>
                <li><a href="#phong-nghi" className="hover:text-[#d4af37] transition-colors">Bảng Phòng & Giá Suites</a></li>
                <li><a href="#dac-san" className="hover:text-[#d4af37] transition-colors">Thực Đơn Cua Cà Mau Tươi Sống</a></li>
                <li><a href="#tien-ich" className="hover:text-[#d4af37] transition-colors">Hồ Bơi & Hội Nghị 500 Khách</a></li>
                <li><a href="#vi-tri" className="hover:text-[#d4af37] transition-colors">Vị Trí & Bản Đồ Google Maps</a></li>
              </ul>
            </div>

            {/* Col 3: Specialties */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white">
                Món Ngon Không Thể Bỏ Lỡ
              </div>
              <ul className="space-y-2 text-xs">
                <li>Cua Năm Căn Cà Mau gạch son hấp bia</li>
                <li>Cua rang me cốt dừa béo bùi ăn kèm bánh mì</li>
                <li>Cá thòi lòi nướng than hồng muối ớt xiêm</li>
                <li>Lẩu mắm U Minh 16 loại rau rừng ngập mặn</li>
                <li>Tôm đất nướng mọi chấm muối tiêu chanh</li>
              </ul>
            </div>

            {/* Col 4: Liên hệ & Hỗ trợ đặt chỗ */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white">
                Hỗ Trợ Trực Tiếp
              </div>
              <p className="text-xs text-neutral-300">
                Hotline Lễ Tân: <a href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`} className="text-[#d4af37] font-semibold hover:underline">{HOTEL_INFO.hotline}</a>
              </p>
              <p className="text-xs text-neutral-300">
                Hotline Quản Lý: <a href={`tel:${HOTEL_INFO.phoneMobile.replace(/\s+/g, '')}`} className="text-[#d4af37] font-semibold hover:underline">{HOTEL_INFO.phoneMobile}</a>
              </p>
              <p className="text-xs text-neutral-300">
                Email: <a href="mailto:anhnguyethotel@gmail.com" className="text-[#d4af37] hover:underline font-semibold">anhnguyethotel@gmail.com</a>
              </p>
              <p className="text-xs text-neutral-300">
                Địa chỉ: 207 Phan Ngọc Hiển, Phường Tân Thành, Tỉnh Cà Mau
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleOpenBooking('room')}
                  className="w-full liquid-btn-champagne py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Đặt Phòng Trực Tuyến
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <div>
              © 2026 Nhà hàng & Khách sạn Ánh Nguyệt. Bảo lưu mọi quyền.
            </div>
            <div className="flex items-center gap-4">
              <span>Chính sách bảo mật</span>
              <span>·</span>
              <span>Điều khoản đặt phòng</span>
              <span>·</span>
              <span>Hotline 24/7: {HOTEL_INFO.hotline}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTab={bookingType}
        selectedRoomId={selectedRoomId}
        selectedDishName={selectedDishName}
      />
    </div>
  );
}
