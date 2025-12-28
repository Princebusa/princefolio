import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';
const Git = () => {
    const [scheme, setScheme] = useState("light");

  useEffect(() => {
    const updateScheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setScheme(isDark ? "dark" : "light");
    };

    updateScheme(); // initial check

    const observer = new MutationObserver(updateScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
    return (
        <div className=''>
            <GitHubCalendar  
              colorScheme={scheme}
  theme={{
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  }}

           key={Date.now()}  username="princebusa" />
        </div>
    );
}

export default Git;
