import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  onToggleDarkMode: () => {},
});

export class ThemeProvider extends React.Component {
  state = {theme: 'light'};

  onToggleDarkMode = () => {
    const isLightMode = this.state.theme === 'light';
    this.setState({theme: isLightMode ? 'dark' : 'light'});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          onToggleDarkMode: this.onToggleDarkMode,
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
