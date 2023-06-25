import React from 'react';
import { ROUTES } from './routes';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout/index';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        {ROUTES.map((route) => (
          <Route element={route.component} key={route.name} path={route.path} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
