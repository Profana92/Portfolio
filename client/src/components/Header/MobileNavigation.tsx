import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosClose } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import hat from '../../assets/Hat_tiny.png'

import LanguageSwitcherMobile from './LanguageSwitcherMobile'
interface Props {
  menuOpen: boolean
  setmenuOpen: Dispatch<SetStateAction<boolean>>
}
const MobileNavigation = (props: Props) => {
  const { t } = useTranslation()
  props.menuOpen ? disableBodyScroll(document as any) : enableBodyScroll(document as any)
  return (
    <div className={`lg:hidden`}>
      <div
        className={`absolute top-0  w-full min-h-dvh max-h-dvh bg-gradient-to-br from-[#0C011F] to-[#33091D] transition-all flex flex-col justify-between ${
          props.menuOpen ? 'left-0' : '-left-[100vw]'
        }`}
      >
        <div className="flex px-6 justify-between min-h-[3.5rem] items-center z-10">
          <p className="text-3xl text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange">
            <Link to="/">WIZdev.</Link>
          </p>
          <p
            onClick={() => {
              props.setmenuOpen((prevState) => !prevState)
            }}
            className="flex flex-col gap-2 text-5xl"
          >
            <IoIosClose />
          </p>
        </div>
        <nav className="overflow-auto no-scrollbar z-10 my-5">
          <ul className="h-full flex items-center font-medium cursor-pointer flex-col mx-8 ">
            <li className="w-full px-5 text-2xl my-2">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/`}
              >
                {t('navigation.home')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#magic`}
              >
                {t('navigation.magic')}
              </NavLink>
            </li>
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#tools`}
              >
                {t('navigation.tools')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="h-full w-full px-5 text-2xl my-2">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/`}
              >
                {t('navigation.myWork')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#magic`}
              >
                {t('navigation.projects')}
              </NavLink>
            </li>
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#tools`}
              >
                {t('navigation.services')}
              </NavLink>
            </li>
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#tools`}
              >
                {t('navigation.blog')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="h-full px-5 text-2xl my-2">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/`}
              >
                {t('navigation.about')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#magic`}
              >
                {t('navigation.aboutMe')}
              </NavLink>
            </li>
            <li className="my-1 w-full">
              <NavLink
                className="w-full flex px-5 justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent"
                to={`/#tools`}
              >
                {t('navigation.skills')}
              </NavLink>
            </li>
            <hr className="w-full rounded border-[#D9D9D940]" />
            <li className="h-full px-5">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'h-full w-full flex justify-center items-center font-black'
                    : isActive
                    ? 'flex justify-center items-center h-full w-full text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange align-middle'
                    : 'h-full w-full flex justify-center items-center hover:bg-gradient-to-br hover:bg-clip-text hover:from-pink hover:to-orange hover:text-transparent'
                }
                to={`/`}
              >
                {t('navigation.contact')}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="z-10 flex justify-center items-center flex-col gap-5">
          <img className="m-auto" src={hat} alt="Image of a hat" width="100" />
          <LanguageSwitcherMobile />
        </div>
        <div className="absolute -top-[5vh] bg-white opacity-10 w-[20vw] h-[20vw] rounded-full blur-2xl"></div>
        <div className="absolute top-[20vh] -left-[15vw] bg-white opacity-[0.02] w-[70vw] h-[70vw] rounded-full blur-2xl"></div>
        <div className="absolute top-[30vh] -right-[15vw] bg-white opacity-[0.02] w-[70vw] h-[70vw] rounded-full blur-2xl"></div>
        <div className="absolute top-[80vh] left-[20vw] bg-white opacity-[0.02] w-[40vw] h-[40vw] rounded-full blur-2xl"></div>
      </div>

      <p
        onClick={() => {
          props.setmenuOpen((prevState) => !prevState)
        }}
        className="flex flex-col gap-2"
      >
        <span className="inline-block w-10 h-[2px] bg-white rounded"></span>
        <span className="inline-block w-10 h-[2px] bg-white rounded"></span>
        <span className="inline-block w-10 h-[2px] bg-white rounded"></span>
      </p>
    </div>
  )
}

export default MobileNavigation