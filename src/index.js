import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { Suspense } from 'react';
import { QueryProvider } from './provider/provider';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div> ...loading </div>} >
        <QueryProvider>
          <Routes />
        </QueryProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
