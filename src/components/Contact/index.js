import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm('gamil', 'template_2hc555n', form.current, 'MGqCnCEbYqUv663l2')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
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
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Tamar Dobrin
        <br />
        Israel
        <br />
        Jerusalem
        <br />
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="spacing" />
          tamardobrin@gmail.com
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} className="spacing" />
         +972 54-470-7477
        </span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[31.770617534250267, 35.22136663796653]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[31.770617534250267, 35.22136663796653]}></Marker>
        </MapContainer>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Contact
