import React, {
    Component
} from "react";
import MountainRange from "./MountainRange";
import ViewRangesButton from "../../components/ViewRangesButton/ViewRangesButton";


class MountainRangeContEng extends Component {
    constructor(props) {
        super(props);

        this.state = {
                    ranges: [
                        {"id": "id0001", "mountainsName": "Karkonosze", "part": "Sudety Zachodnie", "highestPeak": "Śnieżka, 1603 m n.p.m", "photo": "/images/gallery1.jpg", "photodesc": "Śnieżne Kotły"},
                        {"id": "id0002", "mountainsName": "Góry Sowie", "part": "Sudety Środkowe", "highestPeak": "Wielka Sowa, 1015 m n.p.m", "photo": "/images/gallery2.jpg", "photodesc": "Okolice Sokolca"},
                        {"id": "id0003", "mountainsName": "Góry Stołowe", "part": "Sudety Środkowe", "highestPeak": "Szczeliniec Wielki, 919 m n.p.m", "photo": "/images/gallery3.jpg", "photodesc": "Szczeliniec Wielki"}                    
                        // {"id": "id0004", "mountainsName": "Góry Izerskie", "part": "Sudety Zachodnie", "highestPeak": "Wysoka Kopa, 1126 m n.p.m", "photo": "#", "photodesc": "vvv"}      
                    ],
                    // ranges: [
                    //   {"id": "id0001", "mountainsName": "Karkonosze", "part": "Sudety Zachodnie", "highestPeak": "Śnieżka, 1603 m n.p.m", "photo": "http://gugafotografia.pl/img/tematy/02_gory/gf_Rg_00001.jpg", "photodesc": "Śnieżne Kotły"},
                    //   {"id": "id0002", "mountainsName": "Góry Sowie", "part": "Sudety Środkowe", "highestPeak": "Wielka Sowa, 1015 m n.p.m", "photo": "http://gugafotografia.pl/img/tematy/02_gory/gf_Rg_00033.jpg", "photodesc": "Okolice Sokolca"},
                    //   {"id": "id0003", "mountainsName": "Góry Stołowe", "part": "Sudety Środkowe", "highestPeak": "Szczeliniec Wielki, 919 m n.p.m", "photo": "http://gugafotografia.pl/img/tematy/02_gory/gf_Rg_00038.jpg", "photodesc": "Szczeliniec Wielki"},                    
                    //     // {"id": "id0004", "mountainsName": "Góry Izerskie", "part": "Sudety Zachodnie", "highestPeak": "Wysoka Kopa, 1126 m n.p.m", "photo": "#", "photodesc": "vvv"}      
                    // ],
                    showMountainsDesc: false,
                    navigatorBtnLabel: "Pasma Górskie - rozwiń"
                    };
    }



toggleMountainsDescHandler = () => {
    const doesShow = this.state.showMountainsDesc;
    this.setState({showMountainsDesc: !doesShow});
    this.state.navigatorBtnLabel = "Pasma Górskie - rozwiń";
}


    render() {

    let mountains = null;

    if(this.state.showMountainsDesc) {

    this.state.navigatorBtnLabel = "Zwiń do strony głównej";
    // this.state.navigatorBtnLabel = "Roll up to the homepage";

    mountains = this.state.ranges.map(range => {
    return(
    
    <MountainRange 
        mountainsName={range.mountainsName} 
        part={range.part} 
        highestPeak={range.highestPeak}
        key={range.id}  
        photo={range.photo}      
        photodesc={range.photodesc}
        />
      
        );
        });

    // mountains = 
    // <div>
    //     <MountainRange mountainsName={this.state.ranges[0].mountainsName} part={this.state.ranges[0].part} highestPeak={this.state.ranges[0].highestPeak}/>
    //     <MountainRange mountainsName={this.state.ranges[1].mountainsName} part={this.state.ranges[1].part} highestPeak={this.state.ranges[1].highestPeak}/>
    //     <MountainRange mountainsName={this.state.ranges[2].mountainsName} part={this.state.ranges[2].part} highestPeak={this.state.ranges[2].highestPeak}/>
    // </div>

    }

    return(
  
        <div>  
            {/* <button class="Navigator-btn" onClick={this.toggleMountainsDescHandler}>Pasma górskie</button> */}
            <ViewRangesButton showMountainsDesc={this.state.showMountainsDesc} navigatorBtnLabel={this.state.navigatorBtnLabel} buttonClick={() => this.toggleMountainsDescHandler()}></ViewRangesButton>
            {mountains}
        </div>
    );
}

}

export default MountainRangeContEng