import React from 'react';
import {ThemeContext} from './contexts/ThemeContext';

function Header() {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <div
            id="header"
            style={{
              backgroundColor: value.theme === 'light' ? 'red' : 'blue',
            }}>
            <button onClick={value.onToggleDarkMode}>Toggle</button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Header;
