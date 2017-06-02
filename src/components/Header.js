import React from 'react'
import PropTypes from 'prop-types'
import LogoImg from '../resources/img/logo_round.png';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Logout" />
  </IconMenu>
);

// rewritten as stateless functional component, see https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
export default function Header (props) {
  const title = props.title ? props.title : "DigitalFoodScout";
  return (
  <AppBar
    title={<span>{title}</span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<Logged/>}
  />
  )
}

/**
 * <div style={{display: 'flex', justifyContent: 'center', padding: "8px"}}>
 <img src={LogoImg} style={{width: "50%", height: "50%"}} alt="Digital FoodScout Logo"/>
 </div>
 */

Header.propTypes = {
  title: PropTypes.string
};
