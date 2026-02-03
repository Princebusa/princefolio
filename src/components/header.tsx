import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

import { useState } from "react";

export default function () {
  const [theme, setTheme] = useState<boolean>();
  useState(() => {
    if (localStorage.getItem("theme") == "light") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  });
  const handel = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (document.documentElement.classList.contains("light")) {
      setTheme(false);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setTheme(true);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };
  document.documentElement.classList.add(
    localStorage.getItem("theme") || "dark",
  );


  const menu = [
    {
        name: "Portfolio",
        link: "/"
    },
     {
        name: "Blog",
        link: "/"
    },
     {
        name: "Experience",
        link: "/"
    }
]

  return (
    <div className="w-full [html.light_&]:bg-white bg-[var(--background)] fixed top-0 z-40 before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
      <div className="max-width ">
       <div className="relative flex items-center gap-4 justify-end p-2 after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="flex gap-4">
         {menu.map((itm, key)=>{
            return <a href={itm.link} key={key} className="text-neutral-500">{itm.name}</a>
        })}
        </div>
      <button onClick={handel} className={`cursor-pointer p-1 rounded-[4px] ${theme ? "bg-gray-100" : "bg-neutral-800"}`}>
        <img src={theme ? light : dark} alt="icon" className={`${theme ? "w-[19px]" : "w-[20px] p-[2px]"}`}/>
      </button>
       </div>
       </div>
    </div>
  );
}
