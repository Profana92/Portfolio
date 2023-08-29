import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

interface Props {
  menuOpen: boolean
  setmenuOpen: Dispatch<SetStateAction<boolean>>
}
const Header = (props: Props) => {
  return (
    <header
      className={`z-10 flex justify-between items-center h-14 fixed transition-all w-full px-6 bg-[#09022E59] top-0`}
    >
      <p className="z-10 text-3xl text-transparent font-black bg-gradient-to-br bg-clip-text from-pink to-orange">
        <Link to="/" tabIndex={-1}>
          WIZdev.
        </Link>
      </p>
      <div className="flex items-center flex-row gap-2 z-10 h-full">
        <Navigation />
        <MobileNavigation menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
      </div>
    </header>
  )
}

export default Header
