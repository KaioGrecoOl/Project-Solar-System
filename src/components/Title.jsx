import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    // console.log(this.props);
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
