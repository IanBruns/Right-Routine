import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import OpeningPage from './routes/OpeningPage/OpeningPage';
import LoginPage from './routes/LoginPage/LoginPage';
import HomePage from './routes/HomePage/HomePage'
import PrivateRoute from './utils/PrivateRoute';

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
            path={'/login'}
            component={LoginPage} />
          <PrivateRoute
            path={'/home'}
            component={HomePage}
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
