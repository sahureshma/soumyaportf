import React from 'react';
import './Header.css';
import CTA from './Cta';

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Soumya Ranjan Sahu</h1>
        <h5 className="text-light">Game Developer and UI/UX Enthusiast</h5>
        <CTA />

      </div>
    </header>
  );
}
