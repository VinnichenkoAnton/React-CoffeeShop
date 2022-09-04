import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import OurCoffeePage from './components/pages/OurCoffeePage';
import SingleProductPage from './components/pages/SingleProductPage';
import YourPleasurePage from './components/pages/YourPleasurePage';
import Page404 from './components/pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/ourcoffee" element={<OurCoffeePage />} />

        <Route path="/ourcoffee/:id" element={<SingleProductPage />} />

        <Route path="/yourpleasure" element={<YourPleasurePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
