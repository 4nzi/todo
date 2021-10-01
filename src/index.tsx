import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import './style.css'
import { Layout, App, Login } from './templats/index'

ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </>
    </BrowserRouter>
  </Layout>,
  document.getElementById('root')
)
