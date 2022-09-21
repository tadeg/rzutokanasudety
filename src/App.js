import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MountainGallery from './pages/mountaingallery/MountainGallery';
import ViewWeatherScreen from './pages/viewweatherscreen/ViewWeatherScreen';
// import Weather2Disp from './components/Weather2Disp/Weather2Disp';

import About from './pages/about/About';
import IntLinks from './pages/intlinks/IntLinks';


// import MountainRange from './pages/mountainrange/MountainRange';

// const ranges = [
// {"mountainsName": "Karkonosze", "part": "Sudety Zachodnie", "highestPeak": "Śnieżka, 1603 m n.p.m"},
// {"mountainsName": "Góry Sowie", "part": "Sudety Środkowe", "highestPeak": "Wielka Sowa, 1015 m n.p.m"},
// {"mountainsName": "Góry Stołowe", "part": "Sudety Środkowe", "highestPeak": "Szczeliniec Wielki, 919 m n.p.m"}
// ];

function App() {


  return (

    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/gallery1' element={<MountainGallery />} />
          <Route path='/weather' element={<ViewWeatherScreen />} />
          <Route path='/about' element={<About />} />
          <Route path='/intlinks' element={<IntLinks />} />
        </Routes>
      </Router>
      
       {/* <Homepage/> */}


   {/* <MountainRange/> */}

      {/* <h1>Text from App: nowy project: rzut oka na Sudety</h1> */}

      {/* <p>{ranges[0].mountainsName}</p>
      <p>{ranges[0].part}</p>
      <p>{ranges[0].highestPeak}</p>

      <p>{ranges[1].mountainsName}</p>
      <p>{ranges[1].part}</p>
      <p>{ranges[1].highestPeak}</p>

      <p>{ranges[2].mountainsName}</p>
      <p>{ranges[2].part}</p>
      <p>{ranges[2].highestPeak}</p> */}

  
    </div>
  );
}

export default App;
