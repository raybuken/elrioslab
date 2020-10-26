import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/flatly/bootstrap.min.css";
// TODO: Note: Replace ^flatly^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
