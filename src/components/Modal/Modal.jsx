import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={s.overlay} onClick={this.props.onClose}>
        <div className={s.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
