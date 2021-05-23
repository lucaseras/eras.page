import styles from '../styles/navbar.module.css'
import {useTheme} from '../styles/theme'
import {Moon, Sun} from 'react-feather'
// React component that creates the theme switcher button


export default function ThemeSwitch() {
    const [isDark,, toggleTheme] = useTheme()
    const buttonStyle = {
        color: isDark ? '#222222' : '#eeeeeee',
        background: isDark ? '#eeeeee' : '#222222',

    }
    const buttonImage = (isDark 
        ? <Sun color={'black'} size={20}/> 
        : <Moon color={'white'} size={20}/>)
    return (
        <button 
            style={buttonStyle}
            className={styles.themeSwitch}
            onClick={toggleTheme}>
            {buttonImage}
        </button>
    )
}
