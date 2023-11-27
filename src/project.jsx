import Header from "./header"
import Footer from "./footer"
import { Link } from 'lucide-react';
function Project(){
   return(
    <>
    <Header/>
    <div className="grd">
      <div>
         <h1 className="col">NEWS-API</h1>
         <p>
            <h2>About:- </h2><span>IT AN WEBSITE WHICH SHOWS LIVE NEWS
            IN INDIA.<br></br>IT ALSO CONTAINS DIFFERENT CATEGORY LIKE SPORTS, SCIENCE
            ETC.</span>
            <h2>TOOLS USED:-</h2>
               1.React
               2.newa-api
            <h2>WEBSITE LIVE AT:- <a className='acol' href="https://news-api-ashen.vercel.app" target="blank"><Link/>web-api<Link/></a></h2>   
         </p>
      </div>
      <div className="bor">
      <h1 className="col">LEARNING MANAGEMENT SYSTEM</h1>
         <p>
            <h2>About:- </h2><span>
            BUILD LEARNING MANGEMENT SYSYTEM IN WHICH<br></br> 
            ADMIN(TEACHERS) CAN ADD NEW COURSES AND LECTURES WHERE<br></br> 
            USER(STUDENT)CAN ABLE TO VIEW COURSES AND AFTER<br></br>
            COMPLETING THE PAYMENT PROCESS THEY CAN ALSO ABLE<br></br> 
            TO ACCESS THE COURSE.
            </span>
            <h2>TOOLS USED:-</h2>
               1.React
               2.mongodb
               3.express
               4.razorpay
               5.Cloudinary
               6.Bcrypt
            <h2>WEBSITE LIVE AT:- <a className='acol' href="https://lms-frontend-sandy.vercel.app" target="blank"><Link/>lms-portal<Link/></a></h2>   
         </p>
      </div>
      </div>
    <Footer/>
    </>
   )
}
export default Project