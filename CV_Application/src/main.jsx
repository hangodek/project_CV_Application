import React from 'react'
import ReactDOM from 'react-dom/client'
import Top from './components/Top.jsx'
import Left from './components/Left.jsx'
import Right from './components/Right.jsx'
// import './index.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='topSection'>
      <Top />
    </div>
    <div className='bottomSection'>
      <Left />
      <Right />
    </div>
  </React.StrictMode>,
)
