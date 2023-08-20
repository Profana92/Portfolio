import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  return (
    <nav className="h-full">
      <menu className="h-full flex justify-center items-center gap-2 ">
        <li>
          <NavLink to={`/`}>{t('navigation.home')}</NavLink>
        </li>
        <li>
          <NavLink to={`/projects`}>{t('navigation.projects')}</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>{t('navigation.about')}</NavLink>
        </li>
        <li>
          <NavLink to={`/skills`}>{t('navigation.skills')}</NavLink>
        </li>
        <li>
          <NavLink to={`/offer`}>{t('navigation.offer')}</NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}>{t('navigation.contact')}</NavLink>
        </li>{' '}
        <li>
          <NavLink to={`/blog`}>{t('navigation.blog')}</NavLink>
        </li>
      </menu>
    </nav>
  )
}

export default Navigation
