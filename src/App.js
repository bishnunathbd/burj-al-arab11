import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Book from './components/Book/Book';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/book/:bedType'>
          <Book></Book>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
