import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration issues

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg border border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaRegMoon size={18} />
      ) : (
        <IoSunnyOutline size={18} />
      )}
    </button>
  );
};

export default ThemeToggler;
