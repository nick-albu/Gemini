import './PreviousWorkouts.scss';
import { Component } from 'react';
import axios from 'axios';
import Logo from '../../assets/logos/logo.svg';

class PreviousWorkouts extends Component {
    state = {
        workouts: []
    }

    componentDidMount() {
        axios.get('http://localhose:8080/workouts')
        .then((response) => {
            this.setState({
                workouts: response.data
            })
        })
    }

    render () {
        return (
        <section className='previousWorkouts'>
            <h1>Previous Workouts</h1>
            {this.state.workouts.map((workout) => (
                <h1>test</h1>
            ))}
        </section>
        )
    }
    


export default PreviousWorkouts;
