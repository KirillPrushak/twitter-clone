import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './core/api';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
