import React from 'react';

const SvgBase = ({ children, size = 24, viewBox = '0 0 24 24', ...props }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

// ─── Service Icons ───

export const BoltIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#erp-grad)" fillOpacity="0.15" />
    <path d="M24 10L14 28h8l-2 10 12-18h-8l2-10z" fill="url(#erp-grad)" />
    <path d="M33 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" stroke="url(#erp-grad)" strokeWidth="1.5" fill="none" />
    <path d="M36 17h3M33 11v3" stroke="url(#erp-grad)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="erp-grad" x1="4" y1="4" x2="44" y2="44"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs>
  </svg>
);

export const GlobeIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="url(#web-grad)" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="8" ry="18" stroke="url(#web-grad)" strokeWidth="1.5" />
    <path d="M6 24h36" stroke="url(#web-grad)" strokeWidth="1.5" />
    <path d="M8 16h32M8 32h32" stroke="url(#web-grad)" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M14 9l2 2-2 2" stroke="url(#web-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 35l-2 2 2 2" stroke="url(#web-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3" fill="url(#web-grad)" fillOpacity="0.3" />
    <defs><linearGradient id="web-grad" x1="6" y1="6" x2="42" y2="42"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
  </svg>
);

export const SmartphoneIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="13" y="4" width="22" height="40" rx="4" stroke="url(#mob-grad)" strokeWidth="2" />
    <rect x="17" y="10" width="14" height="22" rx="1" fill="url(#mob-grad)" fillOpacity="0.12" />
    <circle cx="24" cy="38" r="2" fill="url(#mob-grad)" />
    <rect x="19" y="13" width="10" height="3" rx="1" fill="url(#mob-grad)" fillOpacity="0.4" />
    <rect x="19" y="18" width="6" height="2" rx="1" fill="url(#mob-grad)" fillOpacity="0.25" />
    <rect x="19" y="22" width="8" height="2" rx="1" fill="url(#mob-grad)" fillOpacity="0.25" />
    <rect x="19" y="26" width="5" height="2" rx="1" fill="url(#mob-grad)" fillOpacity="0.25" />
    <path d="M20 7h8" stroke="url(#mob-grad)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="mob-grad" x1="13" y1="4" x2="35" y2="44"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
  </svg>
);

export const GamepadIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14h16a10 10 0 0 1 10 10v2c0 4.418-3.582 8-8 8h-2l-3-4h-10l-3 4h-2c-4.418 0-8-3.582-8-8v-2a10 10 0 0 1 10-10z" fill="url(#game-grad)" fillOpacity="0.15" stroke="url(#game-grad)" strokeWidth="2" />
    <line x1="14" y1="24" x2="20" y2="24" stroke="url(#game-grad)" strokeWidth="2" strokeLinecap="round" />
    <line x1="17" y1="21" x2="17" y2="27" stroke="url(#game-grad)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="29" cy="22" r="1.5" fill="url(#game-grad)" />
    <circle cx="33" cy="26" r="1.5" fill="url(#game-grad)" />
    <circle cx="29" cy="26" r="1" fill="url(#game-grad)" fillOpacity="0.4" />
    <circle cx="33" cy="22" r="1" fill="url(#game-grad)" fillOpacity="0.4" />
    <defs><linearGradient id="game-grad" x1="6" y1="14" x2="42" y2="34"><stop stopColor="#fb923c" /><stop offset="1" stopColor="#ea580c" /></linearGradient></defs>
  </svg>
);

export const TrendingUpIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="34" width="6" height="8" rx="1" fill="url(#mkt-grad)" fillOpacity="0.3" />
    <rect x="17" y="28" width="6" height="14" rx="1" fill="url(#mkt-grad)" fillOpacity="0.5" />
    <rect x="26" y="22" width="6" height="20" rx="1" fill="url(#mkt-grad)" fillOpacity="0.7" />
    <rect x="35" y="14" width="6" height="28" rx="1" fill="url(#mkt-grad)" />
    <polyline points="8,26 18,18 28,22 42,8" stroke="url(#mkt-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polygon points="42,8 36,10 40,14" fill="url(#mkt-grad)" />
    <defs><linearGradient id="mkt-grad" x1="8" y1="8" x2="42" y2="42"><stop stopColor="#34d399" /><stop offset="1" stopColor="#059669" /></linearGradient></defs>
  </svg>
);

export const BriefcaseIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="40" height="24" rx="4" fill="url(#biz-grad)" fillOpacity="0.12" stroke="url(#biz-grad)" strokeWidth="2" />
    <path d="M18 16V12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" stroke="url(#biz-grad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 26h40" stroke="url(#biz-grad)" strokeWidth="1.5" strokeOpacity="0.4" />
    <rect x="20" y="23" width="8" height="6" rx="2" fill="url(#biz-grad)" />
    <circle cx="12" cy="24" r="1.5" fill="url(#biz-grad)" fillOpacity="0.4" />
    <circle cx="36" cy="24" r="1.5" fill="url(#biz-grad)" fillOpacity="0.4" />
    <defs><linearGradient id="biz-grad" x1="4" y1="8" x2="44" y2="40"><stop stopColor="#c084fc" /><stop offset="1" stopColor="#9333ea" /></linearGradient></defs>
  </svg>
);

// ─── UI Icons ───

export const ArrowRightIcon = (props) => (
  <SvgBase size={18} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </SvgBase>
);

export const CheckIcon = (props) => (
  <SvgBase size={16} {...props} stroke="none" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </SvgBase>
);

export const ScrollDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

// ─── Social Icons ───

export const TwitterIcon = (props) => (
  <SvgBase size={16} {...props} stroke="none" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </SvgBase>
);

export const LinkedinIcon = (props) => (
  <SvgBase size={16} {...props} stroke="none" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </SvgBase>
);

export const FacebookIcon = (props) => (
  <SvgBase size={16} {...props} stroke="none" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </SvgBase>
);

export const YoutubeIcon = (props) => (
  <SvgBase size={16} {...props} stroke="none" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </SvgBase>
);

// ─── Contact Icons ───

export const MailIcon = (props) => (
  <SvgBase size={16} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </SvgBase>
);

export const PhoneIcon = (props) => (
  <SvgBase size={16} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </SvgBase>
);

export const MapPinIcon = (props) => (
  <SvgBase size={16} {...props}>
    <path d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </SvgBase>
);

// ─── Why Choose Us Icons ───

export const PuzzleIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#puz-g)" fillOpacity="0.12" />
    <path d="M17 12h6v3a3 3 0 1 0 0 6v3h-6v-3a3 3 0 1 1 0-6v-3z" fill="url(#puz-g)" fillOpacity="0.4" />
    <path d="M14 12h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z" stroke="url(#puz-g)" strokeWidth="1.5" />
    <path d="M20 12v-2a2 2 0 1 1 4 0v2" stroke="url(#puz-g)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 20h2a2 2 0 1 1 0 4h-2" stroke="url(#puz-g)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="puz-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#c084fc" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs>
  </svg>
);

export const LayersIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#lay-g)" fillOpacity="0.12" />
    <path d="M20 10l10 5-10 5-10-5 10-5z" fill="url(#lay-g)" fillOpacity="0.3" stroke="url(#lay-g)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 20l10 5 10-5" stroke="url(#lay-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 25l10 5 10-5" stroke="url(#lay-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
    <defs><linearGradient id="lay-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
  </svg>
);

export const EyeOpenIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#eye-g)" fillOpacity="0.12" />
    <path d="M8 20s4-8 12-8 12 8 12 8-4 8-12 8-12-8-12-8z" stroke="url(#eye-g)" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="4" fill="url(#eye-g)" fillOpacity="0.3" stroke="url(#eye-g)" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="1.5" fill="url(#eye-g)" />
    <defs><linearGradient id="eye-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#34d399" /><stop offset="1" stopColor="#059669" /></linearGradient></defs>
  </svg>
);

export const TargetIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#tgt-g)" fillOpacity="0.12" />
    <circle cx="20" cy="20" r="10" stroke="url(#tgt-g)" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="6" stroke="url(#tgt-g)" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="20" cy="20" r="2.5" fill="url(#tgt-g)" />
    <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="url(#tgt-g)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="tgt-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#fb923c" /><stop offset="1" stopColor="#ea580c" /></linearGradient></defs>
  </svg>
);

export const HeadsetIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#hs-g)" fillOpacity="0.12" />
    <path d="M10 22v-4a10 10 0 0 1 20 0v4" stroke="url(#hs-g)" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="8" y="22" width="4" height="7" rx="2" fill="url(#hs-g)" fillOpacity="0.4" stroke="url(#hs-g)" strokeWidth="1.2" />
    <rect x="28" y="22" width="4" height="7" rx="2" fill="url(#hs-g)" fillOpacity="0.4" stroke="url(#hs-g)" strokeWidth="1.2" />
    <path d="M30 29v1a4 4 0 0 1-4 4h-3" stroke="url(#hs-g)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21" cy="34" r="1.5" fill="url(#hs-g)" />
    <defs><linearGradient id="hs-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
  </svg>
);

export const RocketIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#rkt-g)" fillOpacity="0.12" />
    <path d="M20 8c-4 6-4 14-1 18h2c3-4 3-12-1-18z" fill="url(#rkt-g)" fillOpacity="0.3" stroke="url(#rkt-g)" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="18" r="2" fill="url(#rkt-g)" />
    <path d="M15 26c-2 0-4 2-5 5 3-1 5-3 5-5z" fill="url(#rkt-g)" fillOpacity="0.5" stroke="url(#rkt-g)" strokeWidth="1" strokeLinejoin="round" />
    <path d="M25 26c2 0 4 2 5 5-3-1-5-3-5-5z" fill="url(#rkt-g)" fillOpacity="0.5" stroke="url(#rkt-g)" strokeWidth="1" strokeLinejoin="round" />
    <path d="M17 30h6" stroke="url(#rkt-g)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="rkt-g" x1="4" y1="4" x2="36" y2="36"><stop stopColor="#f472b6" /><stop offset="1" stopColor="#ec4899" /></linearGradient></defs>
  </svg>
);

// ─── Logo Icon ───

export const LogoIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
    <path d="M10 12v16M10 20h8M18 12v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 12v16h8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 20h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
    <defs><linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs>
  </svg>
);
