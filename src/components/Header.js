import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogoImg from '../resources/img/logo_round.png';

export default class Header extends Component {
    static propTypes = {
        nav: PropTypes.string.isRequired
    }

    render() {
        return (
          <header className="header">
            <h1>DigitalFoodScout</h1>
            <h2>{this.props.nav}</h2>
            <div style={{display: 'flex', justifyContent: 'center', padding: "8px"}}>
              <img src={LogoImg} style={{width: "50%", height: "50%"}} alt="Digital FoodScout Logo"/>
            </div>
          </header>
    )
  }
}
