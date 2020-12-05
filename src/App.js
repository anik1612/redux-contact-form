import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ContactForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
