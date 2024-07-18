import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/home/Navbar';
import Booking from './pages/Booking';
import Breakfast from './components/menu/Breakfast';

import HotDrinks from './components/menu/HotDrinks';
import NonVeg from './components/menu/Non-veg';
import PunjabiCraving from './components/menu/PunjabiCraving';
import Raita from './components/menu/Raita';
import Roti from './components/menu/Roti';
import Salads from './components/menu/Salads';
import Soups_nonveg from './components/menu/Soups_nonveg';
import Soups_veg from './components/menu/Soups_veg';
import Rice from './components/menu/Rice';
import SweetDish from './components/menu/SweetDish';
import VegetarianSnacks from './components/menu/VegetarianSnacks';
import Fresh_Juice from './components/menu/Fresh_Juice';
import Lunch_dinner_nonveg from './components/menu/lunch_dinner_nonveg';
import Lunch_dinner_veg from './components/menu/lunch_dinner_veg';
// import Breakfast_nonveg from './components/menu/breakfast_nonveg';
import Menu from './pages/Menu';
import Drinks from './components/menu/Drinks';
import Footer from './components/home/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<Booking/>} />
        {/* #MENU */}
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
        <Route path="/menu/lunch-dinner/veg" element={<Lunch_dinner_veg/>} />
        {/* <Route path="/menu/Breakfast_nonveg" element={<Breakfast_nonveg />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
