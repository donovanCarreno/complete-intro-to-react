// @flow

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import Perf from 'react-addons-perf'

/*
Performance tools
  - in conosle:
    - Perf.stop()
    - Perf.printWasted()

window.Perf = Perf
Perf.start()
*/

import App from './App'

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'))
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}
