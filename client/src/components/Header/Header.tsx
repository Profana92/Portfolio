import React from 'react'

import useScrollDirection from '../../hooks/scrollDirection'

import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection()
  return (
    <header
      className={`flex justify-between items-center h-14 sticky transition-all ${
        scrollDirection === 'down' ? '-top-14' : 'top-0'
      } px-3`}
    >
      <div className="font-semibold">
        <span className="text-textBright text-2xl mr-[2px]">W</span>
        <span className="text-accent">MARCZAK</span>
      </div>
      <div className="flex items-center flex-row gap-2">
        <Navigation />
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
