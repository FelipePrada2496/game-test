import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './components/title/title.jsx'
import Emoji from './components/emojis/emoji.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <Emoji />
  </React.StrictMode>,
)

