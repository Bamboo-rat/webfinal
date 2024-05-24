import logo from './logo.svg';
import './App.css';
import './assets/css/reset.css'
import './assets/css/web.css'
import Navbar from './component/navbar';
import Service from './pages/service';
import Features from './pages/features';
import Shop from './pages/shop';

function App() {
  return (
    <div className="App">
      {/* <Service /> */}
      {/* <Features /> */}
      <Shop />
    </div>
  );
}

export default App;
