// @flow

const React = require('react');
const ReactDOM = require('react-dom');
const Sample = require('./components/sample');

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Sample title="Test" />
  </div>,
  document.getElementById('root'),
);
