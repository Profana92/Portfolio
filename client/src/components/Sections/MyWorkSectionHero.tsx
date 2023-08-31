import { Trans } from 'react-i18next'

import bottomDivider from '../../assets/myWorkdivider.svg'
interface Props {
  heroParagraphOne: string
  heroParagraphAccent: string
}

const MyWorkSectionHero = (props: Props) => {
  return (
    <section
      id="hero"
      className="relative bg-myWork-hero-pattern lg:bg-myWork-hero-pattern-desktop bg-[left_-300px_bottom] sm:bg-[left_-200px_bottom] md:bg-[left_-200px_bottom] lg:bg-[center_-500px_bottom] xl:bg-[center_-500px_bottom] 2xl:bg-[center_bottom] min-h-dvh bg-cover bg-no-repeat pt-12 flex justify-center lg:justify-end items-center"
    >
      <div className="p-12 text-center lg:text-left max-w-[1920px] lg:mr-[10vw] 2xl:mr-[20vw]">
        <Trans i18nKey="myWorkPage.heroHeading">
          <h1 className="font-display text-2xl md:text-5xl font-medium max-w-xl">
            Welcome here, where dreams
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">DO COME</span>
            alive!
          </h1>
        </Trans>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphOne}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
          {props.heroParagraphAccent}
        </p>
      </div>
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-[-1px]" />
    </section>
  )
}

export default MyWorkSectionHero
