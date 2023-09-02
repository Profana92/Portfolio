import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'
interface lngsInterface {
  [key: string]: { nativeName: string }
}
const lngs: lngsInterface = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  pl: { nativeName: 'Polski' },
}

const LanguageSwitcher = () => {
  const [languageSwitcherOpen, setlanguageSwitcherOpen] = useState(false)
  const { i18n } = useTranslation()

  return (
    <div className="relative w-36 h-8 clickable">
      <ul className="text-md self-baseline my-auto transition-all">
        <li
          className={`w-full flex flex-row gap-2 items-center justify-start h-8 px-2 `}
          onClick={() => {
            setlanguageSwitcherOpen((prevstate) => !prevstate)
          }}
        >
          <Flag
            code={
              i18n.resolvedLanguage === 'en'
                ? 'usa'
                : i18n.resolvedLanguage === 'de'
                ? 'deu'
                : i18n.resolvedLanguage === 'pl'
                ? 'pol'
                : 'usa'
            }
            height="16"
            className="w-10"
          />
          <span className="h-6 leading-6">
            {i18n.resolvedLanguage === 'en'
              ? 'English'
              : i18n.resolvedLanguage === 'de'
              ? 'Deutsch'
              : i18n.resolvedLanguage === 'pl'
              ? 'Polish'
              : 'English'}
          </span>
        </li>
        <div
          className={`transition-all duration-300 absolute w-full max-h-0 overflow-hidden
            ${languageSwitcherOpen ? 'max-h-[500px] ' : 'overflow-auto duration-150'}
          `}
        >
          {Object.keys(lngs).map((lng) => (
            <li
              className={`w-full flex flex-row gap-2 items-center justify-start h-8 px-2 ${
                i18n.resolvedLanguage === lng ? ' bg-slate-100 bg-opacity-10' : ''
              }`}
              key={lng}
              onClick={() => {
                setlanguageSwitcherOpen((prevstate) => !prevstate)
                i18n.changeLanguage(lng)
              }}
            >
              <Flag
                code={lng === 'en' ? 'usa' : lng === 'de' ? 'deu' : lng === 'pl' ? 'pol' : 'usa'}
                height="16"
                className="w-10"
              />
              {lngs[lng].nativeName}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default LanguageSwitcher
