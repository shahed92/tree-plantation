
import React, { Component } from 'react'
import commonHeader from './images/commonHeader.jpg'



 class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <>
            <header style={{position:'relative'}}>

                <img src={commonHeader} alt="" style={{position:'relative',marginTop:'-45px',height:'50vh'}} />
                <h1 className="commonTitle">{this.props.title}</h1>
            </header>
            </>
        )
    }

  
}

export default Header
