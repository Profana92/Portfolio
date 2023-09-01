import { Link } from 'react-router-dom'

type singleTechnologyType = { technology: string; icon: (props: any) => JSX.Element | Element | any }

interface Props {
  image: string
  imageAlt: string
  heading: string
  description: string
  website: string
  link: string
  projectsUsedTechnologies: string
  type: 'commercial' | 'hobby'
  technologiesUsed: string[]
  technologies: {
    frontEnd: singleTechnologyType[]
    backEnd: singleTechnologyType[]
    design: singleTechnologyType[]
    servers: singleTechnologyType[]
  }
}
const SliderElement = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row text-sm ">
      <div className="max-w-[80vw] mx-auto bg-[#D9D9D91A] flex flex-col md:flex-row gap-6 p-6">
        <img src={props.image} alt={props.imageAlt} />
        <div className="bg-[#2D1349] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-center text-base md:text-2xl">{props.heading}</h3>
            <p className="text-left my-6">{props.description}</p>
            <div className="flex my-6">
              <Link
                to={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r text-transparent bg-clip-text from-pink to-orange p-[1px] text-sm lg:text-base"
              >
                {props.website}
              </Link>
            </div>
          </div>
          <div>
            <p className="font-light uppercase text-left text-[#ffffffB3] ">TYPE: {props.type}</p>
            <hr className="border-[#ffffff40] rounded my-6" />
            <p className="">used technologies</p>
            <div className=" flex flex-wrap justify-center items-center gap-2">
              {props.technologiesUsed.map((item, index) => {
                return (
                  <div key={index}>
                    {Object.values(props.technologies)
                      .flat()
                      .map((arg, index) => {
                        if (arg.technology === item) {
                          return <arg.icon key={index} />
                        }
                      })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderElement
