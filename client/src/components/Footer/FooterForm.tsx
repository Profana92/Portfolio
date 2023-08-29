import { SubmitHandler, useForm } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { MdErrorOutline } from 'react-icons/md'
import { AnimatePresence,motion } from 'framer-motion'

type Inputs = {
  firstName: string
  lastName: string
  eMail: string
  message: string
}

interface Props {
  formMessagePlaceholder: string
  formSummonButton: string
  formFirstNamePlaceholder: string
  formLastNamePlaceholder: string
  errorRequired: string
  errorMaxLength: string
  formEmailPlaceholder: string
}
export default function FooterForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = () => {}

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        <div className="w-1/2 flex flex-col gap-6">
          <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col ">
            <input
              className="w-full bg-white rounded-sm text-xs px-2 h-10 text-gray-700"
              placeholder={props.formFirstNamePlaceholder}
              {...register('firstName', { required: true, maxLength: 20 })}
            />
          </div>
          <AnimatePresence>
            {errors.firstName?.type === 'required' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex gap-3 items-center">
                  <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                    <div>
                      <MdErrorOutline />
                    </div>
                  </IconContext.Provider>
                  {props.errorRequired}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {errors.firstName?.type === 'maxLength' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex gap-3 items-center">
                  <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                    <div>
                      <MdErrorOutline />
                    </div>
                  </IconContext.Provider>
                  {props.errorMaxLength}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col ">
            <input
              className="w-full bg-white rounded-sm text-xs px-2 h-10 text-gray-700"
              placeholder={props.formLastNamePlaceholder}
              {...register('lastName', { required: true, maxLength: 20 })}
            />
          </div>
          <AnimatePresence>
            {errors.lastName?.type === 'required' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex gap-3 items-center">
                  <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                    <div>
                      <MdErrorOutline />
                    </div>
                  </IconContext.Provider>
                  {props.errorRequired}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {errors.lastName?.type === 'maxLength' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex gap-3 items-center">
                  <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                    <div>
                      <MdErrorOutline />
                    </div>
                  </IconContext.Provider>
                  {props.errorMaxLength}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col ">
          <input
            className="w-full bg-white rounded-sm text-xs px-2 h-10 text-gray-700"
            placeholder={props.formEmailPlaceholder}
            {...register('eMail', { required: true, maxLength: 20 })}
          />
        </div>
        <AnimatePresence>
          {errors.eMail?.type === 'required' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex gap-3 items-center">
                <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                  <div>
                    <MdErrorOutline />
                  </div>
                </IconContext.Provider>
                {props.errorRequired}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {errors.eMail?.type === 'maxLength' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex gap-3 items-center">
                <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                  <div>
                    <MdErrorOutline />
                  </div>
                </IconContext.Provider>
                {props.errorMaxLength}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col ">
          <input
            className="w-full bg-white rounded-sm text-xs px-2 h-10 text-gray-700"
            placeholder={props.formMessagePlaceholder}
            {...register('message', { required: true })}
          />
        </div>
        <AnimatePresence>
          {errors.message?.type === 'required' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex gap-3 items-center">
                <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                  <div>
                    <MdErrorOutline />
                  </div>
                </IconContext.Provider>
                {props.errorRequired}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <input
        type="submit"
        value={props.formSummonButton}
        className="inline-block w-40 bg-buttonOrange buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]"
      />
    </form>
  )
}
