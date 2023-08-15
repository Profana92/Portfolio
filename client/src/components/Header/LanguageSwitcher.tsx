import React from 'react'
import { useTranslation } from 'react-i18next'

interface lngsInterface {
  [key: string]: { nativeName: string }
}
const lngs: lngsInterface = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  pl: { nativeName: 'Polski' },
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  return (
    <>
      <label
        htmlFor="pet-select"
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto w-[1px] h-[1px] overflow-hidden"
      >
        Language select
      </label>
      <select
        name="language"
        id="language-select"
        onChange={(value) => {
          i18n.changeLanguage(value.target.value)
        }}
        className="px-5 text-center"
      >
        {i18n.resolvedLanguage === 'en' ? (
          <option>English</option>
        ) : i18n.resolvedLanguage === 'pl' ? (
          <option>Polski</option>
        ) : i18n.resolvedLanguage === 'de' ? (
          <option>Deutsch</option>
        ) : (
          <option>English</option>
        )}
        {Object.keys(lngs).map((lng) => (
          <option
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            onChange={() => i18n.changeLanguage(lng)}
            value={lng}
          >
            {lngs[lng].nativeName}
          </option>
        ))}
      </select>
    </>
  )
}

export default LanguageSwitcher
