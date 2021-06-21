import './Profile.scss';
import Logo from '../../assets/logos/logo.svg';
import BabyYoda from '../../assets/images/baby-yoda.jpg';
import Create from '../../assets/images/create.svg';
import Weights from '../../assets/images/weights.svg';
import History from '../../assets/images/history.svg';
import { Link } from "react-router-dom";

function Profile () {
    return (
        <section className='profile'>
            <div className='profile__avatarContainer'>
            <h1 className='profile__name'>Baby Yoda</h1>
            <img className='profile__avatar' src={BabyYoda} alt='avatar'/>
            </div>
            <div className='profile__allContainer'>
                <div className='profile__linkContainer'>
                    <img className='profile__linkIcon' src={Create} alt='link-image' />
                    <Link className='profile__link' to='/create'>Design a new workout</Link>
                </div>
                <div className='profile__linkContainer profile__linkContainer--margin'>
                    <img className='profile__linkIcon' src={Weights} alt='link-image' />
                    <Link className='profile__link' to='workout/4950f136-5e4e-4037-994f-ed71b5a6c847'>Do a workout</Link>
                </div>
                <div className='profile__linkContainer'>
                    <img className='profile__linkIcon' src={History} alt='link-image' />
                    <Link className='profile__link' to='/previous-workouts'>View past workouts</Link>
                </div>
            </div>
            <div className='profile__footer'>
                <Link className='profile__footerLink' to='/about'>About</Link>
                <Link className='profile__footerLink' to='/contact'>Contact Us</Link>
            </div>
        </section>
    )
}

export default Profile;