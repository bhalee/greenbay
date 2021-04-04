import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import Item from './pages/Item/Item';
import Register from './pages/Register/Register';
import AddItem from './pages/AddItem/AddItem';
import ShowItems from './components/ShowItems/ShowItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">

        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/market">
          <ShowItems />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/add-item">
          <AddItem />
        </Route>
        <Route path="/market/:id" component={Item} />
        </div>
      </Router>
    </div>
  );
}

export default App;
