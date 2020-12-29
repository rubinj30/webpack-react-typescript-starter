import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from '../components/About/About';

export const Routes = () => {
  return (
    <Router>
      <Route exact path='/about'>
        <About />
      </Route>
    </Router>
  );
};
