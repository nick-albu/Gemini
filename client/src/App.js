import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
          </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
