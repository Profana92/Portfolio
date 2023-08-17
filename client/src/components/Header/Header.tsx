import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import useScrollDirection from '../../hooks/scrollDirection'

import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'

const Header: React.FC = () => {
  const { t } = useTranslation()
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
      <Navigation />
      <div className="flex flex-row gap-2">
        <LanguageSwitcher />
        <div className="grid items-center px-5 rounded-md border border-slate-500 hover:bg-slate-700 transition-all">
          <Link to={'/'}>{t('navigation.quote')}</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
