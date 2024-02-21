import React from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import '../index.css'
export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A restaurant"></img>
          <h1 id="title">My Blog</h1>
        </div>
        <nav>
          <Button textOnly>Cart(0)</Button>
        </nav>
      </header>
    </>
  )
}
