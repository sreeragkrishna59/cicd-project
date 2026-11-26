import React, { useState } from 'react'

function App() {

  const [status,setStatus]=useState('none')

  function display(){
setStatus('block')
  }

  return (
    <div>
      <h1>APP pages</h1>
<h1 style={{display:status}}>welcome</h1>
      <button onClick={display}>Click me</button>
    </div>
  )
}

export default App
