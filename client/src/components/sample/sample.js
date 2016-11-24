// @flow

const React = require('react');

type Props = {
  children?: React.Element<any>,
  title?: string,
  onClick?: Function,
};

const Test = ({ children, title = '', onClick = () => {} }: Props): React.Element<any> => (
  <div>
    { title && <h3>{ title }</h3> }
    { children }
    <button onClick={onClick}>Click me</button>
  </div>
);

module.exports = Test;
