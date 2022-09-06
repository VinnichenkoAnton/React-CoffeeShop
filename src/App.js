import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/Spinner';

const MainPage = lazy(() => import('./components/pages/MainPage'));
const OurCoffeePage = lazy(() => import('./components/pages/OurCoffeePage'));
const SingleProductPage = lazy(() => import('./components/pages/SingleProductPage'));
const YourPleasurePage = lazy(() => import('./components/pages/YourPleasurePage'));
const Page404 = lazy(() => import('./components/pages/404'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/ourcoffee" element={<OurCoffeePage />} />

          <Route path="/ourcoffee/:id" element={<SingleProductPage />} />

          <Route path="/yourpleasure" element={<YourPleasurePage />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
