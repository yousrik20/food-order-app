import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
const Navbar =()=>{
    const [showLinks,setShowLinks]=useState(false);
    function Click(){
        setShowLinks(!showLinks)
    }
    return(
        <div className="navbar">
            <div className="leftSide" id={showLinks?'open':'close'}>
                <img alt='logo' src={logo}/>
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Menu</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to='/'>Home</Link>
                <Link to='/'>Menu</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                <button onClick={Click}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;