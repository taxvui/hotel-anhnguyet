/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import HomePage from './app/page';
import TinTucPage from './app/tin-tuc/page';
import DatPhongPage from './app/dat-phong/page';
import { BookingModal } from './components/BookingModal';
import { CalendarCheck, Phone } from 'lucide-react';
import { HOTEL_INFO } from './data/hotelData';

export type AppRoute = 'home' | 'tin-tuc' | 'dat-phong';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState<'room' | 'table'>('room');
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  // Sync hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/tin-tuc') || hash === '#tin-tuc-page') {
        setCurrentRoute('tin-tuc');
      } else if (hash.startsWith('#/dat-phong') || hash === '#dat-phong-page') {
        setCurrentRoute('dat-phong');
      } else if (hash === '#/' || hash === '#home') {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (route: AppRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (route === 'home') window.location.hash = '';
    else if (route === 'tin-tuc') window.location.hash = '/tin-tuc';
    else if (route === 'dat-phong') window.location.hash = '/dat-phong';
  };

  const handleOpenBooking = (tab: 'room' | 'table' = 'room') => {
    setBookingTab(tab);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f14] text-[#e8ecf1]">
      {/* Top Bar Navigation */}
      {currentRoute === 'home' && (
        <Navbar 
          onOpenBooking={handleOpenBooking}
          onNavigate={navigateTo}
          currentRoute={currentRoute}
        />
      )}

      {/* Main View Router */}
      <main>
        {currentRoute === 'home' && (
          <HomePage 
            onOpenBookingModal={handleOpenBooking}
          />
        )}

        {currentRoute === 'tin-tuc' && (
          <TinTucPage 
            onBackToHome={() => navigateTo('home')}
            onOpenBooking={(tab) => {
              handleOpenBooking(tab);
            }}
          />
        )}

        {currentRoute === 'dat-phong' && (
          <DatPhongPage 
            onBackToHome={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTab={bookingTab}
      />

      {/* Floating Speed Dial for Quick Customer Hotline & Direct Booking */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {/* Expanded hotline dropdown */}
        {isPhoneMenuOpen && (
          <div className="p-3 rounded-2xl bg-[#0f141c]/95 border border-white/15 backdrop-blur-xl shadow-2xl space-y-2 animate-in slide-in-from-bottom-2 duration-200 min-w-[220px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] px-2 pt-1">
              Hotline Trực Tiếp 24/7
            </div>
            <a
              href={`tel:${HOTEL_INFO.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-xs font-semibold text-neutral-100 hover:text-emerald-400 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <div>
                <div className="text-[10px] text-neutral-400">Lễ Tân (24/7)</div>
                <div className="font-bold text-white">{HOTEL_INFO.hotline}</div>
              </div>
            </a>
            <a
              href={`tel:${HOTEL_INFO.phoneMobile.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#d4af37]/20 text-xs font-semibold text-neutral-100 hover:text-[#d4af37] border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <div>
                <div className="text-[10px] text-neutral-400">Quản Lý Khách Sạn</div>
                <div className="font-bold text-white">{HOTEL_INFO.phoneMobile}</div>
              </div>
            </a>
          </div>
        )}

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
            className="liquid-glass w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 shadow-xl hover:scale-105 transition-all cursor-pointer"
            title="Hotline Lễ Tân & Quản Lý"
            aria-label="Hotline Lễ Tân và Quản Lý"
          >
            <Phone className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => handleOpenBooking('room')}
            className="liquid-btn-champagne w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl shadow-[#d4af37]/30 hover:scale-105 transition-all cursor-pointer"
            title="Đặt phòng & Đặt bàn nhanh"
            aria-label="Đặt phòng nhanh"
          >
            <CalendarCheck className="w-6 h-6 text-[#0b0f14]" />
          </button>
        </div>
      </div>
    </div>
  );
}
