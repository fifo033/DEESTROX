
import React from 'react';

interface HeroBackgroundProps {
  slideIndex: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ slideIndex }) => {
  const getBackgroundPattern = () => {
    switch (slideIndex) {
      case 0:
        return (
          <div className="absolute inset-0 opacity-30">
            {/* Enhanced geometric pattern for first slide */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 3px, transparent 3px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 2px, transparent 2px),
                radial-gradient(circle at 50% 10%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 40px 40px, 80px 80px'
            }}></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white/20 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Animated lines */}
            <div className="absolute top-10 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
            <div className="absolute bottom-10 right-1/3 w-40 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        );
      case 1:
        return (
          <div className="absolute inset-0 opacity-25">
            {/* Enhanced grid pattern for second slide */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 via-blue-700 to-purple-800"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 2px),
                linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 50px 50px, 25px 25px'
            }}></div>
            
            {/* Dynamic floating elements */}
            <div className="absolute top-24 right-24 w-28 h-28 bg-gradient-to-br from-white/20 to-white/10 transform rotate-12 animate-bounce rounded-lg"></div>
            <div className="absolute bottom-24 left-24 w-36 h-36 bg-gradient-to-tl from-white/15 to-white/5 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-white/20 rotate-45 animate-bounce" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-white/25 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/5 w-8 h-8 bg-white/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/5 w-12 h-12 bg-white/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-white/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return getBackgroundPattern();
};

export default HeroBackground;
