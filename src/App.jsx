
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
