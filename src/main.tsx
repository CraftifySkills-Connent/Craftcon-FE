import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { router } from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} /> 
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
