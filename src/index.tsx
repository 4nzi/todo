import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { Provider } from 'jotai'
import App from './App'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
