import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import store from './redux/store.ts';
import Cadastro from './routes/cadastro/Cadastro.tsx';
import Home from './routes/home/Home.tsx';
import Login from './routes/login/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home  />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
