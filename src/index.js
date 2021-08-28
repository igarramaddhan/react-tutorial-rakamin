import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoListPage from './TodoListPage';
import reportWebVitals from './reportWebVitals';
import TimerComponent from './TimerComponent';
import LoginPage from './LoginPage';
import {ThemeProvider} from './contexts/ThemeContext';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
      <TodoListPage />
      {/* <TimerComponent />
      <LoginPage /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
