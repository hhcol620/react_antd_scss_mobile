import React from 'react'
import './App.scss'
import { debounce } from '@/utils/utils'

function App() {
  function deFunc(z) {
    console.log('zzzz', z)
  }
  return (
    <div className="App">
      <header className="App-header">
        <span onClick={debounce(deFunc, 300)}>这是按钮</span>
      </header>
    </div>
  )
}

export default App
