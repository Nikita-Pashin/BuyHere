import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import './app/styles/index.scss';

render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
