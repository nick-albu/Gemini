import './PreviousWorkouts.scss';
import { Component } from 'react';
import axios from 'axios';
import Back from '../../assets/images/chevron-left.svg';
import { Link } from "react-router-dom";

class PreviousWorkouts extends Component {
    state = {
        workouts: []
    }

    // Collects workout data and displays it newest to oldest
    componentDidMount() {
        axios.get('http://localhost:8080/workouts')
        .then((response) => {
            const newToOld = response.data.reverse()
            this.setState({
                workouts: newToOld
            })
        })
    }

    // Takes a date string and turns it into (dd/mm/yyyy) format
    dateFormat = (date) => {
        let newDate = new Date(date).toLocaleDateString("en-US");
        return newDate;
    }

    render () {
        return (
        <section className='previousWorkouts'>
            <div className='previousWorkouts__headerContainer'>
                <Link to='/profile'><img className='previousWorkouts__back' src={Back} alt='back-arrow'/></Link>
                <h1 className='previousWorkouts__header'>Previous Workouts</h1>
            </div>
            {this.state.workouts.map((workout) => (
                <div className='previousWorkouts__workoutContainer'>
                    <div className='previousWorkouts__dateContainer'>
                        <h2 className='previousWorkouts__workoutHeader'>{workout.name}</h2>
                        <p className='previousWorkouts__date'>{this.dateFormat(workout.date)}</p>
                    </div>
                    {workout.exercises.map((exercise) => (
                        <div className='previousWorkouts__exerciseContainer'>
                            <p className='previousWorkouts__exerciseName'>{exercise.name}</p>
                            <div className='previousWorkouts__setsContainer'>
                                <div className='previousWorkouts__labelContainer'>
                                <p className='previousWorkouts__setsLabel'>Weight</p>
                                <p className='previousWorkouts__setsLabel'>Reps</p>
                                </div>
                                {exercise.sets.map((set) => (
                                    <div className='previousWorkouts__infoContainer'>
                                        <p className='previousWorkouts__repsValue'>{set.weight}</p>
                                        <p className='previousWorkouts__repsValue'>{set.reps}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
        )
    }
}

export default PreviousWorkouts;
