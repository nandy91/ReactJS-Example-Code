import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello from ${childName}`)
  }

  render() {
    return (
      <div>
          //Sending property to ChildComponent for it to use.
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}