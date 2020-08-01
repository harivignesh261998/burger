import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems'
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle'
const toolbar=(props)=>{
    return(
        <header className="Toolbar">
            <DrawerToogle clicked={props.drawerToggleClicked}/>
            <div className="Logo_tool">
            <Logo/>

            </div>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )


}

export default toolbar