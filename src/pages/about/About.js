import React from 'react';
import '../../css/About.css';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";


const About = () => {
    
    return(
        <div className="about">

            <BurgerMenuHome />
            <LogoSubpage />

            <h2 className="about-title">O mnie: </h2>

    </div>
);

}


export default About;