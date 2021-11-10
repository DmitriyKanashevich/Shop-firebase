import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Context } from '../index';
import firebase from 'firebase';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>

  );
};
export default Loader;