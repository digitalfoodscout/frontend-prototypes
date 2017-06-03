import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import LogoIcon from '../resources/svg/Logo';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Settings"/>
    <MenuItem primaryText="Logout"/>
  </IconMenu>
);

// rewritten as stateless functional component, see https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
export default function Header(props) {
  const title = props.title ? props.title : "DigitalFoodScout";
  return (
    <AppBar
      title={<span>{title}</span>}
      iconElementLeft={<IconButton><LogoIcon /></IconButton>}
      iconElementRight={<Logged/>}
    />
  )
}

Header.propTypes = {
  title: PropTypes.string
};
