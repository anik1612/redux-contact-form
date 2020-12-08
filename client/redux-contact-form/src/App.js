import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ContactForm from './components/ContactForm/ContactForm';
import Information from './components/Information/Information';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ContactForm />
        </Route>
        <Route path="/info">
          <Information />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
