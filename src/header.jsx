import { Link,useNavigate } from 'react-router-dom'
import { Home,CircleUserRound,GraduationCap,Presentation,Contact } from 'lucide-react';
function Header(){
    const navigate=useNavigate()
       return(
        <div className="container">
            <ul className='header' onClick={()=>navigate('/')}><Home/>  Home</ul>
            <ul className='header' onClick={()=>navigate('/about')}><CircleUserRound/>  About</ul>
            <ul className='header' onClick={()=>navigate('/education')}><GraduationCap/>  Education</ul>
            <ul className='header' onClick={()=>navigate('/project')}><Presentation/>  Project</ul>
        </div>
       )
}
export default Header