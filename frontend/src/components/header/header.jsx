import { NavLink } from 'react-router-dom'

import logo from '@/assets/logo-sportsee.svg'
import '@/components/header/header.style.scss'


/**
 * Render the header component
 * @function Header
 * @returns {JSX.Element}
 */
export const Header = () => {
    return (
        <header className='header__app'>
            <img src={logo} alt="logo sportsee" />
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/">Profil</NavLink></li>
                    <li><NavLink to="/">Réglage</NavLink></li>
                    <li><NavLink to="/">Communauté</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}