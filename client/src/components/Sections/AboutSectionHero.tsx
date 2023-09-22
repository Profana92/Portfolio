import { Link } from 'react-router-dom'

import bottomDivider from '../../assets/aboutHeroDivider.svg'
import HeadingMain from '../UI/Heading/HeadingMain'
interface Props {
  buttonOne: string
  buttonTwo: string
  heroParagraphOne: string
  heroParagraphTwo: string
  heroParagraphThree: string
  heroParagraphFour: string
  heroParagraphAccent: string
}

const AboutSectionHero = (props: Props) => {
  return (
    <section
      id="hero"
      className="bg-about-hero-pattern bg-[left_-300px_bottom] sm:bg-[left_-200px_bottom] md:bg-[left_-200px_bottom] lg:bg-[center_-500px_bottom] xl:bg-[center_-500px_bottom] 2xl:bg-[center_bottom] min-h-dvh bg-cover bg-no-repeat  py-12 flex justify-center lg:justify-end items-center relative"
    >
      <div className="p-12 text-center lg:text-left max-w-[1920px] lg:mr-[10vw] 2xl:mr-[20vw]">
        <HeadingMain decorationInternal={false} textSource="aboutPage.heroHeading" additionalExternalClasses="" />

        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphOne}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphTwo}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphThree}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphFour}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
          {props.heroParagraphAccent}
        </p>

        <Link
          className="inline-block w-40 bg-buttonOrange buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]"
          to="/my-work/#projects"
        >
          {props.buttonOne}
        </Link>
        <div className="inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <Link
            className="inline-block w-40 rounded-[5px] bg-buttonBlue text-center leading-[50px] text-sm md:text-base md:leading-[50px]"
            to="/contact/#hero"
          >
            {props.buttonTwo}
          </Link>
        </div>
      </div>
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-0" />
    </section>
  )
}

export default AboutSectionHero
