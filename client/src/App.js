import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TemplateForm from './components/TemplateForm/TemplateForm';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/create' component={TemplateForm} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
