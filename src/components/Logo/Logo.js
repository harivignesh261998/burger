import React from 'react'
import BurgerLogo from '../../assets/image/burger-logo.png';
import './Logo.css'
const logo=(props)=>{
    return(
        <div className="Logo">
            <img src={BurgerLogo} alt="My Burger"/>
        </div>
    )

}

export default logo;