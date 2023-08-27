import { Trans } from 'react-i18next'
const TextBlockWithDescription = () => {
  return (
    <div>
      <Trans i18nKey="HomePage.heroHeading">
        <p className="uppercase font-light text-xs my-5">Dummy gray text</p>
        <h2 className="font-display text-2xl md:text-5xl font-medium max-w-xl">
          This is a dummy text. If you
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">CAN SEE</span>
          it please inform site administrator!
        </h2>
      </Trans>
    </div>
  )
}

export default TextBlockWithDescription
