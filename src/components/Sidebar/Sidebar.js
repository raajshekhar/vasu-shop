import React, { Component } from 'react';
import vlogo from '../../assests/images/vlogo.png';
import facebook from '../../assests/images/facebook.png';
import instagram from '../../assests/images/instagram.png';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <article id="side-vertical-view">
            <div class="logo"><img src={vlogo} /></div>
            <div class="changer">
                <div class="left-arrow">&#x2190;</div>
                <img src={vlogo} />
                <div class="right-arrow">&#x2192;</div>
            </div>
            <div class="title">
                <h1>Vasu</h1>
                <h3>Mobile & Restaurant</h3>
            </div>
            <div class="social-links">
                <img src={facebook} />
                <img src={instagram} />
            </div>
        </article>
        );
    }
};

export default Header;