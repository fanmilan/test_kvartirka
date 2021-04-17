import {getAsteroids} from "./api/nasaAPII";
import {useEffect, useState} from "react";
import {HomePage} from "./components/HomePage/HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {DestroyPage} from "./components/DestroyPage/DestroyPage";
import {AsteroidPage} from "./components/AsteroidPage/AsteroidPage";

function App() {


   /* getAsteroids()
        .then((result) => {
          console.log(result);
          setAsteroids(result);
        });
  }, []);*/




  return (
      <Router>
          <Switch>
              <Route path="/destroy">
                  <DestroyPage />
              </Route>
              <Route path="/asteroids/:asteroid_id">
                  <AsteroidPage />
              </Route>
              <Route path="/">
                  { <HomePage />}
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
