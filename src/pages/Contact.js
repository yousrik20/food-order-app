import '../styles/Contact.css';
import ContactImage from '../assests/contact.jpg';
const Contact=()=>{
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">
                        Full Name 
                    </label>
                    <input name="name" type='text' placeholder="Enter Your Name"/>
                    <label htmlFor="Email">
                        Email 
                    </label>
                    <input type='email' name='email' placeholder=""/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows='7' placeholder='Enter Your Message'></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;