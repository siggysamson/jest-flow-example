const React = require('react');

const Test = ({ children, title = '', onClick = () => {} }) => (
  <div>
    { title && <h3>{ title }</h3> }
    { children }
    <button onClick={onClick}>Click me</button>
  </div>
);

Test.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

module.exports = Test;
