// @flow

import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'

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
  render(<App />, document.getElementById('app'))
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}
