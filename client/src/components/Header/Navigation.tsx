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
        <div className="submenu">
          <li>
            <NavLink to={`/#magic`}>{t('navigation.magic')}</NavLink>
          </li>
          <li>
            <NavLink to={`/#tools`}>{t('navigation.tools')}</NavLink>
          </li>
        </div>
        <li>
          <NavLink to={`/mywork`}>{t('navigation.mywork')}</NavLink>
        </li>
        <div className="submenu">
          <li>
            <NavLink to={`/projects`}>{t('navigation.projects')}</NavLink>
          </li>
          <li>
            <NavLink to={`/services`}>{t('navigation.services')}</NavLink>
          </li>
          <li>
            <NavLink to={`/blog`}>{t('navigation.blog')}</NavLink>
          </li>
        </div>
        <li>
          <NavLink to={`/about`}>{t('navigation.about')}</NavLink>
        </li>
        <div className="submenu">
          <li>
            <NavLink to={`/#aboutme`}>{t('navigation.aboutme')}</NavLink>
          </li>
          <li>
            <NavLink to={`/#skills`}>{t('navigation.skills')}</NavLink>
          </li>
        </div>
        <li>
          <NavLink to={`/contact`}>{t('navigation.contact')}</NavLink>
        </li>
      </menu>
    </nav>
  )
}

export default Navigation
