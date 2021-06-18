import './Profile.scss';
import Logo from '../../assets/logos/logo.svg';
import BabyYoda from '../../assets/images/baby-yoda.jpg'
import { Link } from "react-router-dom";

function Profile () {
    return (
        <section className='profile'>
            <h1>Baby Yoda</h1>
            <img className='profile__avatar' src={BabyYoda} alt='avatar'/>
            <div className='profile__linkContainer'>
                <img className='profile__linkIcon' src='/' alt='link-image' />
                <Link to='/create'>Design a new workout</Link>
            </div>
            <div className='profile__linkContainer'>
                <img className='profile__linkIcon' src='/' alt='link-image' />
                <Link to='/create'>Do a workout</Link>
            </div>
            <div className='profile__linkContainer'>
                <img className='profile__linkIcon' src='/' alt='link-image' />
                <Link to='/create'>View past workouts</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </section>
    )
}

export default Profile;