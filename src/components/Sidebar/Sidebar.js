import React, { Component } from 'react';
import vlogo from '../../assests/images/vlogo.png';
import facebook from '../../assests/images/facebook.png';
import instagram from '../../assests/images/instagram.png';
import history from '../../history'

let count = 0;

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentBrandCount: 1
        }
    }

    changeBrand = (route) =>{
        const { currentBrandCount } = this.state;
        const routesObj = {
            '0': '/',
            '1': '/mobile',
            '2': '/chai-boy'
        }
        this.setState({currentBrandCount:currentBrandCount+1});
        history.push(routesObj[currentBrandCount]);
        if(currentBrandCount>=2) {
            this.setState({currentBrandCount:0});
        } else if(currentBrandCount <=0) {
            this.setState({currentBrandCount:1});
        }
    }

    render(){
        return (
            <article id="side-vertical-view">
            <div className="logo"><img src={vlogo} alt="Logo" /></div>
            <div className="changer">
                <div className="left-arrow" onClick={()=>this.changeBrand('back')} >&#x2190;</div>
                <img src={vlogo} alt="Logo" />
                <div className="right-arrow" onClick={()=>this.changeBrand('forward')} >&#x2192;</div>
            </div>
            <div className="title">
                <h1>Vasu</h1>
                <h3>Mobile & Restaurant</h3>
            </div>
            <div className="social-links">
                <img src={facebook} alt="Facebook Page"/>
                <img src={instagram} alt="Instagram Page" />
            </div>
        </article>
        );
    }
};

export default Header;