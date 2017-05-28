import React from 'react'
import PropTypes from 'prop-types'
import LogoImg from '../resources/img/logo_round.png';

// rewritten as stateless functional component, see https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
export default function Header (props) {
  const title = props.title ? props.title : "DigitalFoodScout";

  return (
    <header className="header">
      <h1>{title}</h1>
      <h2>{props.nav}</h2>
      <div style={{display: 'flex', justifyContent: 'center', padding: "8px"}}>
        <img src={LogoImg} style={{width: "50%", height: "50%"}} alt="Digital FoodScout Logo"/>
      </div>
    </header>
  )
}

Header.propTypes = {
  nav: PropTypes.string.isRequired,
  title: PropTypes.string
};
