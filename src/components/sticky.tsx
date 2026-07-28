import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, Volume2, VolumeX } from "lucide-react";
import sound from "../assets/sound.mp3";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/princebusa",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/prince-busa",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/Prince_busa13",
    icon: Twitter,
  },
];

export default function Sticky({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play();

    const handleFirstClick = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick);

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative">
      <audio ref={audioRef} src={sound} loop muted />

      {/* Bottom frosted blur strip */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 backdrop-blur-md"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      <div className="pointer-events-none fixed bottom-5 right-4 z-50 flex flex-col items-center gap-2 sm:bottom-6 sm:right-6">
        <div className="flex flex-col gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--white)]/70 text-[var(--vast)] shadow-sm backdrop-blur-md transition-colors hover:border-[var(--dawn)] hover:text-[var(--dawn)]"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause background sound" : "Play background sound"}
          aria-pressed={isPlaying}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--white)]/70 text-[var(--vast)] shadow-sm backdrop-blur-md transition-colors hover:border-[var(--dawn)] hover:text-[var(--dawn)]"
        >
          {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </button>
      </div>
      {children}
    </div>
  );
}
