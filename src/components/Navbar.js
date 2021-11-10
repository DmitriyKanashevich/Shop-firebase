import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index';
import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav'
import Cart from "./Cart"

const Navbar = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <Nav className="justify-content-center"
            justify variant="tabs"
            onSelect={(selectedKey) => (selectedKey)}>
            <Nav.Item>
                <Nav.Link href="/cart">SHOP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/AddNewCart">Добавить товар</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ChangeCart">Редактировать товар</Nav.Link>
            </Nav.Item>
            {user ?
                <Nav.Item>
                    <Nav.Link onClick={() => auth.signOut()}>Выйти из аккаунта</Nav.Link>
                </Nav.Item>
                :
                <Nav.Item>
                    <Nav.Link href="/login">Войти в аккаунт</Nav.Link>
                </Nav.Item>
            }
        </Nav>
    );
};
export default Navbar;