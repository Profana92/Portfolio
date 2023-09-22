import bottomDivider from '../../assets/myWorkdivider.svg'
import HeadingMain from '../UI/Heading/HeadingMain'
interface Props {
  heroParagraphOne: string
  heroParagraphAccent: string
}

const MyWorkSectionHero = (props: Props) => {
  return (
    <section
      id="hero"
      className="relative bg-myWork-hero-pattern lg:bg-myWork-hero-pattern-desktop min-h-dvh bg-cover bg-no-repeat pt-12 flex justify-center lg:justify-end items-center"
    >
      <div className="p-12 text-center lg:text-left max-w-[1920px] lg:mr-[10vw] 2xl:mr-[20vw]">
        <HeadingMain decorationInternal={false} textSource="myWorkPage.heroHeading" additionalExternalClasses="" />

        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.heroParagraphOne}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
          {props.heroParagraphAccent}
        </p>
      </div>
      <img
        src={bottomDivider}
        alt="Section bottom divider image"
        className="w-full absolute bottom-[-1px] 2xl:bottom-[-4px]"
      />
    </section>
  )
}

export default MyWorkSectionHero
