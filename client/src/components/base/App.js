import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import MovieList from '../movies/MovieList';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container h-100">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/movies" component={MovieList}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
