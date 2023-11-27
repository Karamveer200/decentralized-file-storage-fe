import { lazy } from 'react';

const Landing = lazy(() => import('../components/Landing/Index'));

export const ALL_ROUTES_PATHS = {
  LANDING: '/'
};

export const ALL_ROUTES = [
  {
    pathName: ALL_ROUTES_PATHS.LANDING,
    Component: Landing,
    heading: 'Landing'
  }
];
