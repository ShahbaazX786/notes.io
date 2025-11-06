import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactChildren } from "../const/types";

const ThemeProvider = ({ children }: ReactChildren) => {
  return (
    <NextThemesProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
