'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel, afterLabel }: BeforeAfterSliderProps) {
  const { t } = useLang();
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-luxury-lg group"
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => dragging.current && updatePos(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <img src={afterImage} alt={afterLabel || t('بعد', 'After')} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 end-4 glass-strong rounded-full px-3 py-1.5 text-xs font-semibold z-10">
        {afterLabel || t('بعد', 'After')}
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeImage}
          alt={beforeLabel || t('قبل', 'Before')}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }}
        />
        <div className="absolute top-4 start-4 glass-strong rounded-full px-3 py-1.5 text-xs font-semibold">
          {beforeLabel || t('قبل', 'Before')}
        </div>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass-strong shadow-luxury-lg flex items-center justify-center">
          <MoveHorizontal className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
