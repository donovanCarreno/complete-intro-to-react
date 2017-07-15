import React from 'react'
import { render } from 'react-dom'

const MyTitle = function() {
  return React.createElement('div', null, React.createElement('h1', null, 'My second component'))
}
const MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle),
    React.createElement(MyTitle),
    React.createElement(MyTitle),
    React.createElement(MyTitle)
  )
}

render(React.createElement(MyFirstComponent), document.getElementById('app'))
