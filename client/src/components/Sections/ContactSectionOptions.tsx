import { Trans } from 'react-i18next'

import bottomDivider from '../../assets/BeforeFooterBottomDivider.svg'
import upperDivider from '../../assets/ContactDivider.svg'

interface Props {
  FormSubHeading: string
  FormEndingAccent: string
  FormListItemOne: string
  FormListItemTwo: string
  FormListItemThree: string
  FormListItemFour: string
}

const ContactSectionOptions = (props: Props) => {
  return (
    <section
      id="hero"
      className="bg-contact-form-pattern min-h-dvh bg-repeat py-12 flex flex-col md:flex-row justify-center items-center relative px-6"
    >
      <div className=" flex flex-col gap-6 md:flex-row justify-center items-center relative bg-[#ffffff1A] max-w-[clamp(100%,1920px)] p-12 ">
        <div className="text-center ">
          <Trans i18nKey="ContactPage.FormHeading">
            <h2 className="font-display text-2xl md:text-5xl font-medium max-w-xl text-white">
              Welcome here, where dreams
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">DO COME</span>
              alive!
            </h2>
          </Trans>
          <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-left">{props.FormSubHeading}</p>
          <ul className="text-left list-disc font-light leading-normal list-inside text-sm md:text-base">
            <li>{props.FormListItemOne}</li>
            <li>{props.FormListItemTwo}</li>
            <li>{props.FormListItemThree}</li>
            <li>{props.FormListItemFour}</li>
          </ul>
          <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
            {props.FormEndingAccent}
          </p>
        </div>
      </div>
      <img src={upperDivider} alt="Section bottom divider image" className="w-full absolute top-[-1px] rotate-180" />
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-[-1px]" />
    </section>
  )
}

export default ContactSectionOptions
