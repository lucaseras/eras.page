import {useState, useEffect, createContext} from 'react';

const DARK_MODE_KEY = 'dark_mode';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext({
    dark: false,
    theme: themes.light,
    toggleTheme: () => {}
})

export function ThemeProvider({children}) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = window.localStorage.getItem('dark') === 'true';
        setDark(isDark)
    }, [dark])

    const toggleTheme = () => {
        const oppositeTheme = !dark
        localStorage.setItem('dark', JSON.stringify(oppositeTheme))
        setDark(oppositeTheme)
    }
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{theme, dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
