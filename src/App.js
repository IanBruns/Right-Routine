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
import AddExercisePage from './routes/AddExercisePage/AddExercisePage';
import GenerateWorkoutsPage from './routes/GenerateWorkoutsPage/GenerateWorkoutsPage';
import AssignedWorkoutPage from './routes/AssignedWorkoutPage/AssignedWorkoutPage';
import AddRoutinesPage from './routes/AddRoutinesPage/AddRoutinesPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import ManageRoutesExercisesPage from './routes/ManageRoutesExercisesPage/ManageRoutesExercisesPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      RoutinesApiService.getAllRoutines()
        .then(res => {
          setRoutines(res);
        })
    }
  }, [isLoggedIn]);

  function whenLoggedIn() {
    setIsLoggedIn(true);
  }

  function whenLoggedOut() {
    setIsLoggedIn(false);
  }

  function addRoutine(newRoutine) {
    const addRoutines = routines;
    addRoutines.push(newRoutine);

    setRoutines(addRoutines);
  }

  function removeRoutine(routine_id) {
    console.log(routine_id);
  }

  return (
    <div className="App">
      <header>
        <Header
          whenLoggedOut={whenLoggedOut} />
      </header>
      <main>
        <Switch>
          <PublicOnlyRoute
            exact path={'/'}
            component={OpeningPage}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
          <PublicOnlyRoute
            path={'/register'}
            component={RegistrationPage}
          />
          <PrivateRoute
            path={'/home'}
            component={HomePage}
          />
          <PrivateRoute
            path={'/add-workout'}
            component={AddExercisePage}
            routines={routines}
          />
          <PrivateRoute
            path={'/add-routine'}
            component={AddRoutinesPage}
            addRoutine={addRoutine}
          />
          <PrivateRoute
            path={'/generate-workout'}
            component={GenerateWorkoutsPage}
            routines={routines}
            removeRoutine={removeRoutine}
          />
          <PrivateRoute
            path={'/workout/:routine_id'}
            component={AssignedWorkoutPage}
          />
          <PrivateRoute
            path={'/manage/:routine_id'}
            component={ManageRoutesExercisesPage}
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
