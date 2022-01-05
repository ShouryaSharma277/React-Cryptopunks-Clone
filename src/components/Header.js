import React from 'react'
import './header.css';
import punkLogo from "../assets/header/cryptopunk-logo.png"
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

export const Header = () => {
    return (
        <div className='header'>

            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt="punkLogo" />
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt='Search Icon' />
                </div>

                <input className='searchInput' placeholder='Collection, item or user...' />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img className='themeSwitchIcon' src={themeSwitchIcon} alt="Theme switch button" />
                </div>
            </div>

            <div className="loginButton">Get in</div>

        </div>
    )
}
