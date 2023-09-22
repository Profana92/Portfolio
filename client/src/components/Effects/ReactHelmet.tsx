import { Helmet } from 'react-helmet-async'
interface Props {
  title: string
  description: string
  contentLanguage: string
}
const ReactHelmet = (props: Props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta httpEquiv="Content-Language" content={props.contentLanguage} />
    </Helmet>
  )
}

export default ReactHelmet
