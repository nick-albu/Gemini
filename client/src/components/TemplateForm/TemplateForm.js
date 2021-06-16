import './TemplateForm.scss';
import { Component } from 'react';
import axios from 'axios';
import TemplateInput from '../TemplateInput/TemplateInput'

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

handleExerciseChange (index, key, value) {
    const copy = JSON.parse(JSON.stringify(this.state));
    copy.exercises[index][key] = value;
    this.setState(copy)
}

sendForm() {
    const newWorkout = {
    name: this.state.name,
    exercises: this.state.exercise
    }
    axios.post('http://localhost:8080/templates', {newWorkout})
}

    render () {
        return (
        <form>
            {this.state.exercises.map((exercise, i) => (
                <TemplateInput
                    index={i} 
                    // name={exercises.name} 
                    // sets={exercises.sets} 
                    handleChange={this.handleExerciseChange}/>
            ))}
            <button onClick={this.sendForm}>SUBMIT</button>
        </form>
        )
    }
    
}

export default TemplateForm;


// return (
//     <section className='templateForm'>
//         <form>
//             <div>
//                 <label>Workout Name</label>
//                 <input></input>
//             </div>
//             <div>
//                 <div>
//                     <label>Exercises</label>
//                     <input name=''></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                 </div>
//                 <div>
//                     <label>Repetitions</label>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                     <input></input>
//                 </div>
//             </div>
//         </form>
//     </section>
// )