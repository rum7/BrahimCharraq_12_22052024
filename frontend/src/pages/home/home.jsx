import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import '@/pages/home/home.style.scss'

export const Home = () => {  
    const [fetchType, setfetchType] = useState("api")
    return(
        <main>
            <h1>Bienvenue sur <span>Sportsee</span></h1>
            <p>Bienvenue sur la platforme Sportsee, sélectionnez un utilisateur </p>
            <div>
                <div className="select-fetchMethod">
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" defaultChecked onChange={() => setfetchType("api")} />
                    <label htmlFor="toggle-on" className="btn">api</label>
                    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio" onChange={() => setfetchType("mock")} />
                    <label htmlFor="toggle-off" className="btn">mock</label>
                </div>
                <ul className='select-user__btn'>
                    <li><NavLink to={`/user/${fetchType}/18`}>Cecilia</NavLink></li>
                    <li><NavLink to={`/user/${fetchType}/12`}>Karl</NavLink></li>
                </ul>
            </div>
        </main>
    )
}