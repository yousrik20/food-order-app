import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>  
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
