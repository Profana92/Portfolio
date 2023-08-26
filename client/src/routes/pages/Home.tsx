
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home | Wojciech Marczak | Let&apos;s Build The Web Together! </title>
        <meta
          name="description"
          content="Welcome to my front-end developer portfolio! Take a tour of my work, skills, and projects. Let's create stunning websites together! Enjoy your visit!"
        />
      </Helmet>
      <section className="bg-home-hero-pattern min-h-dvh bg-cover bg-no-repeat bg-bottom pt-12"></section>
    </div>
  )
}

export default Home
