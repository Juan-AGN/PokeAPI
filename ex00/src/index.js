import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import Title from './Title';
import reportWebVitals from './reportWebVitals';

const CLIENT_ID = "1046750926023-1s05646dogu45cbtg0kuhunr1vnur8vk.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Title />
    <App />
    <p text-align="center" color=white">MADE BY: Juan Antonio García Narváez (juan-ant)</p>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
