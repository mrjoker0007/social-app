import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
