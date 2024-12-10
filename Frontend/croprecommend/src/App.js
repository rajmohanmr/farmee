import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Croprec from './components/Croprec.jsx';
import Home from './components/Home.jsx';
import Cropguide from './components/Cropguide.jsx';
import Fertrec from './components/Fertrec.jsx';
import Diseasdet from './components/Diseasdet.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Aboutus from './components/Aboutus.jsx';
import Contactus from './components/Contactus.jsx';
import Cropdetail from './components/Cropdetail.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pest from './components/Pest.jsx';
import Soil from './components/Soil.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <Home />} />
        <Route path="/croprec" element={
          <Croprec/>} />
        <Route path="/cropguide" element={
          <Cropguide/>} />
        <Route path="/fertrec" element={
          <Fertrec/>} />
        <Route path="/diseasdet" element={
          <Diseasdet/>} />
        <Route path="/" element={
          <Login/>} />
        <Route path="/logout" element={
          <Logout/>} />
        <Route path="/aboutus" element={
          <Aboutus/>} />
        <Route path="/contactus" element={
          <Contactus/>} />
        <Route path="/cropdetails" element={
          <Cropdetail/>} />
        <Route path="/pestcontrol" element={
          <Pest/>} />
        <Route path="/soilprep" element={
          <Soil/>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
