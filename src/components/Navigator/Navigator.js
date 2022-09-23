import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import MountainGallery from '../../pages/mountaingallery/MountainGallery';
import MountainGallery2 from '../../pages/mountaingallery/MountainGallery2';
import MountainGallery3 from '../../pages/mountaingallery/MountainGallery3';
import ViewWeatherScreen from '../../pages/viewweatherscreen/ViewWeatherScreen';
import About from '../../pages/about/About';
import IntLinks from '../../pages/intlinks/IntLinks';


const Navigator = () => {

    return (

    <div>
     <Router>
        <Routes>
          <Route path='/rzutokanasudety' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/gallery1' element={<MountainGallery />} />
          <Route path='/gallery2' element={<MountainGallery2 />} />
          <Route path='/gallery3' element={<MountainGallery3 />} />
          <Route path='/weather' element={<ViewWeatherScreen />} />
          <Route path='/about' element={<About />} />
          <Route path='/intlinks' element={<IntLinks />} />
        </Routes>
    </Router>
    </div>
    )

}

export default Navigator;