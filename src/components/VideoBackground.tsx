import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  className?: string;
  opacity?: number;
  overlayOpacity?: number;
}

export function VideoBackground({
  className = '',
  opacity = 0.6,
  overlayOpacity = 0.5,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback if needed
        });
      }
    }
  }, []);

  return (
    <div 
      className={`fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ opacity }}
      >
        <source src="/bucle_de_.mp4" type="video/mp4" />
      </video>

      {/* Dynamic gradient overlay to ensure contrast and seamless cyberpunk atmosphere */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#010401]/75 via-[#010401]/50 to-[#010401]/80"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
