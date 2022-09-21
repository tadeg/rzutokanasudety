import React, { Component } from "react";
import Header from "../components/Header/Header";
import MountainRangeContEng from "../pages/mountainrange/MountainRangeContEng";
import Footer from "../components/Footer/Footer";
import '../css/Homepage.css';


class Homepage extends Component {

    render() {

        return (
        <div className="homepage">
            <Header/>
            <MountainRangeContEng/>
            <Footer/>
        </div>
        );
        
    }
}

export default Homepage;