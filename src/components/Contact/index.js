import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t3wgb99',
        'template_xnzu0sx',
        form.current,
        'UfTStHDNHNVUbLsBw'
      )
      .then(
        () => {
          alert('Mensaje enviado! espero responderte pronto =)')
          window.location.reload(false)
        },
        () => {
          alert('Error al enviar el mensaje, inténtalo de nuevo.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'a', 'b', 'l', 'e', 'm', 'o', 's',' ', '=', ')']}
              idx={15}
            />
          </h1>
          <p>
           Actualmente me encuentro buscando trabajo! Envíame un mensaje para que podamos hablar sobre cualquier proyecto qué tengas en mente!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar." />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Carlos Cubillos,
          <br />
          Viña del mar, Chile
          <br />
          <br />
          <span>carlos.cubillos.a@mail.pucv.cl</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.02457, -71.55183]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.02457, -71.55183]}>
              <Popup>El charli estuvo aquí.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
