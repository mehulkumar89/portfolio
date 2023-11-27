import Header from "./header"
import Footer from "./footer"
import { ChevronRightCircle,ChevronLeftCircle } from 'lucide-react';
import { useState } from "react";
function Education(){
    const [ind,setind]=useState(1)
    function next(){
        if(ind==3){
            setind(1)
        }
        else{
            setind(ind+1)
        }
    }
    function prev(){
        if(ind==1){
            setind(3)
        }
        else{
            setind(ind-1)
        }
    }
 return(
    <>
     <Header/>
     {ind==1 && (
     <div className="edu">
        <div className="head">10 TH</div>
        <div className="pd">
        <h3>College/School Name:-&nbsp; <span>Saraswati Vidya Mandir</span> </h3>
        <h3>Board:-&nbsp; CBSE</h3> 
        <h3>Passing Year:-&nbsp; 2017</h3>
        <h3>Marks Type:-&nbsp; Percentage</h3>
        <h3>Marks :-&nbsp; 93.1</h3></div>
        <div className="arrow">
        <ChevronRightCircle  className='eduarr'onClick={()=>next()}/>
        <ChevronLeftCircle  className='eduarr'onClick={()=>prev()}/>
        </div>
     </div>)}
     {ind==2 && (
     <div className="edu">
        <div className="head">12 TH</div>
        <div className="pd">
        <h3>College/School Name:-&nbsp; <span>Saraswati Vidya Mandir</span> </h3>
        <h3>Board:-&nbsp; CBSE</h3> 
        <h3>Passing Year:-&nbsp; 2019</h3>
        <h3>Marks Type:-&nbsp; Percentage</h3>
        <h3>Marks:-&nbsp; 77</h3></div>
        <div className="arrow">
        <ChevronRightCircle className='eduarr' onClick={()=>next()}/>
        <ChevronLeftCircle  className='eduarr'onClick={()=>prev()}/>
        </div>
     </div>)}
     {ind==3 && (
     <div className="edu">
        <div className="head">B.Tech</div>
        <div className="pd">
        <h3>College/School Name:-&nbsp; <span>Narula Institute Of Technology</span> </h3>
        <h3>Stream:-&nbsp; Computer Science Engineering</h3> 
        <h3>Passing Year:-&nbsp; 2020-Present</h3>
        <h3>Marks Type:-&nbsp; Cgpa</h3>
        <h3>Marks:-&nbsp; 8.70</h3></div>
        <div className="arrow">
        <ChevronRightCircle  className='eduarr' onClick={()=>next()}/>
        <ChevronLeftCircle  className='eduarr'onClick={()=>prev()}/>
        </div>
     </div>)}
     <Footer/>
    </>
 )
}
export default Education