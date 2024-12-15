import { Link } from "react-router-dom";
import reactLogo from "/assets/react.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      cacheTime: 0,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.querySelector(":root")?.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    document.querySelector(":root")?.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.querySelector(":root")?.classList.contains("light")
        ? "light"
        : "dark"
    );
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
          Products
        </Link>
        <div className="theme-switcher">
          <button type="button" onClick={toggleTheme}>
            <span className="moon">🌙</span>
            <span className="sun">🌞</span>
          </button>
        </div>
      </div>

      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default Layout;
