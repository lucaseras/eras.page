import Link from 'next/link'
import styles from './navbar.module.css'
import { useTheme } from '../styles/theme'
// React component that creates the theme switcher button


export default function ThemeSwitch() {
    const [isDark, themeStyle, toggleTheme] = useTheme()
    return (
        <button style={ themeStyle }onClick={toggleTheme}>toggle to {!isDark ? 'Dark' : 'Light'}</button>
    )
}
