import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import Animatedletters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="projects">
          <h1>My Recent Works</h1>
          <div>
            <h3>
              Pet shop using .Net mvc
              <a href="https://github.com/tamardobrin/PerShop">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </a>
            </h3>
            <h3>
             Storage using c#, data structures
              <a href="https://github.com/tamardobrin/Storage">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </a>
            </h3>
            <h3>
              Library using wpf, c
              <a href="https://github.com/tamardobrin/Library">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </a>
            </h3>
           
          </div>
        </div>
        <div className="text-zone">
          <h1>
            <Animatedletters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
         
          </h1>
          <p>
            Hi Everyone, I am{' '}
            <span style={{ color: 'darkviolet' }}>Tamar Dobrin</span> I am a junior Full Stuck Developer.
          </p>
          <p>I am a junior Full Stuck Developer.</p>
          <p>
            I have a big passion for coding, technologies, and when I walk with
            a cumputer in my backpack I feel like I have a super power nobody
            knows about; like spiderman but my wish is to make the world a
            better place through the internet.{' '}
          </p>
          <p>
            I'm responsible, ambitious, always hungry for more knowledge, a team
            player with high social skills and a problem solver.
          </p>
          <p>
            <p>Here are some of my skills:</p>
            <ul>
              <li>.Net</li>
              <li>React</li>
              <li>sql</li>
              <li>.c#</li>
              <li>JS</li>
            </ul>
          </p>
          <div className='cv'>
            <Link to="/TamarDobrinResume.pdf" target="_blank" download>Download CV</Link>
            </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default About
