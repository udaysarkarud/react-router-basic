import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllMeals from './components/AllMeals/AllMeals';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';
function App() {
  const [getText, setGetText] = useState('')

  const handelInputText = e => {
    setGetText(e.target.value)
  }

  return (
    <div className="App">
      <Router>
        <Header handelInputText={handelInputText} />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/allmeals'>
            <AllMeals searchedText={getText} />
          </Route>


          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/singleMeal/:getMealID'>
            <SingleMealDetails />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
