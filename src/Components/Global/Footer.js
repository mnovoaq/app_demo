//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

//Components
class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = '&copy; Mi App 2018' } = this.props;
    return (
      <div className="Footer">
          <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
