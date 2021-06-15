import './TemplateForm.scss';

function TemplateForm() {
    return (
        <section className='templateForm'>
            <form>
                <div>
                    <label>Workout Name</label>
                    <input></input>
                </div>
                <div>
                    <div>
                        <label>Exercises</label>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                    <div>
                        <label>Repetitions</label>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default TemplateForm;