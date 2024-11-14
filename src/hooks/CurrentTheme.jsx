import { useEffect, useState } from 'react'

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListerner = (e => {
      setIsDarkTheme(e.matches);
    });

    useEffect(() => {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      darkThemeMq.addListener(mqListerner);
      return () => darkThemeMq.removeListener(mqListerner);
    }, []);
    console.log(isDarkTheme)
    return isDarkTheme
  }

  export default useThemeDetector;