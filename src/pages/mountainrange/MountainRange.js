import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../css/MountainRange.css';


// const MountainRange = (props) => {

class MountainRange extends Component {

    render() {

        let linkToGallery;

        if (this.props.mountainsName === "Karkonosze") {
            linkToGallery='/gallery1';
        } else if (this.props.mountainsName === "Góry Sowie") {
            linkToGallery='/gallery2';
        } else if (this.props.mountainsName === "Góry Stołowe") {
            linkToGallery='/gallery3';
        };


return (
  
    <div>

   
        <section className="MountainRange">

            <div className="left-panel">
                <h2 className="RangeName">{this.props.mountainsName}</h2>
                <p>{this.props.part}</p>
                <p>{this.props.highestPeak}</p>
            </div>

          
            <div className="right-panel">
                <div className="RangePhotoFrame">


                    {/* <Link to='/gallery1'>  */}
                    <Link to={linkToGallery}>         
                        {/* Go to gallery</Link>  */}
                    {/* <Link to={navigationPoints.menuItems[0].link}> */}
                    <img className="RangePhoto" src={this.props.photo} alt={this.props.photodesc} />
                    </Link>
                
                
                
                </div>  
                <div className="photo-desc">{this.props.photodesc}</div>
                {/* <ul><li><Link to={'/gallery1'}>Test Link to - display Karkonosze</Link></li></ul> */}
            </div>
        </section> 
     

   
  
    
    </div>
 
);
 
}

}



export default MountainRange;