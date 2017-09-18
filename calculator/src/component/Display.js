import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        {this.props.value}
      </div>
    );
  }
}
Display.propTypes = {
  value: React.PropTypes.string,
}
export default Display;
