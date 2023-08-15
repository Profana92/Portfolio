import React from 'react'
import { Link } from 'react-router-dom'

import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between h-14 bg-red-300 sticky top-0">
      <Navigation />
      <Link to={'/'}>Call to action</Link>
      <LanguageSwitcher />
    </header>
  )
}

export default Header
