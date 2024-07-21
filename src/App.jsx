// src/App.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import LoadingAnimation from './pages/AnimationLoader';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const Menu = lazy(() => import('./pages/Menu'));
const Breakfast = lazy(() => import('./components/menu/Breakfast'));
const Drinks = lazy(() => import('./components/menu/Drinks'));
const Fresh_Juice = lazy(() => import('./components/menu/Fresh_Juice'));
const HotDrinks = lazy(() => import('./components/menu/HotDrinks'));
const NonVeg = lazy(() => import('./components/menu/Non-veg'));
const PunjabiCraving = lazy(() => import('./components/menu/PunjabiCraving'));
const Raita = lazy(() => import('./components/menu/Raita'));
const Roti = lazy(() => import('./components/menu/Roti'));
const Salads = lazy(() => import('./components/menu/Salads'));
const Soups_nonveg = lazy(() => import('./components/menu/Soups_nonveg'));
const Soups_veg = lazy(() => import('./components/menu/Soups_veg'));
const Rice = lazy(() => import('./components/menu/Rice'));
const SweetDish = lazy(() => import('./components/menu/SweetDish'));
const VegetarianSnacks = lazy(() => import('./components/menu/VegetarianSnacks'));
const Lunch_dinner_nonveg = lazy(() => import('./components/menu/lunch_dinner_nonveg'));
const Lunch_dinner_veg = lazy(() => import('./components/menu/lunch_dinner_veg'));

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Your Restaurant Name | Delicious Indian Cuisine</title>
        <meta name="description" content="Enjoy authentic Indian cuisine at Your Restaurant Name. Book a table or order online for a delightful dining experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
      {isLoading && <LoadingAnimation onLoaded={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Suspense fallback={<LoadingAnimation />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booknow" element={<Booking />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/breakfast" element={<Breakfast />} />
                <Route path="/menu/drinks" element={<Drinks />} />
                <Route path="/menu/Fresh_Juice" element={<Fresh_Juice />} />
                <Route path="/menu/hotdrinks" element={<HotDrinks />} />
                <Route path="/menu/punjabicraving" element={<PunjabiCraving />} />
                <Route path="/menu/raita" element={<Raita />} />
                <Route path="/menu/roti" element={<Roti />} />
                <Route path="/menu/salads" element={<Salads />} />
                <Route path="/menu/soupveg" element={<Soups_veg />} />
                <Route path="/menu/soupnonveg" element={<Soups_nonveg />} />
                <Route path="/menu/nonveg" element={<NonVeg />} />
                <Route path="/menu/lunch_dinner_nonveg" element={<Lunch_dinner_nonveg />} />
                <Route path="/menu/lunch_dinner_veg" element={<Lunch_dinner_veg />} />
                <Route path="/menu/rice" element={<Rice />} />
                <Route path="/menu/vegetariansnacks" element={<VegetarianSnacks />} />
                <Route path="/menu/lunch-dinner/non-veg" element={<Lunch_dinner_nonveg />} />
                <Route path="/menu/lunch-dinner/veg" element={<Lunch_dinner_veg />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;