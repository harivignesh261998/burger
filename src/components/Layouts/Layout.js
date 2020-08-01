import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import  './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerCloedHandler=()=>{
        this.setState({showSideDrawer:false})

    }
    sideDrawerToogleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!this.state.showSideDrawer}
        });   
    }
    render(){
        return(
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToogleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>

        )
    }
}
export default Layout