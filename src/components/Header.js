import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {withRouter} from 'react-router-dom';
import LogoIcon from '../resources/svg/Logo';

const MenuRoutingItem = withRouter(({history, label, route}) => {
  return (
    <MenuItem primaryText={label} onTouchTap={() => history.push(route)}/>
  );
});

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuRoutingItem label="Settings" route="/settings"/>
    <MenuRoutingItem label="Logout" route="/login"/>
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
