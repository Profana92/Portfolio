import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'
interface lngsInterface {
  [key: string]: { nativeName: string }
}
const lngs: lngsInterface = {
  en: { nativeName: 'English' },
  // de: { nativeName: 'Deutsch' },
  pl: { nativeName: 'Polish' },
}

const LanguageSwitcherMobile = () => {
  const [languageSwitcherOpen, setlanguageSwitcherOpen] = useState(false)
  const { i18n } = useTranslation()

  return (
    <div className="relative h-8 my-5 z-10 clickable">
      <ul className="text-md self-baseline my-auto transition-all">
        <li
          className={`w-full flex flex-row gap-2 items-center justify-start h-8 px-2`}
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
          className={`absolute bottom-full transition-all duration-300 w-full max-h-0 ${
            languageSwitcherOpen ? 'max-h-[500px] ' : 'overflow-auto duration-150'
          }`}
        >
          {Object.keys(lngs).map((lng) => (
            <li
              className={`w-full flex flex-row gap-2 items-center justify-start h-8 px-2 ${
                i18n.resolvedLanguage === lng ? 'bg-[#09022e40] bg-opacity-10' : ''
              }`}
              key={lng}
              onClick={() => {
                setlanguageSwitcherOpen((prevstate) => !prevstate)
                i18n.changeLanguage(lng)
                i18n.on('languageChanged', (lng) => (document.documentElement.lang = lng))
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

export default LanguageSwitcherMobile
