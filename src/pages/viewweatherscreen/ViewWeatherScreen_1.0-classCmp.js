import React, { Component } from 'react';
import "../../css/ViewWeatherScreen.css";

import Weather2Disp from '../../components/Weather2Disp/Weather2Disp';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";

let inputCity // city selected by the user
let inputFromDate // date selected by the user; from which weather forecast should be get
let ulTable // <ul> list that is a table 'carrier'
let newTableRow // new, added table row with data from Api, new <li>
let newTableDataContent // new, added 'left' part of new table data row (for data from Api)
let newTableDataContent2 // new, added 'right' part of new table data row (for data from Api)
let newCell1Cnt // new, added cell1 of the content row; for 'index' (nr of row) attribute
let newCell2Cnt // new, added cell2 of the content row; for 'city' attribute
let newCell3Cnt // new, added cell3 of the content row; for 'date_forecast' attribute
let newCell4Cnt // new, added cell4 of the content row; for 'temperature' attribute
let newCell5Cnt // new, added cell5 of the content row; for 'humidity' attribute
let newCell6Cnt // new, added cell6 of the content row; for 'pressure' attribute

// let dateStart // 'start/from date entered by the user (as a String)
// let dateStartCnv // 'start/from date entered by the user (as a Date)
let indexHn // index in the 'handler'
let cityHn // city in the 'handler'
let date_forecastHn // date_forecast in the 'handler'
let temperatureHn // temperature in the 'handler'
let humidityHn // humidity in the 'handler'
let pressureHn // humidity in the 'handler'

// Visual Crossing API:
// const API_LINK_PART1="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
// const API_LINK_PART2="?unitGroup=metric&include=days&key=L35FCYKGLA9CEHBS5QPJHKSNP&contentType=json"
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Karpacz?unitGroup=metric&include=days&key=L35FCYKGLA9CEHBS5QPJHKSNP&contentType=json
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
// Karpacz?unitGroup=metric&include=days&key=L35FCYKGLA9CEHBS5QPJHKSNP&contentType=json

// test data / endpoint on Beeceptor:
const API_LINK="https://tst5point.free.beeceptor.com/api/entity";

// test data / file - on localhost:
// const API_LINK="data.json"

// const API_KEY="";



class ViewWeatherScreen extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            index: "",
            city: "",
            date_forecast: "",
            temperature: "",
            humidity: "",
            pressure: ""
        };
    }




// Section 1: API call and get response

     setWeatherDataHandler = () => {

        console.log("First method GO!");

        // const URL = API_LINK_PART1 + city + API_LINK_PART2;
        const URL = API_LINK;
        
        inputCity = document.querySelector('.city-input');
        const cityFromUser = inputCity.value || 'Karpacz';


        inputFromDate = document.querySelector('.date-input');

        let dateStart = inputFromDate.value || '2022-09-21';
        let dateStartCnv = new Date(dateStart);
        console.log(dateStart);
        console.log('Ok date from user!');
        console.log(dateStartCnv);
        console.log('Ok date converted!');

       
// componentDidMount() {

        fetch(URL)
        // axios
        //.get(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
        
    
// }



// Section 2: Appending data from API to 'handler'


function appendData(data) {

    ulTable = document.querySelector('ul.view-weather-report');
    

    // Loop through objects in JSON
    for (let i = 0; i < data.length; i++) {

    let dateFromApi = new Date(data[i].date_forecast);
    let cityFromApi = data[i].city;


    if ((dateStartCnv <= dateFromApi) && (cityFromUser === cityFromApi)) {


    console.log('Test NEXT STEP');
   
    // if (dateStartCnv <= dateFromApi) {

        console.log("Second method GO!");

        indexHn = i + 1;
        cityHn = data[i].city //writing city from Api to city in handler
        date_forecastHn = data[i].date_forecast //writing date_forecast from Api to date_forecast in handler
        temperatureHn = data[i].temperature //writing temperature from Api to temperature in handler
        humidityHn = data[i].humidity //writing humidity from Api to humidity in handler
        pressureHn = data[i].pressure //writing pressure from Api to pressure in handler

        console.log(indexHn);
        console.log(cityHn);
        console.log(date_forecastHn);
        console.log(temperatureHn);
        console.log(humidityHn);
        console.log(pressureHn);


        // Section 3 Adding new row <li> to the table (with subelements <div>) and appending data from API rsponse

        // for (cityHn === cityFromUser) {}


        //addNewRow
        newTableRow = document.createElement('li');
        newTableRow.classList.add('table-row');
        ulTable.append(newTableRow);

        //createRowInsideElements
        newTableDataContent = document.createElement('div');
        newTableDataContent.classList.add('table-data', 'content');
        newTableRow.append(newTableDataContent);

        newTableDataContent2 = document.createElement('div');
        newTableDataContent2.classList.add('table-data2');
        newTableRow.append(newTableDataContent2);

        newCell1Cnt = document.createElement('div');
        newCell1Cnt.classList.add('cell1', 'cnt');
        newTableDataContent.append(newCell1Cnt);
        newCell1Cnt.innerHTML = indexHn;

        newCell2Cnt = document.createElement('div');
        newCell2Cnt.classList.add('cell2', 'cnt');
        newTableDataContent.append(newCell2Cnt);
        newCell2Cnt.innerHTML = cityHn;

        newCell3Cnt = document.createElement('div');
        newCell3Cnt.classList.add('cell3', 'cnt');
        newTableDataContent.append(newCell3Cnt);
        newCell3Cnt.innerHTML = date_forecastHn;

        newCell4Cnt = document.createElement('div');
        newCell4Cnt.classList.add('cell4', 'cnt');
        newTableDataContent.append(newCell4Cnt);
        newCell4Cnt.innerHTML = temperatureHn;

        newCell5Cnt = document.createElement('div');
        newCell5Cnt.classList.add('cell5', 'cnt');
        newTableDataContent2.append(newCell5Cnt);
        newCell5Cnt.innerHTML = humidityHn;

        newCell6Cnt = document.createElement('div');
        newCell6Cnt.classList.add('cell6', 'cnt');
        newTableDataContent2.append(newCell6Cnt);
        newCell6Cnt.innerHTML = pressureHn;

        inputFromDate.value = '2022-09-21';
    
        }

    }
};


    this.setState({
        // writing from handler to the state
            index: indexHn,
            city: cityHn,
            date_forecast: date_forecastHn,
            temperature: temperatureHn,
            humidity: humidityHn,
            pressure: pressureHn
        })

        this.setState({
                index: "",
                city: "",
                date_forecast: "",
                temperature: "",
                humidity: "",
                pressure: ""
            })

     }


    render() {

            return(
                <div className="ViewWeatherScreen">

                <BurgerMenuHome />
                <LogoSubpage />


            {/* Header - title & data input  */}
                <section className="wea-up-container">

                    <button onClick={this.setWeatherDataHandler} className="wea-get-info-btn">Sprawdź prognozę pogody</button>
                    <p className="warningInfo">Dane prognozy pogody są testowymi, fikcyjnymi i przykładowymi danymi pobieranymi z testowego API endpointu.</p>
                    <div className="rep-title">
                        <h2 className="wea-report-title">Prognoza pogody:</h2>
                        {/* <h2 className="wea-report-title selected-city"></h2> */}
                    </div>
                    
                    <div className="rep-params">

                        <div className="rep-params-part">
                            <h3 className="data-input left city">Wprowadź miejscowość:</h3>
                            {/* <input type="text" className="data-input right city-input" placeholder="Enter city name ..."></input> */}
                        
                            <select name="city" className="data-input right city-input" placeholder="Enter city name ...">
                                <option value="Karpacz">Karpacz</option>
                                <option value="Walim">Walim</option>
                                <option value="Szczytna">Szczytna</option>
                                <option value="Świeradów Zdrój">Świeradów Zdrój</option>
                            </select>
                        </div>
                        
                        <div className="rep-params-part">
                            <h3 className="data-input left">Data od:</h3>
                            <input type="text" className="data-input right date-input" placeholder="2022-09-21"></input>
                        </div>

                    </div>

                </section>




                {/* View Weather Info Table/Screen - headers */}

                <div className="table-container">
                    <ul className="view-weather-report">
                        <li className="table-row">
                            <div className="table-data">
                                <div className="cell1">#</div>
                                <div className="cell2">Miejscowość</div>
                                <div className="cell3">Data prognozy</div>
                                <div className="cell4">Temperatura [℃]</div>
                            </div>
                            <div className="table-data2">
                                <div className="cell5">Wilgotność [%]</div>
                                <div className="cell6">Ciśnienie [mbar] </div>
                                {/* <div className="cell7">Wind Speed</div> */}
                            </div>              
                        </li>                        
                    </ul>
                </div>


            {/* View Weather Info Table/Screen - data */}

                        <Weather2Disp 
                            index={this.state.index} 
                            city={this.state.city} 
                            date_forecast={this.state.date_forecast} 
                            temperature={this.state.temperature} 
                            humidity={this.state.humidity}
                            pressure={this.state.pressure}
                            // wind_speed={this.state.wind_speed}
                        ></Weather2Disp>
                </div>
            )
        }
    }


    export default ViewWeatherScreen;