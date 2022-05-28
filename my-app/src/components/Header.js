import React from 'react'
import Heater from '../assets/Header/heater.jpg'
import searchIcon from '../assets/Header/search.png'
import themeSwitchIcon from '../assets/Header/theme-switch.png'
const Header = () => {
    return <div className='header'>
        <div className='logoContainer'>
            <img src={Heater} className='anyaLogo' />
            </div>
        <div className='searchBar'>
            <div className='searchIcon'>
                <img src={searchIcon} alt='' />
            </div>
            <input className='searchInput' placeholder='Collections, Items, User' />
        </div>
        <div className='headerItems'>
            <p className='drops'>Drops</p>
            <p className='marketplace'>Marketplace</p>
            <p className='create'>Create</p>
        </div>
        <div className='headerActions' >
            <div className='themeSwitch'>
                <img src={themeSwitchIcon} alt='Dark Mode Switch'/>
            </div>
        </div>
        <div className='loginButton'>
        <a href="https://www.linkedin.com/in/sebastian-buritica-berrocal-750b3623a/" target='_blank'>Contact</a>
        </div>
        </div>
}
export default Header