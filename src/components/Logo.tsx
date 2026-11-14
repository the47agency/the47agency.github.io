import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'symbol-only';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-neutral-900' : 'text-white';
  const strokeColor = isLight ? '#0F172A' : '#FFFFFF';

  // Dimension scaling strictly preserving authentic 1.463:1 ratio
  const dimensions = {
    sm: { symbolW: 38, symbolH: 26, textSize: 'text-xs', tracking: 'tracking-[0.34em]', gap: 'gap-3' },
    md: { symbolW: 47, symbolH: 32, textSize: 'text-sm', tracking: 'tracking-[0.38em]', gap: 'gap-3.5' },
    lg: { symbolW: 60, symbolH: 41, textSize: 'text-base', tracking: 'tracking-[0.42em]', gap: 'gap-4' },
    xl: { symbolW: 98, symbolH: 67, textSize: 'text-xl', tracking: 'tracking-[0.45em]', gap: 'gap-5' },
  }[size];

  // Authentic Geometric 47 Mark with exact master brand angles and aspect ratio
  const symbol = (
    <svg
      width={dimensions.symbolW}
      height={dimensions.symbolH}
      viewBox="0 0 980 670"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="shrink-0 transition-transform duration-300"
      aria-label="47 Agency Symbol"
    >
      <defs>
        {/* Core Electric Violet & Neon Purple Facet Fold */}
        <linearGradient id="logoFacetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="45%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>

        <filter id="logoGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="8" floodColor="#8B5CF6" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#logoGlow)">
        {/* 4 Diagonal Bar (45-degree angle parallelogram) */}
        <polygon
          points="440,0 440,160 160,440 0,440"
          fill={strokeColor}
        />

        {/* 4 Top Vertical Stem */}
        <polygon
          points="470,0 530,0 530,160 470,160"
          fill={strokeColor}
        />

        {/* Signature Folded Purple / Violet Facet */}
        <polygon
          points="470,160 530,160 530,520 360,670 360,270"
          fill="url(#logoFacetGradient)"
        />

        {/* 7 Top Bar & Diagonal Cut */}
        <polygon
          points="560,0 980,0 490,670 650,670 820,160 560,160"
          fill={strokeColor}
        />
      </g>
    </svg>
  );

  if (variant === 'symbol-only') {
    return <div className={`inline-flex items-center ${className}`}>{symbol}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 select-none ${className}`}>
        {symbol}
        <span
          className={`font-bold ${dimensions.textSize} uppercase ${textColor} ${dimensions.tracking} select-none leading-none`}
        >
          AGENCY
        </span>
      </div>
    );
  }

  // Horizontal variant (Standard Header & Footer)
  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none ${className}`}>
      {symbol}
      <span
        className={`font-bold ${dimensions.textSize} uppercase ${textColor} ${dimensions.tracking} select-none leading-none pt-0.5`}
      >
        AGENCY
      </span>
    </div>
  );
};
