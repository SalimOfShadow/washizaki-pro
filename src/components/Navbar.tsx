// Navbar.js
import * as React from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import {
  darkThemeStyles,
  themeShadows,
  themeStyles,
  useTheme,
} from '../contexts/ThemeContext';
import CharacterSelect from './character-select/CharacterSelect';
import { CharacterName, CharacterState } from '../contexts/CharacterContext';

const headerColors = {
  blue: '#1f2187',
  red: '#872f1f',
  aqua: '#008b8b',
  magenta: '#8b008b',
};

const Navbar = (props: {
  firstName: string;
  lastName: string;
  changeCharacter: (characterName: CharacterName) => void;
  characterState: CharacterState;
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="header"
      style={{
        boxShadow: `0 8px 32px 0 ${headerColors[theme]}`,
        marginBottom: '70px',
        transition: '0.2s',
      }}
    >
      <nav>
        <div className="logo">
          <a href="index.html">
            {'Washizaki'}
            <span style={{ color: headerColors[theme] }}>{'   PRO'}</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#projects">Highlights</a>
          </li>
          <li>
            <a href="#skills">Games</a>
          </li>
          <li>
            <a
              href="#contact"
              className={`navbar-btn`}
              style={{
                backgroundColor: themeStyles[theme],
                boxShadow:
                  theme === 'blue'
                    ? `0 8px 32px 0 rgba(31, 41, 135, 0.37)` // Blue shadow for blue theme
                    : theme === 'red'
                    ? `0 8px 32px 0 rgba(135, 41, 31, 0.37)` // Red shadow for red theme
                    : theme === 'magenta'
                    ? `0 8px 32px 0 rgba(135, 31, 135, 0.37)` // Magenta shadow for magenta theme
                    : `0 8px 32px 0 rgba(31, 135, 130, 0.37)`, // Aqua shadow for aqua theme
              }}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
