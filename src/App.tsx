import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/quiz" component={Quiz}/>
        <Route render={ErrorPage}/>
      </Switch>

    </div>
  );
}

export default App;
