import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Context } from '../index';
import firebase from 'firebase';
import { useContext } from 'react';

const Login = () => {
  const { auth } = useContext(Context)
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
  }
  return (
    <div className="d-grid gap-2" >
      <Button onClick={login} variant="primary" className="button" size="lg" style={{width:'100%'}}>
        Войти в акаунт<p> с помощью Google </p>
      </Button>
    </div>
  );
};
export default Login;