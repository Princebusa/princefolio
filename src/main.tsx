import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Sticky from "./components/sticky.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Sticky>
        <App />
      </Sticky>
    </ThemeProvider>
  </StrictMode>
);
