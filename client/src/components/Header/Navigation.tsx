import { useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import LanguageSwitcher from './LanguageSwitcher'
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
    <div className="items-center h-full hidden lg:flex">
      <nav className="h-full overflow-visible">
        <ul className="h-full flex justify-center items-center font-medium mr-12 cursor-pointer">
          <div
            className="relative h-full"
            onMouseOver={() => mouseOverMenuHandler('enter', 'home')}
            onMouseOut={() => mouseOverMenuHandler('leave', 'home')}
          >
            <li className="h-full px-5">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/#home`}
              >
                {t('navigation.home')}
              </NavLink>
            </li>
            {menuState.home ? (
              <div
                className="absolute min-w-[120px] bg-[#09022e40]"
                onClick={() => mouseOverMenuHandler('leave', 'home')}
              >
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/#magic`}
                  >
                    {t('navigation.magic')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/#tools`}
                  >
                    {t('navigation.tools')}
                  </NavLink>
                </li>
              </div>
            ) : (
              ''
            )}
          </div>
          <div
            className="relative h-full"
            onMouseOver={() => mouseOverMenuHandler('enter', 'myWork')}
            onMouseOut={() => mouseOverMenuHandler('leave', 'myWork')}
          >
            <li className="h-full px-5">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/my-work/#hero`}
              >
                {t('navigation.myWork')}
              </NavLink>
            </li>
            {menuState.myWork ? (
              <div className="absolute min-w-[120px] bg-[#09022e40]">
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/my-work/#projects`}
                  >
                    {t('navigation.projects')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/my-work/#services`}
                  >
                    {t('navigation.services')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/mywork#blog`}
                  >
                    {t('navigation.blog')}
                  </NavLink>
                </li>
              </div>
            ) : (
              ''
            )}
          </div>
          <div
            className="relative h-full"
            onMouseOver={() => mouseOverMenuHandler('enter', 'about')}
            onMouseOut={() => mouseOverMenuHandler('leave', 'about')}
          >
            <li className="h-full px-5">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/about/#hero`}
              >
                {t('navigation.about')}
              </NavLink>
            </li>
            {menuState.about ? (
              <div className="absolute min-w-[120px] bg-[#09022e40]">
                <li>
                  <NavLink
                    className="h-14 w-full flex px-5 items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                    to={`/about#skills`}
                  >
                    {t('navigation.skills')}
                  </NavLink>
                </li>
              </div>
            ) : (
              ''
            )}
          </div>
          <li className="h-full px-5">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'h-full w-full flex justify-center items-center font-black'
                  : isActive
                  ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                  : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
              }
              to={`/contact`}
            >
              {t('navigation.contact')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </div>
  )
}

export default Navigation
