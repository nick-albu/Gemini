import './LandingPage.scss';
import Logo from '../../assets/logos/logo.svg';
import { Link } from "react-router-dom";


function LandingPage() {
    return (
        <section className='landingPage'>
            <img className='landingPage__logo' src={Logo} alt='landing-page-logo'/>
            <Link to='/profile' className='landingPage__cda'>GET STARTED</Link>
        </section>
    )
}

export default LandingPage;