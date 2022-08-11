import { useEffect, useState } from 'react'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
              idx={15}
            />
          </h1>
          <p>
          Ingeniero de ejecución en informática en la PUCV, me considero apasionado por todo lo que implique crear y diseñar cosas en entorno web.
          </p>
          <p align="LEFT">
          Scrum es mi metodología predilecta para trabajar, la aprendí en el curso 
          'Ingeniería de requerimientos', aunque también me familiarizo con Kanban y Scrumban.
          </p>
          <p>
          Considero que el trabajo en equipo y la empatía hacia los compañeros son fundamentales para alcanzar 
          los objetivos de cualquier proyecto, esto de la mano con la buena comunicación y el respeto.
          </p>
          <p>
          Soy un niño de los 90's y como tal, amo Pokemon, los videojuegos, el cine (demasiado), los memes y los gatos. Mi Power Ranger favorito siempre es el rojo, y tengo una colección de VHS y DVDs.
          </p>
          <p>
            Te invito a ver los proyectos en los qué he participado en mi github, y a descargar mi CV haciendo click <a href="https://github.com/personaseria23/portafolio/blob/main/Carlos%20Cubillos%20CV%20(1).pdf" >aquí</a>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
