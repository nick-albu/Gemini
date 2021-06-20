import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TemplateForm from './components/TemplateForm/TemplateForm';
import WorkoutForm from './components/WorkoutForm/WorkoutForm';
import PreviousWorkouts from './components/PreviousWorkouts/PreviousWorkouts'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/profile' component={Profile}/>
            <Route path='/create' component={TemplateForm} />
            <Route path='/workout/:id' component={WorkoutForm} />
            <Route path='/previous-workouts' component={PreviousWorkouts} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
