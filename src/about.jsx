import Header from "./header"
import Footer from "./footer"
import { useState } from "react"
import {ArrowRight,X,XCircle } from 'lucide-react'
function About() {
  const [img, setimg] = useState(false)
  function handleimg() {
    setimg(true)
  }
  function Closeimg(){
    setimg(false)
  }
  return (
    <>
      <Header />
      <div className="aboutpg">
        <div>
          <h2>Career Objective</h2>
          Intend to build a career with an organization,
          with committed <br></br> and dedicated people,
          which will help <br></br> me to explore my
          potential and attain growth and establishment.<br></br>
          <h2>Skills</h2>
          <ul>
            <li  id="id">C</li>
            <li id="id">C++</li>
            <li id="id">Java</li>
            <li id="id">React</li>
            <li id="id">mongodb</li>
            <li id="id">Sql</li>
          </ul>
        </div>
        <div>
          <h2>Subject of interest:-</h2>
          <p>Data Structure and algorithm</p>
          <h2 className='tool'>Tools Used</h2>
          <ul>
            <li  id="tools">github</li>
            <li id="tools">Git</li>
            <li id="tools">vercel</li>
            <li id="tools">Render</li>
            <li id="tools">Node</li>
          </ul>
      
        </div>
        <div>
          <h2>Internship</h2>
          <p>
            I HAVE SUCCESSFULLY COMPLETED A 7-WEEK
            <br></br>“PERSISTENT MARTIAN-SUMMER
            INTERNSHIP PROGRAM 2023” AT PERSISTENT SYSTEM.<br></br><br></br>
            {!img &&
              <span className='btn' onClick={() => handleimg()}>VIEW  CERTIFICATE <span className="arr"><ArrowRight/></span></span>
            }
             {img && <>
            <span className='btn1' onClick={() => Closeimg()}>Close <span className="arr"><XCircle/></span></span>
            <img className='img' src='certificate.png' width='400px' height='250px'></img>
          </>
          }
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default About
