import React from 'react';
class Square extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.onButtonClick = this.onButtonClick.bind(this);
      }
    onButtonClick() {
        alert('clicked')
    }
    render() {
      return (
        <button className="square" onClick={this.onButtonClick}>
          {this.props.value}
        </button>
      );
    }
  }
  export default Square