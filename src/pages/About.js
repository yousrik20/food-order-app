import '../styles/About.css';
import AboutImage from '../assests/about.jpg';

const About=()=>{
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis molestias, nihil ducimus explicabo totam in reprehenderit illo ut velit quidem adipisci molestiae omnis temporibus harum eligendi dignissimos saepe voluptatibus. Quo.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis molestias, nihil ducimus explicabo totam in reprehenderit illo ut velit quidem adipisci molestiae omnis temporibus harum eligendi dignissimos saepe voluptatibus. Quo.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis molestias, nihil ducimus explicabo totam in reprehenderit illo ut velit quidem adipisci molestiae omnis temporibus harum eligendi dignissimos saepe voluptatibus. Quo.
                </p>
            </div>
        </div>
    )
}

export default About;