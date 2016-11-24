// @flow

const React = require('react');
const { shallow } = require('enzyme');
const { shallowToJson } = require('enzyme-to-json');
const Sample = require('./sample');

type Props = {
  title?: string,
};

const getComponent = (props: Props = {}): React.Element<any> => (
  <Sample {...props} />
);

const getComponentWithChildren = (props = {}): React.Element<any> => (
  <Sample {...props}>
    <div />
  </Sample>
);

describe('Sample', () => {
  test('renders', () => {
    const tree = shallow(getComponent());
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('renders with title', () => {
    const tree = shallow(getComponent({ title: 'Test' }));
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('renders with children', () => {
    const tree = shallow(getComponentWithChildren());
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('renders with title and children', () => {
    const tree = shallow(getComponentWithChildren({ title: 'Test' }));
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  test('click on button triggers onClick method', () => {
    const onClickMock = jest.fn();
    const tree = shallow(getComponentWithChildren({
      title: 'Test',
      onClick: onClickMock,
    }));

    tree.find('button').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
