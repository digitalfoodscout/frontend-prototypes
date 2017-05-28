import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginScreen extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  render() {
    const { actions, user } = this.props;
    console.log(this.props.user);
    return (
      <section className="main">
        <input type="text" placeholder="Benutzername" onChange={actions.enterUsername} value={user.username}/>
        <input type="text" placeholder="Passwort" onChange={actions.enterPassword} value={user.password}/>
        <button type="submit" onClick={actions.loginReset}>Zurücksetzen</button>
        <button type="submit">Login</button>
      </section>
    )
  }
}
