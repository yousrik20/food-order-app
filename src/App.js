import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/food-order-app' element={<Home/>}/>
            <Route path="/" element={<Home/>}/>  
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
