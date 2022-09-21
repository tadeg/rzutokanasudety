import React from "react";
import { Link } from 'react-router-dom';

import MountainGallery from '../../pages/mountaingallery/MountainGallery';
import '../../css/MountainRange.css';


const MountainRange = (props) => {

    const navigationPoints = {

        menuItems: [
            {
                id: "id0001",
                title: "/GaleriaKarkonosze",
                link: "/gallery1"
            },

            {
                id: "id0002",
                title: "/GaleriaSowie",
                link: "/gallery2"
            }
        ]
    };

    // let takenItems = [];
    // if (props.navItems !== undefined ) {
    //     takenItems = props.navItems};


return (
  
    <div>

   
        <section className="MountainRange">

            <div className="left-panel">
                <h2 className="RangeName">{props.mountainsName}</h2>
                <p>{props.part}</p>
                <p>{props.highestPeak}</p>
            </div>

          
            <div className="right-panel">
                <div className="RangePhotoFrame">


                    <Link to='/gallery1'>               
                        {/* Go to gallery</Link>  */}
                    {/* <Link to={navigationPoints.menuItems[0].link}> */}
                    <img className="RangePhoto" src={props.photo} alt={props.photodesc} />
                    </Link> 
                
                
                
                </div>  
                <div className="photo-desc">{props.photodesc}</div>
                {/* <ul><li><Link to={'/gallery1'}>Test Link to - display Karkonosze</Link></li></ul> */}
            </div>
        </section> 
     

   
  
    
    </div>
 
);
 
}

// class MountainRange extends Component {
//     render() {
//         return (
//     <div>

//     </div>
//     );
//     }
// }

export default MountainRange;