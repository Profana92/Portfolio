import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'

const Root: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <footer className="h-96">This is a footer</footer>
    </div>
  )
}

export default Root
