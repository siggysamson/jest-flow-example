// @flow

const React = require('react');

type Props = {
  children?: React.Element<any>,
  overlay: React.Element<any>,
  visible: boolean,
};

class Tooltip extends React.Component {
  static defaultProps: {
    visible: false,
  };

  constructor(props: Props) {
    super();
    this.state = {
      visible: props.visible,
    };
  }

  state: {
    visible: boolean,
  };

  props: Props;

  handleMouseEnter() {
    this.setState({
      visible: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.visible ? 'tooltip--visible' : ''}>
          {this.props.overlay}
        </div>
        <div
          className="tooltip__trigger"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = Tooltip;
