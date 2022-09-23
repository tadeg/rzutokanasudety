import React from 'react';
import '../../css/IntLinks.css';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";


const IntLinks = () => {
    
return(

    <div className="intLinks">

                <BurgerMenuHome />
                <LogoSubpage />

                <h2 className="intLinks-title">Zapraszam również do obejrzenia...</h2>

        <ul>
                <li className="menuitemLink"><a href="http://gugafotografia.pl">gugafotografia.pl</a></li>
                <li className="menuitemLink"><a href="http://gugafoto.pl">gugafoto.pl</a></li>
                <li className="menuitemLink"><a href="http://naszerysunki.pl">naszerysunki.pl</a></li>
                <li className="menuitemLink"><a href="http://fotoprzegladkolejowy.pl">fotoprzegladkolejowy.pl</a></li>
        </ul>
        
    </div>
);


}

export default IntLinks;