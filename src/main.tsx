import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Cadastro from './routes/cadastro/Cadastro.tsx';
import Home from './routes/home/Home.tsx';
import Login from './routes/login/Login.tsx';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Perfil from './routes/perfil/Perfil.tsx';
import PerfilComunidades from './routes/perfilComunidades/PerfilComunidades.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
  {
    path: '/comunidade/:comunidadeId',
    element: <PerfilComunidades />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
