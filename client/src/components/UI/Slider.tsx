import { Link } from 'react-router-dom'

type singleTechnologyType = { technology: string; icon: (props: any) => JSX.Element | Element | any }

interface Props {
  image: string
  imageAlt: string
  heading: string
  description: string
  website: string
  link: string
  figma?: string
  projectsUsedTechnologies: string
  ProjectType: string
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
    <div className="flex flex-col md:flex-row text-sm shadow-sm">
      <div className="max-w-[70vw] mx-auto flex flex-col md:flex-row gap-6 p-2 bg-[#2D1349] ">
        <img src={props.image} alt={props.imageAlt} className="max-w-[clamp(200px,550px)] md:self-start self-center" />
        <div className="p-2 md:p-6 text-left lg:text-center">
          <h3 className="text-base md:text-2xl italic">{props.heading}</h3>
          <p className="text-left my-6">{props.description}</p>
          <Link
            to={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r text-transparent bg-clip-text from-pink to-orange p-[1px] text-sm lg:text-base"
          >
            {props.website}
          </Link>
          <p className="font-light uppercase text-[#ffffffB3] my-6">
            {props.ProjectType}: {props.type}
          </p>

          {props.figma && (
            <Link
              className="box-border my-6 py-2 px-5 bg-buttonOrange mr-auto text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]"
              to={props.figma}
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </Link>
          )}
          <hr className="border-[#ffffff40] rounded my-6" />
          <p className="text-center my-6">{props.projectsUsedTechnologies}</p>
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
  )
}

export default SliderElement
