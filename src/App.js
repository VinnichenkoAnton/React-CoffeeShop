import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import OurCoffeePage from './components/pages/OurCoffeePage';
import SingleProductPage from './components/pages/SingleProductPage';
import YourPleasurePage from './components/pages/YourPleasurePage';
import Page404 from './components/pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/ourcoffee">
          <OurCoffeePage />
        </Route>

        <Route path="/ourcoffee/:id">
          <SingleProductPage />
        </Route>

        <Route exact path="/yourpleasure">
          <YourPleasurePage />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
