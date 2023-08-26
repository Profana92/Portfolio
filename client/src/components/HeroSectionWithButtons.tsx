import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
interface Props {
  buttonOne: string
  buttonTwo: string
  heroHeading: string
  heroParagraph: string
}
const HeroSection = (props: Props) => {
  return (
    <section className="bg-home-hero-pattern min-h-dvh bg-cover bg-no-repeat bg-bottom pt-12 flex justify-center items-center">
      <div className="mx-auto p-10 text-center lg:pr-[40vw] lg:text-left">
        <Trans i18nKey="HomePage.heroHeading">
          <h1 className="font-display text-2xl md:text-5xl font-medium max-w-xl">
            Welcome here, where dreams
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">DO COME</span>
            alive!
          </h1>
        </Trans>
        <Trans i18nKey="HomePage.heroParagraph">
          <p className="my-5 max-w-xl leading-normal text-sm md:text-base">
            Hello! I am
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange font-black">
              Wojciech Marczak
            </span>
            , a Front-End Wizard based in of Leipzig, in the realm of Germany! I&apos;m fervently devoted to crafting
            top-tier websites, infusing a touch of magic into each creation for unparalleled experiences.
          </p>
        </Trans>
        <Link
          className="inline-block w-40 bg-buttonOrange mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base"
          to="/"
        >
          {props.buttonOne}
        </Link>
        <div className="inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <Link
            className="inline-block w-40 rounded-[5px] bg-buttonBlue text-center leading-[50px] text-sm md:text-base"
            to="/"
          >
            {props.buttonTwo}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
