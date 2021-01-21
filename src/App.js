import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import OpeningPage from './routes/OpeningPage/OpeningPage'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={OpeningPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
