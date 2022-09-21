import React from "react";
import styles from "./BurgerHome.css";


const BurgerMenuHome = (props) => {

    // let burgerStyles = [styles.burger];
    let burgerStyles = ['burger'].join(' ');
    let burgerIcoStylesOn = ['fas', 'fa-bars', 'show'].join(' ');
    let burgerIcoStylesOff = ['fas', 'fa-times' ].join(' ');


    return (

    <div>
            <div className={burgerStyles}>
            {/* <i className={burgerIcoStylesOn}></i> */}
            <i className={burgerIcoStylesOn} onClick={props.icoClick}></i>
            <i className={burgerIcoStylesOff}></i>
            {/* <button onClick={props.icoClick}>Run sth</button> */}
            </div>
      

        <aside className="formenu">
            <ul>
                <li className="menuitem"><a href="#services">Offer</a></li>
                <li className="menuitem"><a href="pages/galeria.html">Gallery</a></li>
                <li className="menuitem"><a href="pages/faq.html">FAQ</a></li>
                <li className="menuitem"><a href="#contactdata">Contact</a></li>
            </ul>
        </aside>

    </div>




    )
}


export default BurgerMenuHome;