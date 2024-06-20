import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/reset.css'
import './assets/css/web.css'
import Navbar from './component/navbar';
import Service from './pages/service';
import Features from './pages/features';
import Shop from './pages/shop';
import Meetus from './pages/meetus';
import Banner from './pages/banner';
import Testimonial from './pages/testimonial';

function App() {
  return (
    <div className="App">
      <div className="App">
          <Routes>
            <Route path="/" element={<Features />} />
            <Route path="/features" element={<Banner />} />
            <Route path="/meetus" element={<Meetus />} />
            <Route path="/service" element={<Service />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
