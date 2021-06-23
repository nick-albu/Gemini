import './TemplateForm.scss';
import { Component } from 'react';
import axios from 'axios';
import TemplateInput from '../TemplateInput/TemplateInput'
import { Link } from "react-router-dom";
import Back from '../../assets/images/chevron-left.svg';

class TemplateForm extends Component {
    state = {
        name: "",
        exercises: [
            {name: "", sets: 0},
            {name: "", sets: 0},
            {name: "", sets: 0},
            {name: "", sets: 0},
            {name: "", sets: 0},
            {name: "", sets: 0},
        ]
    }

    updateName = (e) => {
        this.setState({name: e.target.value})
    }

    handleExerciseChange = (index, key, value) => {
        const exercisesCopy = [...this.state.exercises];
        const exercise = exercisesCopy[index];
        exercise[key] = value;
        this.setState({exercises: exercisesCopy})
    }

    sendForm = (e) => {
        const newWorkout = {
        name: this.state.name,
        exercises: this.state.exercises
        }
        e.preventDefault();
        axios.post('http://localhost:8080/templates', newWorkout)
        .then ((response) => {
            this.props.history.push("/profile")
        })
    }

    render () {
        return (
        <section className='templateForm'>
            <div className='templateForm__headerContainer'>
                <Link to='/profile'><img className='templateForm__back' src={Back} alt='logo'/></Link>
                <h1 className='templateForm__header'>Create a template</h1>
            </div>
            <form className='templateForm__form'>
                <h2 className='templateForm__formHeader'>Your Workout Name</h2>
                <input className='templateForm__templateName' placeholder='ex/ Chest and Back Day
                ' type='text' name='name' onChange={this.updateName}></input>
                {this.state.exercises.map((exercise, i) => (
                    <TemplateInput
                        key={i}
                        index={i} 
                        handleChange={this.handleExerciseChange}/>
                ))}
                <div className='templateForm__buttonContainer'>
                    <button className='templateForm__button' onClick={this.sendForm}>SUBMIT</button>
                </div>
            </form>
        </section>
        )
    }
    
}

export default TemplateForm;
