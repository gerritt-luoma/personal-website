import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='home_container'>
      <div className='image_container'>
        <Image src='/gerritt.png' width={240} height={240}/>
      </div>
      <h1>
        Gerritt <span className='accent'>Luoma</span>
      </h1>
      <h2>
        About Me
      </h2>
      <div className='home_section'>
        <h3>
          Occupation
        </h3>
        <p className='home_paragraph'>
          I am currently an Embedded Software Engineer
          at DISH Network.        
        </p>
      </div>
    </div>
  )
}

export default Home
