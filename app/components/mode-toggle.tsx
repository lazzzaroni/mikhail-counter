import { Theme, useTheme } from "remix-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <Button
      variant="link"
      size="icon"
      onClick={() => {
        theme === "light" ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
      }}
      className="text-foreground no-underline hover:text-muted-foreground"
    >
      <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
