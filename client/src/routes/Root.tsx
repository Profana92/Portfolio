import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const Root: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="h-[calc(100vh-112px)]">
        <Outlet />
      </main>
      <footer className="h-14">This is a footer</footer>
    </div>
  )
}

export default Root
