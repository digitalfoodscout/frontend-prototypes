import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import LogoImg from '../resources/img/logo_round.png';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>DigitalFoodScout</h1>
        <div style={{display: 'flex', justifyContent: 'center', padding: "8"}}>
          <img src={LogoImg} style={{width: "50%", height: "50%"}}/>
        </div>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="Was hast Du gegessen?" />
      </header>
    )
  }
}
