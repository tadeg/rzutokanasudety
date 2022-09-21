import React from "react";
import { Link } from 'react-router-dom';
import '../../css/Weather2Disp.css';




const Weather2Disp = (props) => {
    

    return(

        <div>
            <div className="table-container">
                    <ul className="view-weather-report">

                        <li className="table-row">
                            <div className="table-data content">
                                <div className="cell1 cnt">{props.index}</div>
                                <div className="cell2 cnt">{props.city}</div>
                                <div className="cell3 cnt">{props.date_forecast}</div>
                                <div className="cell4 cnt">{props.temperature}</div>
                            </div>
                            <div className="table-data2">
                                <div className="cell5 cnt">{props.humidity}</div>
                                <div className="cell6 cnt">{props.pressure}</div>
                                {/* <div className="cell7 cnt">{props.wind_speed}</div> */}
                            </div>              
                        </li>                        
                    </ul>
                </div>
        </div>
    )

        
}


export default Weather2Disp;