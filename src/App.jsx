import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Skils from './component/Skils';
import Works from './component/Works';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Works />
    </div>
  );
}

export default App;
