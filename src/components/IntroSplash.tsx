import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, SkipForward, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

interface IntroSplashProps {
  videoSrc?: string;
  forceShow?: boolean;
  onComplete?: () => void;
}

const STORAGE_KEY = 'sealpro_intro_seen';

export const IntroSplash: React.FC<IntroSplashProps> = ({
  videoSrc = '/intro.mp4',
  forceShow = false,
  onComplete,
}) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Check if intro has already been seen or if forceShow is enabled
  useEffect(() => {
    try {
      const alreadySeen = localStorage.getItem(STORAGE_KEY);
      if (!alreadySeen || forceShow) {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }
    } catch {
      // If localStorage is unavailable, show on first render
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, [forceShow]);

  // Handle closing / skipping intro
  const handleClose = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }

    document.body.style.overflow = '';

    setTimeout(() => {
      setIsVisible(false);
      setIsFadingOut(false);
      if (onComplete) onComplete();
    }, 700);
  };

  // Keyboard shortcut listener (Escape key to skip)
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isFadingOut]);

  // Handle video playback
  useEffect(() => {
    if (!isVisible || !videoRef.current) return;

    const video = videoRef.current;
    video.muted = isMuted;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback, keep video ready
          setIsPlaying(false);
        });
    }
  }, [isVisible]);

  // Toggle Audio
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  // Manual Play if autoplay was blocked
  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      });
    }
  };

  // Time & Progress update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 0;
      setCurrentTime(current);
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Handle Video Error (Graceful exit so visitor is never blocked)
  const handleVideoError = () => {
    console.warn('Intro video could not be loaded or played. Transitioning to website.');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-[#0a0b0c] text-white transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="Animación de bienvenida"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#df0a1a]/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#df0a1a]/15 rounded-full blur-3xl"></div>
        {/* Subtle carbon grid pattern */}
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Seal Pro"
            className="h-9 md:h-11 w-auto object-contain drop-shadow-md"
          />
          <span className="hidden sm:inline-block h-6 w-px bg-neutral-800"></span>
          <span className="hidden sm:inline-block font-heading text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
            {t.intro.brandSubtitle}
          </span>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleClose}
          className="group flex items-center gap-2.5 bg-neutral-900/80 hover:bg-[#df0a1a] text-white text-xs font-heading font-bold px-4 py-2.5 border border-neutral-700 hover:border-[#df0a1a] shadow-industrial-black-sm transition-all duration-200 cursor-pointer backdrop-blur-md"
          title="Presiona ESC para saltar"
        >
          <span>{t.intro.skip}</span>
          <span className="hidden md:inline-block text-[10px] bg-neutral-800 group-hover:bg-black/40 px-1.5 py-0.5 rounded font-mono text-neutral-300 group-hover:text-white border border-neutral-700/50">
            {t.intro.skipKey}
          </span>
          <SkipForward className="w-4 h-4 text-[#df0a1a] group-hover:text-white transition-colors" />
        </button>
      </header>

      {/* Center Video Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-5xl max-h-[75vh] aspect-video bg-black/90 border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center group">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            autoPlay
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onEnded={handleClose}
            onError={handleVideoError}
            className="w-full h-full object-contain"
          />

          {/* Vignette Overlay for Cinematic Look */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] border border-white/5"></div>

          {/* Manual Play Overlay if Autoplay was blocked */}
          {!isPlaying && hasStarted && (
            <button
              onClick={handleManualPlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-[#df0a1a] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <p className="mt-3 font-heading text-xs uppercase tracking-widest text-neutral-300">
                Haga clic para reproducir
              </p>
            </button>
          )}
        </div>
      </main>

      {/* Bottom Controls & Progress Bar */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          {/* Audio Toggle Button */}
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white px-3.5 py-2 border border-neutral-700/80 transition-colors cursor-pointer backdrop-blur-sm"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#df0a1a]" />
                <span className="font-heading font-semibold text-[11px] uppercase tracking-wider">
                  {t.intro.unmute}
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="font-heading font-semibold text-[11px] uppercase tracking-wider">
                  {t.intro.mute}
                </span>
              </>
            )}
          </button>

          {/* Time Counter */}
          <div className="font-mono text-xs text-neutral-400 bg-neutral-900/60 px-3 py-1.5 border border-neutral-800">
            <span>{formatTime(currentTime)}</span>
            <span className="mx-1 text-neutral-600">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Cinematic Progress Bar */}
        <div className="w-full h-1.5 bg-neutral-900 rounded-none overflow-hidden border border-neutral-800/80 relative">
          <div
            className="h-full bg-gradient-to-r from-[#df0a1a] via-[#ff3b4b] to-[#df0a1a] transition-all duration-150 ease-linear shadow-[0_0_10px_#df0a1a]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </footer>
    </div>
  );
};
