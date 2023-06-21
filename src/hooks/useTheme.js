import { useAtom } from "jotai";
import { themeAtom } from "../store";

const useTheme = () => {
  const [darkMode, setDarkMode] = useAtom(themeAtom);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return { darkMode, toggleDarkMode };
};
export default useTheme;
