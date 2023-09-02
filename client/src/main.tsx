import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './i18n'

import ErrorPage from './routes/Error-page'
import About from './routes/pages/About'
import Contact from './routes/pages/Contact'
import Home from './routes/pages/Home'
import MyWork from './routes/pages/MyWork'
import Root from './routes/Root'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'my-work',
        element: <MyWork />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={25}
      outerScale={2.5}
      color="254,45,173"
      outerStyle={{
        backgroundColor: '#FC703240',
      }}
      clickables={['a', 'input', 'select', 'textarea', 'button', '.clickable']}
    />
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
