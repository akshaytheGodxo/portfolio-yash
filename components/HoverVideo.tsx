"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type HoverVideoProps = {
  videoId: string;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export default function HoverVideo({
  videoId,
  isActive,
  onActivate,
  onDeactivate,
}: HoverVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const stop = useCallback(() => {
    setPlaying(false);
    setLoaded(false);
    onDeactivate();
  }, [onDeactivate]);

  const play = useCallback(() => {
    onActivate();
    setPlaying(true);
  }, [onActivate]);

  useEffect(() => {
    if (!isActive && playing) {
      setPlaying(false);
      setLoaded(false);
    }
  }, [isActive, playing]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const markTouch = () => { touchRef.current = true; };
    el.addEventListener("touchstart", markTouch, { passive: true });
    return () => el.removeEventListener("touchstart", markTouch);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`hover-video${playing ? " hover-video--playing" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={playing ? "Pause preview" : "Play preview"}
      onPointerEnter={() => { if (!touchRef.current) play(); }}
      onPointerLeave={() => { if (!touchRef.current) stop(); }}
      onClick={() => {
        if (!touchRef.current) return;
        if (playing) stop();
        else play();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (playing) stop();
          else play();
        }
      }}
    >
      <div className="hover-video__frame">
        <img
          src={thumbnail}
          alt=""
          className={`hover-video__poster${playing && loaded ? " hover-video__poster--hidden" : ""}`}
          loading="lazy"
          decoding="async"
        />
        {playing && (
          <iframe
            className={`hover-video__iframe${loaded ? " hover-video__iframe--visible" : ""}`}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${videoId}`}
            title="Video preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setLoaded(true)}
          />
        )}
        {!playing && (
          <span className="hover-video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
