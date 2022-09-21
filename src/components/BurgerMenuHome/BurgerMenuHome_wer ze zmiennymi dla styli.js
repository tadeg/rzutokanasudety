import React, { Component } from "react";
import styles from "./BurgerMenuHome.css";


class BurgerMenuHome extends Component {

    // let burgerStylesHn = ['burger'].join(' ');
    // let icoBurgerStylesHn = ['fas', 'fa-bars', 'show'].join(' ');
    // let icoXStylesHn = ['fas', 'fa-times'].join(' ');
    // let menuStylesHn = ['formenu', 'show'].join(' ');

    constructor(props) {
        super(props);

        this.state = {
            burgerStyles: ['burger'].join(' '),
            icoBurgerStyles: ['fas', 'fa-bars', 'show'].join(' '),
            icoXStyles: ['fas', 'fa-times'].join(' '),
            menuStyles: ['formenu'].join(' ')
        };
    }

    doSthHandler = () => {
        console.log("Działa działa działa !!!");

        console.log(this.state.icoBurgerStyles);
        console.log(this.state.icoXStyles);
        console.log("Yeah!!!! (1)");

        let icoBurgerStylesHn = this.state.icoBurgerStyles.pop('show');
        let icoXStylesHn = this.state.icoXStyles.push('show');
        let menuStylesHn = this.state.menuStyle.push('show');

        this.setState({
            icoBurgerStyles: icoBurgerStylesHn,
            icoXStyles: icoXStylesHn,
            menuStyles: menuStyleHn
        })

        console.log("Yeah!!!! (2)");

    }


    render () {


        // icoBurgerStyles.pop('show')
        // icoXStyles.push('show')


    return (

    <div>
            {/* cały div z ikonami burgera */}
            <div className={this.state.burgerStyles.join(' ')} onClick={this.doSthHandler}>

            {/* Wersja A: wpisanie wartości (selektorów/klas) w postaci zmiennej(tablicy) */}
            {/* <i className={icoBurgerStyles} ></i>   */}
            <i className={this.state.icoBurgerStyles.join(' ')} ></i>  

            {/* Wersja B (prostsza): wpisanie wartości (selektoró/klas) w postaci stringa */}
            <i className={"fas fa-bars show"} ></i>  


            <i className={this.state.icoXStyles.join(' ')} ></i>  

            {/* onClick - wersja gdy metoda w tym komponencie */}
            {/* onClick={this.doSthHandler} */}

            {/* onClick - wersja gdy metoda w innym komponencie i pobierana przez props */}
            {/* onClick={props.icoClick} */}
            {/* <button onClick={props.icoClick}>Run sth</button> */}
            </div>
      

        <aside className={this.state.menuStyle}>
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
}


export default BurgerMenuHome;