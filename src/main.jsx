import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import App from './App'
import SearchForm from './components/SearchForm';
import CounterPage from './pages/CounterPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

import { Provider } from 'react-redux';
import { store } from './store/store';
import Pokemon from './pages/Pokemon';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/busqueda",
        element: <SearchForm />,
      },
      {
        path: "/contador",
        element: <CounterPage />,
      },
      {
        path: "/pokemons",
        element: <PokemonPage />,
      },
      {
        path: "/pokemons/:name",
        element: <Pokemon />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode >,
)
