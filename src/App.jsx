
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
    ],
  },
], {
    basename: "/"
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
