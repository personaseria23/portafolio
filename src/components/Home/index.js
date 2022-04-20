import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 'r', 'l', 'i']
  const jobArray = [
    'd',
    'e',
    's',
    'a',
    'r',
    'r',
    'o',
    'l',
    'l',
    'a',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
    '.'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _15`}>!</span>

            <br />
            <span className={`${letterClass} _16`}>S</span>
            <span className={`${letterClass} _17`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <img
              src={LogoTitle}
              alt="Desarrollador de Javascript, Desarrollador Web"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Desarrollador Web / Estudiante de ingeniería / Amante del diseño</h2>
          <Link to="/contact" className="flat-button">
            Hablemos! =)
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
