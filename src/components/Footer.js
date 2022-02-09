import '../styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer=()=>{
    return(
        <div className="footer">
            <div className="socialMedia">
                <a href='https://www.instagram.com/yousri.kamal/' target='_blank'>
                <InstagramIcon/>
                </a>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
                
            </div>
            <p className='copyright'>Made With <FavoriteIcon/> By Yousri Kamal &copy; 2022</p>
        </div>
    )
}

export default Footer;