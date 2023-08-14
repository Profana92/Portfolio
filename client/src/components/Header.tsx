import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

interface lngsInterface {
  [key: string]: { nativeName: string }
}
const lngs: lngsInterface = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  pl: { nativeName: 'Polski' },
}

const Header: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <header className="flex justify-between h-14 bg-red-300">
      <nav>
        <menu>
          <li>
            <NavLink to={`contacts/1`}>
              <Trans i18nKey="description.part1">
                Edit <code>src/App.js</code> and save to reload.
              </Trans>
            </NavLink>
          </li>
          <li>
            <NavLink to={`contacts/1`}> {t('description.part2')}</NavLink>
          </li>
        </menu>
      </nav>
      <Link to={'/'}>Call to action</Link>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header
