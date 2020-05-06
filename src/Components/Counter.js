import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    addCount() {
        this.setState({
            count: this.state.count +1 
        },
        ()=> console.log('Callback value',this.state.count))
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={()=>this.addCount()}>Vote</button>
      </div>
    )
  }
}

export default Counter
