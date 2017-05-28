import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MainSection extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    //const { actions } = this.props
    return (
      <section className="main">
      </section>
    )
  }
}
