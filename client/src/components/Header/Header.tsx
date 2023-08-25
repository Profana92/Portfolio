import React from 'react'
import { Link } from 'react-router-dom'

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
      <div className="font-semibold z-10">
        <span className=" text-3xl text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange">
          <Link to="/">WIZdev.</Link>
        </span>
      </div>
      <div className="flex items-center flex-row gap-2 z-10">
        <Navigation />
        <LanguageSwitcher />
      </div>
      <div className="w-full h-14 absolute left-0 opacity-25 bg-[#09022E]"></div>
    </header>
  )
}

export default Header
