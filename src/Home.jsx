import Footer from "./footer"
import Header from "./header"
import { ArrowRight } from 'lucide-react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
function Home() {
  return (
    <>
      <Header />
      <div className='pg'>
        <div className='left'>
          Hi There, I am<br></br>
          <span className='name'>Mehul Kumar</span> <br></br>
          Full Stack Mern developer.<br></br>
          <div className="conn">
            CONNECT WITH ME <ArrowRight />
            <div className="icons">
              <a href="https://www.linkedin.com/in/mehul-kumar-2401mk/" target="blank"><BsLinkedin/></a> 
              &nbsp; &nbsp; 
              <a href="https://instagram.com/mehulkr_2401?igshid=MzMyNGUyNmU2YQ==" target="blank"><BsInstagram /></a> &nbsp; &nbsp;
              <a href="https://github.com/mehulkumar89" target="blank"><BsGithub /></a>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src='png.jpeg'></img>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home