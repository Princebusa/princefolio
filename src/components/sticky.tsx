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

      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
        <div className="flex flex-col gap-2 sm:gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--vast)] bg-[var(--lumen)] text-[var(--vast)] shadow-[4px_4px_0px_0px_#034f46] transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:h-12 sm:w-12"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause background sound" : "Play background sound"}
          aria-pressed={isPlaying}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--vast)] bg-[var(--lumen)] text-[var(--vast)] shadow-[4px_4px_0px_0px_#034f46] transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
      {children}
    </div>
  );
}
