import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import DeliveryStatsApp from './App';
import Dashboard from './Dashboard';
import Upload from './Upload';
import ManageData from './ManageData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DeliveryStatsApp />,
    id: "root",
    children: [
      { index: true, element: <Navigate to='/dashboard' replace /> },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/manage-data',
        element: <ManageData />
      },
      {
        path: '/upload',
        element: <Upload />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
);
