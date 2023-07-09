import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './routes';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;