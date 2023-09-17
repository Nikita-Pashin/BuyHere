import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void,
  theme: Theme,
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
      document.body.classList.remove(Theme.LIGHT);
    } else {
      document.body.classList.add(Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
