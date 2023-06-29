import React from 'react';
import PropTypes from 'prop-types';

import classes from './LoadingIndicator.module.css';

const LoadingIndicator = ({ extraClass }) => (
  <div className={classes.LoadingIndicator_container}>
    <span className={`${classes.LoadingIndicator} ${extraClass || ''}`} />
  </div>
);

LoadingIndicator.propTypes = {
  extraClass: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  extraClass: '',
};

export default LoadingIndicator;
