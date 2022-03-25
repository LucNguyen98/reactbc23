import React, { Component } from 'react'

export default class HandleEvent extends Component {

  showMess = () => {
    alert('Hello1')
  }

  sayHello = (name) => {
    alert('Hello1' + name)
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.showMess}>Click me!</button>
        <button onClick={() => {
          alert('Hello2')
        }}>Click me!</button>
        <hr />
        <button onClick={this.sayHello.bind(this, 'Luc')}>Say hello</button>
        <button onClick={() => {
          this.sayHello('Luc123')
        }}>Say hello</button>
      </div>
    )
  }
}

