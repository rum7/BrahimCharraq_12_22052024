import logo from '@/assets/logo-sportsee.svg'
import '@/components/header/header.style.css'

export const Header = () => {
    return (
        <header className='header__app'>
            <img src={logo} alt="logo sportsee" />
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}