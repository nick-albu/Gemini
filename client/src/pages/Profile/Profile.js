import './Profile.scss';
import { Component } from 'react';
import BabyYoda from '../../assets/images/baby-yoda.jpg';
import Create from '../../assets/images/create.svg';
import Weights from '../../assets/images/weights.svg';
import History from '../../assets/images/history.svg';
import Expand from '../../assets/images/chevron-down.svg'
import { Link } from "react-router-dom";
import axios from 'axios';

class Profile extends Component {
    state = {
        showLinks: false,
        workouts: []
    }

    toggleLinks = () => {
        this.setState({
            showLinks: !this.state.showLinks
        })
    }

    getWorkouts = () => {
        axios.get('http://localhost:8080/templates')
        .then((response) => {
            this.setState({
                workouts: response.data
            })
        })
    }

    componentDidMount () {
        this.getWorkouts()
    }

    render () {
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
                    <div onClick={this.toggleLinks} className='profile__linkContainer profile__linkContainer--margin'>
                        <img className='profile__linkIcon' src={Weights} alt='link-image' />
                        <p className='profile__link' to=''>Do a workout</p>
                        <img className='profile__expand' src={Expand} alt='arrow-down'/>
                    </div>
                    {this.state.showLinks && (
                    <div className='profile__dropdownContainer'>
                        {this.state.workouts.map((workout) => (
                        <Link className='profile__dropdownLink' to={`/workout/${workout.id}`}>{workout.name}</Link>
                        ))}
                    </div>
                    )}
                    <div className='profile__linkContainer profile__linkContainer--margin'>
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
}

export default Profile;