import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/t-remove.png'
import emoji from '../../assets/images/emoji.png'
import './index.scss';
import Loader from 'react-loaders';



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray =['a','m','a','r']
  //const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r']
 

  useEffect (()=> {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')

    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
           <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}/>
          <br />
          {/* <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={19}/> */}
        </h1>
        <h2>Full stuck developer</h2>
        <Link to="/contact" className='flat-button'>contact me</Link>
      </div>
      <img className='emoji' src={emoji} alt='programmer'/>
    </div>
    <Loader type='line-spin-fade-loader'/>
    </>
  )
}
export default Home;
