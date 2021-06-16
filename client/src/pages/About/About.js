import './About.scss';
import Logo from '../../assets/logos/logo.svg';
import { Link } from "react-router-dom";

function About() {
    return (
        <section className='aboutPage'>
            <h1 className='aboutPage__header'>About Us</h1>
            <img className='aboutPage__hero' src={Logo} alt=''/>
            <p className='aboutPage__statement'>Gemini is all about providing a quality fitness
                assistant app, while making exercise tracking as 
                easy as possible for the user while limiting necessary
                screen time in order to  keep focus on your fitness.
            </p>
            <Link className='aboutPage__return' to='/'>Back To Profile</Link>
        </section>
    )
}

export default About;