import React from 'react';
import '../../css/About.css';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";
import imgAbout from "../../img/about.jpg"


const About = () => {
    
    return(
        <div className="about">

            <BurgerMenuHome />
            <LogoSubpage />

            <h2 className="about-title">O mnie: </h2>

                <div className="about-wrap">

                    <div class="selfintro">
                        <img className="photome" src={imgAbout} alt="" />
                        <div className="title">
                            <p className="nick">tadoe</p>
                            <p className="desc">Pochodzący z Wrocławia entuzjasta fotografii i gór.</p>
                        </div>
                    </div>
                
                    <div class="cnote">&copy; 2022 Wszystkie zdjęcia na stronie zrobione w czasie sudeckich wędrówek górskich na przestrzeni lat.</div>
             
                </div>

        </div>
    )

}


export default About;