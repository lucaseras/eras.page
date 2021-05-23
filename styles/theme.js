import {useState, useEffect, createContext, useContext} from 'react';

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
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
    const [dark, setDark] = useState(true)

    useEffect(() => {
        const local = window.localStorage.getItem('dark')
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = (event) => {
            setDark(event.matches)
            localStorage.setItem('dark', event.matches)
        }
        systemPreference.addEventListener('change', handleSystemChange)
        if (local == null) {
            setDark(systemPreference.matches)
            localStorage.setItem('dark', systemPreference.matches)
        }
    
        return () => systemPreference.removeEventListener('change', handleSystemChange);
    }, [dark])

    const toggleTheme = () => {
        const oppositeTheme = !dark
        localStorage.setItem('dark', `${oppositeTheme}`)
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
