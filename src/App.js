import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './css/style.css'
import Hero from './React-Components/Hero';
import Services from './React-Components/Services';
import Testimonial from './React-Components/Testimonial';
import Topbar from './React-Components/Topbar';
import Works from './React-Components/Works';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App" style={{overflow: 'hidden',}}>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <Services />
        <Works />
        <Testimonial />
    </div>
  );
}

export default App;
