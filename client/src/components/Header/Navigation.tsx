import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  return (
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
  )
}

export default Navigation
