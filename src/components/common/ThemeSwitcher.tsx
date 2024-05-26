import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const theme = useTheme();
  return (
    <Switch
      defaultSelected={theme.theme === "light" ? false : true}
      size="sm"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
      onChange={() => {
        theme.setTheme(theme.theme === "light" ? "dark" : "light");
      }}
    ></Switch>
  );
}
