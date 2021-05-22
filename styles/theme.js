import {useState, useEffect, createContext, useContext} from 'react';

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

export function useTheme() {
    const { themeStyle, toggleTheme, isDark } = useContext(ThemeContext)
    return [ isDark, themeStyle, toggleTheme ]
}



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
    const themeStyle = dark ? themes.dark : themes.light

    const isDark = dark

    return (
        <ThemeContext.Provider value={{themeStyle, isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
