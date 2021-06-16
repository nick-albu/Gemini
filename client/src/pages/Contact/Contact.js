import './Contact.scss';
import Logo from '../../assets/logos/logo.svg';
import { Link } from "react-router-dom";

function Contact () {
    return (
        <section className='contactPage'>
            <h1 className='contactPage__header'>Contact Us</h1>
            <img className='contactPage__hero' src={Logo} alt=''/>
            <div className='contactPage__container'>
                <h2 className='contactPage__infoHeader'>Gemini HQ</h2>
                <p className='contactPage__info'>141 Bay Street</p>
                <p className='contactPage__info'>Toronto, ON </p>
                <p className='contactPage__info'>416 368 2719</p>
            </div>
            <div className='contactPage__container contactPage__container--margin'>
                <h2 className='contactPage__infoHeader'>Support</h2>
                <p className='contactPage__info'>416 368 0192</p>
                <a href="mailto:support@geminifitness.com?" className='contactPage__info'>support@geminifitness.com</a>
            </div>
            <div className='contactPage__container'>
                <h2 className='contactPage__infoHeader'>Careers</h2>
                <p className='contactPage__info'>Not hiring at this time,
                    send inquiries to 
                </p>
                <a className='contactPage__info' href="mailto:careers@geminifitness.com?">careers@geminifitness.com</a>
            </div>
            <Link className='contactPage__return' to='/'>Back To Profile</Link>
        </section>
    )
}

export default Contact;