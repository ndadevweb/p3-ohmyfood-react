import App from '../App'
import { Home, Restaurant } from '../pages'

import { createBrowserRouter } from 'react-router-dom'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ':slug',
        caseSensitive: true,
        element: <Restaurant />
      }
    ]
  }
]);