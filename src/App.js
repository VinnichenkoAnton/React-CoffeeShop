import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Spinner from './components/spinner/Spinner';
import './App.scss';

const MainPage = lazy(() => import('./components/pages/MainPage'));
const OurCoffeePage = lazy(() => import('./components/pages/OurCoffeePage'));
const SingleProductPage = lazy(() => import('./components/pages/SingleProductPage'));
const YourPleasurePage = lazy(() => import('./components/pages/YourPleasurePage'));
const Page404 = lazy(() => import('./components/pages/404'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AnimatedSwitch />
      </Suspense>
    </Router>
  );
}

const AnimatedSwitch = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage />} />

        <Route path="/ourcoffee" element={<OurCoffeePage />} />

        <Route path="/ourcoffee/:id" element={<SingleProductPage />} />

        <Route path="/yourpleasure" element={<YourPleasurePage />} />

        <Route path="notfound" element={<Page404 />} />

        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
};

export default App;
