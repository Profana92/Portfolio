import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TailSpin } from 'react-loader-spinner'

import FormErrorField from '../UI/Blocks/FormErrorField'
import ContainerHalf from '../UI/Containers/ContainerHalf'
import InputForm from '../UI/InputForm'
import Paragraph from '../UI/Paragraph/Paragraph'
type Inputs = {
  firstName: string
  lastName: string
  eMail: string
  message: string
}

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const [messageStatus, setmessageStatus] = useState('')
  const [spinnerActive, setspinnerActive] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    setspinnerActive(true)
    ;(window as any).Email.send({
      SecureToken: '3b67f0c8-ba53-4b5d-a34b-cd695fcfcae7',
      To: 'contact@wizdev.de',
      From: 'contact@wizdev.de',
      Subject: `Contact Form from ${inputs.firstName} ${inputs.lastName} - ${inputs.eMail}`,
      Body: inputs.message,
    }).then((message: string) => {
      setspinnerActive(false)
      setmessageStatus(message)
    })
  }
  const { t } = useTranslation()

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        <ContainerHalf>
          <InputForm register={register} fieldName="firstName" textContent={t('Footer.formFirstNamePlaceholder')} />
          <FormErrorField
            condition="required"
            errors={errors}
            textContent={t('Footer.errorRequired')}
            fieldName="firstName"
          />
          <FormErrorField
            condition="maxLength"
            errors={errors}
            textContent={t('Footer.errorMaxLength')}
            fieldName="firstName"
          />
        </ContainerHalf>
        <ContainerHalf>
          <InputForm register={register} fieldName="lastName" textContent={t('Footer.formLastNamePlaceholder')} />
          <FormErrorField
            condition="required"
            errors={errors}
            textContent={t('Footer.errorRequired')}
            fieldName="lastName"
          />
          <FormErrorField
            condition="maxLength"
            errors={errors}
            textContent={t('Footer.errorMaxLength')}
            fieldName="lastName"
          />
        </ContainerHalf>
      </div>
      <ContainerHalf additionalClasses="w-full">
        <InputForm register={register} fieldName="eMail" textContent={t('Footer.formEmailPlaceholder')} />
        <FormErrorField
          condition="required"
          errors={errors}
          textContent={t('Footer.errorRequired')}
          fieldName="eMail"
        />
        <FormErrorField
          condition="maxLength"
          errors={errors}
          textContent={t('Footer.errorMaxLength')}
          fieldName="eMail"
        />
      </ContainerHalf>

      <ContainerHalf additionalClasses="w-full">
        <InputForm
          register={register}
          fieldName="message"
          textContent={t('Footer.formMessagePlaceholder')}
          type="textArea"
        />
        <FormErrorField
          condition="required"
          errors={errors}
          textContent={t('Footer.errorRequired')}
          fieldName="message"
        />
      </ContainerHalf>
      <div className="flex justify-between items-center">
        <TailSpin
          height="40"
          width="40"
          color="#090120"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={spinnerActive}
        />
        <InputForm register={register} fieldName="message" textContent={t('Footer.formSummonButton')} type="submit" />
      </div>
      {messageStatus === 'OK' ? (
        <Paragraph decoration="none" textContent={t('Footer.messageStatus.ok')} />
      ) : messageStatus === '' ? (
        ''
      ) : (
        <Paragraph decoration="none" textContent={t('Footer.messageStatus.error')} />
      )}
    </form>
  )
}
