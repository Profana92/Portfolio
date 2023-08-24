import { useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

interface reducerState {
  home: boolean
  myWork: boolean
  about: boolean
}
interface reducerAction {
  type: 'home' | 'myWork' | 'about'
}
const initialReducerState = { home: false, myWork: false, about: false }
const Navigation = () => {
  const { t } = useTranslation()
  const [menuState, dispatch] = useReducer(reducer, initialReducerState)
  function reducer(state: reducerState, action: reducerAction) {
    switch (action.type) {
      case 'home': {
        return {
          ...state,
          home: !state.home,
        }
      }
      case 'myWork': {
        return {
          ...state,
          myWork: !state.myWork,
        }
      }
      case 'about': {
        return {
          ...state,
          about: !state.about,
        }
      }
    }
    throw Error('Unknown action: ' + action.type)
  }
  function mouseOverMenuHandler(enterOrLeave: string, element: string) {
    switch (enterOrLeave) {
      case 'enter': {
        if (element === 'home') {
          dispatch({
            type: 'home',
          })
        }
        if (element === 'myWork') {
          dispatch({
            type: 'myWork',
          })
        }
        if (element === 'about') {
          dispatch({
            type: 'about',
          })
        }
        break
      }
      case 'leave': {
        if (element === 'home') {
          dispatch({
            type: 'home',
          })
        }
        if (element === 'myWork') {
          dispatch({
            type: 'myWork',
          })
        }
        if (element === 'about') {
          dispatch({
            type: 'about',
          })
        }
        break
      }
    }
  }

  return (
    <nav className="h-full overflow-visible">
      <menu className="h-full flex justify-center items-center gap-6 font-medium mr-12">
        <div
          className="relative"
          onMouseOver={() => mouseOverMenuHandler('enter', 'home')}
          onMouseOut={() => mouseOverMenuHandler('leave', 'home')}
        >
          <li className="inline-block h-full">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'inline-block h-full w-full pending'
                  : isActive
                  ? 'inline-block h-full w-full active text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange'
                  : ''
              }
              to={`/`}
            >
              {t('navigation.home')}
            </NavLink>
          </li>
          {menuState.home ? (
            <div className="absolute min-w-[160px] bg-slate-500">
              <li>
                <NavLink className="inline-block h-full w-full" to={`/#magic`}>
                  {t('navigation.magic')}
                </NavLink>
              </li>
              <li>
                <NavLink className="inline-block h-full w-full" to={`/#tools`}>
                  {t('navigation.tools')}
                </NavLink>
              </li>
            </div>
          ) : (
            ''
          )}
        </div>

        <div
          className="relative"
          onMouseOver={() => mouseOverMenuHandler('enter', 'myWork')}
          onMouseOut={() => mouseOverMenuHandler('leave', 'myWork')}
        >
          <li className="inline-block h-full">
            <NavLink className="inline-block h-full w-full" to={`/mywork`}>
              {t('navigation.myWork')}
            </NavLink>
          </li>
          {menuState.myWork ? (
            <div className="absolute min-w-[160px] bg-slate-500">
              <li>
                <NavLink className="inline-block h-full w-full" to={`/projects`}>
                  {t('navigation.projects')}
                </NavLink>
              </li>{' '}
              <li>
                <NavLink className="inline-block h-full w-full" to={`/services`}>
                  {t('navigation.services')}
                </NavLink>
              </li>
              <li>
                <NavLink className="inline-block h-full w-full" to={`/blog`}>
                  {t('navigation.blog')}
                </NavLink>
              </li>
            </div>
          ) : (
            ''
          )}
        </div>

        <div
          className="relative"
          onMouseOver={() => mouseOverMenuHandler('enter', 'about')}
          onMouseOut={() => mouseOverMenuHandler('leave', 'about')}
        >
          <li className="inline-block h-full">
            <NavLink className="inline-block h-full w-full" to={`/about`}>
              {t('navigation.about')}
            </NavLink>
          </li>
          {menuState.about ? (
            <div className="absolute min-w-[160px] bg-slate-500">
              <li>
                <NavLink className="inline-block h-full w-full" to={`/#aboutme`}>
                  {t('navigation.aboutMe')}
                </NavLink>
              </li>{' '}
              <li>
                <NavLink className="inline-block h-full w-full" to={`/#skills`}>
                  {t('navigation.skills')}
                </NavLink>
              </li>
            </div>
          ) : (
            ''
          )}
        </div>
        <li>
          <NavLink to={`/contact`}>{t('navigation.contact')}</NavLink>
        </li>
      </menu>
    </nav>
  )
}

export default Navigation
