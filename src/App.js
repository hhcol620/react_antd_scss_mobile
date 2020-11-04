import React from 'react'
import './App.scss'
import { debounce } from '@/utils/utils'
import { exampleAPI } from '@/api/example/index.js'

// import axios from 'axios'

function App() {
  // function deFunc(z) {
  //   console.log('zzzz', z)
  // }
  async function test() {
    let res = await exampleAPI()
    console.log(res)
  }
  // axios.get('/hh/mock/1084/api/test').then((res) => {
  //   console.log(111, res)
  // })
  return (
    <div className="App">
      <header className="App-header">
        <span onClick={debounce(test, 300)}>这是按钮</span>
      </header>
    </div>
  )
}

export default App
