import { NavLink } from 'react-router-dom'

import IconYoga from '@/assets/icon-yoga.svg?react'
import IconNatation from '@/assets/icon-natation.svg?react'
import IconCyclisme from '@/assets/icon-cyclisme.svg?react'
import IconMsculation from '@/assets/icon-musculation.svg?react'

import '@/components/sidebar/sidebar.style.scss'

const sideNavigation = [
    { path: 'yoga', icon: IconYoga },
    { path: 'natation', icon: IconNatation },
    { path: 'cyclisme', icon: IconCyclisme },
    { path: 'musculation', icon: IconMsculation }
]


/**
 * Render the sidebar component
 * @function Sidebar
 * @returns {JSX.Element}
 */
export const Sidebar = () => {
    return(
        <aside className='side-navigation'>
            <nav>
                <ul>
                    {sideNavigation.map(({ path, icon: Icon }, index) =>
                        <li key={`${path}-${index}`}>
                            <NavLink to="/"><Icon /></NavLink>
                        </li>
                    )}
                </ul>
            </nav>
            <p>Copiryght, SportSee 2020</p>
        </aside>
    )
}