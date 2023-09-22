import { useTranslation } from 'react-i18next'

import HeadingSecondary from './Heading/HeadingSecondary'
import Paragraph from './Paragraph/Paragraph'
import ParagraphUppercase from './Paragraph/ParagraphUppercase'

const TextBlockWithDescription = () => {
  const { t } = useTranslation()
  return (
    <div>
      <ParagraphUppercase textContent={t('HomePage.sectionOneDescription')} />
      <HeadingSecondary transKey="HomePage.sectionOneHeading" />
      <Paragraph decoration="none" textContent={t('HomePage.sectionOneParagraph')} />
      {/* <p className="mt-5 lg:max-w-xl leading-normal text-sm md:text-base">{props.sectionParagraph}</p> */}
    </div>
  )
}

export default TextBlockWithDescription
