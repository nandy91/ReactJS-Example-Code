import React from 'react'
//Receive the props from ParentComponent
const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent