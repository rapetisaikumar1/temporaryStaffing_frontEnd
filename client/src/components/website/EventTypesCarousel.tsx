"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft, ChevronRight,
  Briefcase, Star, Wine, TrendingUp, Award, BadgeCheck, Calendar, ShieldAlert,
} from 'lucide-react';

const CARD_GAP = 24; // gap-6

const eventTypes = [
  {
    name: 'Corporate Events & Conferences',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Music Festivals & Concerts',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Weddings & Private Parties',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Trade Shows & Expos',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sporting Events & Stadiums',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Brand Activations',
    icon: BadgeCheck,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Charity Galas & Fundraisers',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'VIP & Red Carpet Events',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  },
];

const TOTAL = eventTypes.length;

export default function EventTypesCarousel() {
  const indexRef = useRef(0);
  const [dotIndex, setDotIndex] = useState(0);
  const isHoveredRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /** Scroll to a card index. Uses instant DOM assignment to avoid animation on wrap. */
  const goToIndex = useCallback((index: number, instant = false) => {
    const el = scrollRef.current;
    if (!el || !el.children[0]) return;
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth + CARD_GAP;
    if (instant) {
      el.scrollLeft = index * cardWidth;
    } else {
      el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
    indexRef.current = index;
    setDotIndex(index);
  }, []);

  const goNext = useCallback(() => {
    const next = (indexRef.current + 1) % TOTAL;
    goToIndex(next, next === 0); // instant snap when wrapping from last → first
  }, [goToIndex]);

  const goPrev = useCallback(() => {
    const prev = (indexRef.current - 1 + TOTAL) % TOTAL;
    goToIndex(prev, prev === TOTAL - 1); // instant snap when wrapping from first → last
  }, [goToIndex]);

  // Auto-scroll every 2 seconds; pause while any card is hovered
  useEffect(() => {
    const id = setInterval(() => {
      if (!isHoveredRef.current) goNext();
    }, 2000);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <div>
      {/* Carousel row with side buttons */}
      <div className="relative flex items-center gap-3">
        {/* Prev button */}
        <button
          onClick={goPrev}
          aria-label="Previous event type"
          className="shrink-0 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-[#0033a0] transition-colors z-10"
        >
          <ChevronLeft className="h-5 w-5 text-[#0033a0]" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden flex-1"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          {eventTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Link
                key={type.name}
                href="/industries"
                className="group relative shrink-0 w-80 h-80 rounded-lg overflow-hidden border border-gray-200 hover:border-[#0033a0] hover:shadow-xl transition-all"
              >
                <img
                  src={type.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f41]/20 via-[#0b1f41]/45 to-[#0b1f41]/70" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-[#0033a0]" />
                  </div>
                  <span className="font-bold text-white text-xl leading-snug drop-shadow-sm">
                    {type.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          aria-label="Next event type"
          className="shrink-0 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-[#0033a0] transition-colors z-10"
        >
          <ChevronRight className="h-5 w-5 text-[#0033a0]" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {eventTypes.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === dotIndex ? 'w-6 bg-[#0033a0]' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
