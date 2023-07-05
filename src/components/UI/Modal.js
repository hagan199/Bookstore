import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

const overlayContainer = document.getElementById('overlays');

const Modal = ({ onClick, children }) => (
  <>
    {ReactDOM.createPortal(
      <>
        <div
          onClick={onClick}
          role="presentation"
          className={classes.modalBackdrop}
        />
        <div className={classes.modalContainer}>
          <div className={classes.modalContent}>{children}</div>
        </div>
      </>,
      overlayContainer,
    )}
  </>
);

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
