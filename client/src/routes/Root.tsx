import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ScrollToHashElement from '../hooks/scrollToHashElement'
const Root = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="flex flex-col h-full bg-background text-textBright" id="main-element">
      <ScrollToHashElement />
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
