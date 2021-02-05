import './App.css';
import NavBar from './Components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/home';
import CreateTest from './Components/createTest';
import Test from './Components/test';
import Question from './Components/question';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/createtest' component={CreateTest}/>
        <Route exact path="/game/test/:id" component={Test}/>
      </Switch>
    </Router>      
  );
}

export default App;
