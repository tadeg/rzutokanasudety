import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../css/BurgerMenuHome.css";


class BurgerMenuHome extends Component {

constructor(props) {
    super(props);

    this.state = {
        burgerStyles: ['burger'].join(' '),
        icoBurgerStyles: ['fas', 'fa-bars', 'show'].join(' '),
        icoXStyles: ['fas', 'fa-times'].join(' '),
        menuStyles: ['formenu'].join(' ')
    };
}
 
    openMenuHandler = () => {
        console.log("Działa działa działa !!!");

        console.log(this.state.icoBurgerStyles);
        console.log(this.state.icoXStyles);
        console.log("Yeah!!!! (1)");

        // let icoBurgerStylesHn = this.state.icoBurgerStyles.pop();
        // let icoXStylesHn = this.state.icoXStyles.push('show');
        // let menuStylesHn = this.state.menuStyles.push('show');
        let icoBurgerStylesHn = ['fas', 'fa-bars'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times', 'show'].join(' ');
        let menuStylesHn = ['formenu', 'show'].join(' ');



        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })

        console.log("Yeah!!!! (2)");

    }



    closeMenuHandler = () => {
        console.log("Yeah!!!! (3)");
        let icoBurgerStylesHn = ['fas', 'fa-bars', 'show'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times'].join(' ');
        let menuStylesHn = ['formenu'].join(' ');

        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })

        console.log("Yeah!!!! (4)");
    }



    render () {

    return (

    <div>
            {/* cały div z ikonami burgera */}
            <div className={this.state.burgerStyles}>

            {/* Wersja A: wpisanie wartości (selektorów/klas) w postaci zmiennej(tablicy) */}
            {/* <i className={icoBurgerStyles} ></i>   */}
            <i className={this.state.icoBurgerStyles} onClick={this.openMenuHandler} ></i>  

            {/* Wersja B (prostsza): wpisanie wartości (selektoró/klas) w postaci stringa */}
            {/* <i className={"fas fa-bars show"} ></i>   */}


            <i className={this.state.icoXStyles} onClick={this.closeMenuHandler} ></i>  

            {/* onClick - wersja gdy metoda w tym komponencie */}
            {/* onClick={this.doSthHandler} */}

            {/* onClick - wersja gdy metoda w innym komponencie i pobierana przez props */}
            {/* onClick={props.icoClick} */}
            {/* <button onClick={props.icoClick}>Run sth</button> */}
            </div>
      

        <aside className={this.state.menuStyles}>
            <ul>
                <li className="menuitem"><Link to='/'>Homepage</Link></li>
                <li className="menuitem"><Link to='/about'>About</Link></li>
                <li className="menuitem"><Link to='/intlinks'>Interesting links</Link></li>
                <li className="menuitem"><Link to='/weather'>Check the weather forecast  - API</Link></li>
            </ul>
        </aside>

    </div>

    )

    }
}


export default BurgerMenuHome;