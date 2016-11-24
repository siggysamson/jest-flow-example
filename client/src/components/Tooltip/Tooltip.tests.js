// @flow

const React = require('react');
const { shallow } = require('enzyme');
const { shallowToJson } = require('enzyme-to-json');
const Tooltip = require('./Tooltip');

const getComponent = (props, children) => (
  <Tooltip {...props}>
    {children}
  </Tooltip>
);

const getSampleChildren = () => (
  <div>Wrapped element</div>
);

const getSampleOverlay = () => (
  <div>Sample overlay</div>
);

describe('Tooltip', () => {
  test('renders', () => {
    const tree = shallow(
      getComponent({ overlay: getSampleOverlay() }, getSampleChildren()),
    );
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('renders with property "visible"', () => {
    const tree = shallow(getComponent({
      overlay: getSampleOverlay(),
      visible: true,
    }, getSampleChildren()));
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('handles mouse enter', () => {
    const tree = shallow(getComponent({
      overlay: getSampleOverlay(),
    }, getSampleChildren()));

    tree.find('.tooltip__trigger').prop('onMouseEnter')();
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('handles mouse leave', () => {
    const tree = shallow(getComponent({
      overlay: getSampleOverlay(),
      visible: true,
    }, getSampleChildren()));

    tree.find('.tooltip__trigger').prop('onMouseLeave')();
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
