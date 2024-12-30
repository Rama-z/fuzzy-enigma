import { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { MainHomePage } from "./pages";

import "./index.css";
import "./i18n/i18n";
import { ThemeProvider } from "./components/theme/theme-provider";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainHomePage title={"Home"} />
    </ThemeProvider>
  </Suspense>,
);
