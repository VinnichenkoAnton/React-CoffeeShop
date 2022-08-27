import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import OurCoffeePage from './components/pages/OurCoffeePage';
import ProductPage from './components/pages/ProductPage';
import YourPleasurePage from './components/pages/YourPleasurePage';

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

        <Route exact path="/ourcoffee/:id">
          <ProductPage />
        </Route>

        <Route exact path="/yourpleasure">
          <YourPleasurePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
