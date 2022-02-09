import { Link } from 'react-router-dom';
import paneer from '../assests/indian.jpg';
import '../styles/Home.css';
const Home=()=>{
    return(
        <div className="home" style={{backgroundImage:`url(${paneer})`}}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to='/'>
                    <button>Order Now</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Home;