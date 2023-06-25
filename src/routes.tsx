import React from 'react';
import { HomePage } from './pages';

interface IRoute {
  name: string;
  component: React.ReactElement;
  path: string;
}

export const ROUTES: IRoute[] = [
  {
    name: 'homePage',
    path: '/',
    component: <HomePage />,
  },
];
