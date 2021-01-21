import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import RoutinesApiService from './services/routines-api-service';
import './App.css';
import Header from './components/Header/Header';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import OpeningPage from './routes/OpeningPage/OpeningPage';
import LoginPage from './routes/LoginPage/LoginPage';
import HomePage from './routes/HomePage/HomePage'
import PrivateRoute from './utils/PrivateRoute';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import TokenService from './services/token-service';

function App() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      RoutinesApiService.getAllRoutines()
        .then(res => {
          setRoutines(res);
        })
    }
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <PublicOnlyRoute
            exact path={'/'}
            component={OpeningPage}
          />
          <PublicOnlyRoute
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
