import { Trans } from 'react-i18next'

import bottomDivider from '../../assets/ContactDivider.svg'
interface Props {
  HeroParagraph: string
  HeroAccent: string
}

const ContactSectionHero = (props: Props) => {
  return (
    <section
      id="hero"
      className="bg-contact-hero-pattern min-h-dvh bg-cover bg-no-repeat py-12 flex justify-center lg:justify-end items-center relative"
    >
      <div className="p-12 text-center lg:text-left max-w-[1920px] lg:mr-[10vw] 2xl:mr-[20vw]">
        <Trans i18nKey="ContactPage.HeroHeading">
          <h1 className="font-display text-2xl md:text-5xl font-medium max-w-xl text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange leading-[1.3!important]">
            Welcome here, where dreams
            <span className="text-white">DO COME</span>
            alive!
          </h1>
        </Trans>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.HeroParagraph}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
          {props.HeroAccent}
        </p>
      </div>
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-0" />
    </section>
  )
}

export default ContactSectionHero
