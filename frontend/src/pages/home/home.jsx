import { NavLink } from 'react-router-dom'

export const Home = () => {  
    return(
        <main>
            <h1>Bienvenue sur <span>Sportsee</span></h1>
            <p>Bienvenue sur la platforme Sportsee, sélectionnez un utilisateur </p>
            <ul className='select-user__btn'>
                <li><NavLink to='/user/mock/18'>Cecilia</NavLink></li>
                <li><NavLink to='/user/api/12'>Karl</NavLink></li>
            </ul>
        </main>
    )
}