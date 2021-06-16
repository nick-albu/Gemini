import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import TemplateForm from './components/TemplateForm/TemplateForm';
import About from './pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/create' component={TemplateForm} />
            <Route path='/about' component={About}/>
          </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
