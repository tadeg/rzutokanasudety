import React from 'react';
import '../../css/Header.css';
import BurgerMenuHome from '../BurgerMenuHome/BurgerMenuHome';
import background from "../../img/main-bg.jpg";



const Header = () => {
    
    return ( 
        <div>   
            
            <header
                style={
                    {backgroundImage: `url(${background})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`
                    }}
            >

                <BurgerMenuHome />
                {/* <LangChangeButton /> */}
                <div className="sitetitle">
                    <h2>rzut</h2>
                    <h2>oka</h2>
                    <h2>na</h2> 
                    <h2>Sudety</h2> 
                    {/* h2>glance</h2> */}
                    {/* <h2>at</h2> */}
                    {/* <h2>the</h2>  */}
                    {/* <h2>Sudetes</h2> */}
                </div>
                {/* <BurgerMenuHome icoClick={() => this.doSthHandler()}/> */}
            

            </header>
        </div>
    );
}


export default Header;