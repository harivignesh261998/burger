import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer=(props)=>{
    let attchedClasses=["SideDrawer","Close"]
    if(props.open){
        attchedClasses=["SideDrawer","Open"]
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>

        <div className={attchedClasses.join(' ')}>
            <div className="Logo_">

            <Logo/>
            </div>
            <nav>
                <NavigationItems/> 
            </nav>

        </div>
        </Aux>

    )
}

export default sideDrawer
