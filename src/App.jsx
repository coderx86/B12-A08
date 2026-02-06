import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
     {
        path: 'apps',
        element: <AllApps />,
      },
      {
        path: 'apps/:id',
        element: <AppDetails />,
      },
      {
        path: 'installation',
        element: <Installation />,
      },
    ],
  },
], {
    basename: "/"
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
