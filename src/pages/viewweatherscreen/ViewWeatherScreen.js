import React, { useState, useEffect } from "react";
import "../../css/ViewWeatherScreen.css";
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';



const ViewWeatherScreen = () => {

    
    const [index, setIndex] = useState("");
    const [dateForecast, setDateForecast] = useState("");
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState("");
    const [pressure, setPressure] = useState("");
    const [conditions, setConditions] = useState("");

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

 
    const inputCityHandler = event => {
        setCity(event.target.value);
    };

    const cityFromUser = city;



    // Section 1: API call

    const getWeather = async (cityFromUser) => {

        const API_LINK_PART1 = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
        const API_LINK_PART2 = "?unitGroup=metric&include=days&key="
        const API_KEY="L35FCYKGLA9CEHBS5QPJHKSNP";
        const API_LINK_PART3 ="&contentType=json"
        const URL = API_LINK_PART1 + city + API_LINK_PART2 + API_KEY + API_LINK_PART3;


        if (city !== "") {

            const data = await fetch(URL)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(
                result => {
                    setIsLoaded(true);
                    // setWeather(result.days);
                    appendData(result.days);
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }         
            );
        };
    };


    useEffect(() => {
        getWeather();
    }, [cityFromUser]);



    // Section 2: Appending data from API to 'handler'

    const appendData = (weather) => {

        let indexHn = 0; // index in the 'handler'
        let cityHn // city in the 'handler'
        let dateForecastHn // date_forecast in the 'handler'
        let temperatureHn // temperature in the 'handler'
        let pressureHn // humidity in the 'handler'
        let conditionsHn // conditions in the 'handler'

        let ulTable // <ul> list that is a table 'carrier';
        let newTableRow // new, added table row with data from Api, new <li>
        let newTableDataContent // new, added 'left' part of new table data row (for data from Api)
        let newTableDataContent2 // new, added 'right' part of new table data row (for data from Api)
        let newCell1Cnt // new, added cell1 of the content row; for 'index' (nr of row) attribute
        let newCell2Cnt // new, added cell2 of the content row; for 'city' attribute
        let newCell3Cnt // new, added cell3 of the content row; for 'date_forecast' attribute
        let newCell4Cnt // new, added cell4 of the content row; for 'temperature' attribute
        let newCell5Cnt // new, added cell5 of the content row; for 'humidity' attribute
        let newCell6Cnt // new, added cell6 of the content row; for 'pressure' attribute



        ulTable = document.querySelector('ul.view-weather-report');
        // console.log('Hey1!!!');
        // indexHn = 0;

    
        for (const weatherCity of weather) {
            // console.log('Hey12!!!');

            indexHn++;
            cityHn = cityFromUser;
            dateForecastHn = weatherCity.datetime;
            temperatureHn = weatherCity.temp; 
            pressureHn = weatherCity.humidity;
            conditionsHn = weatherCity.conditions;

            // console.log('Hey13!!!');
            // console.log(indexHn);
            // console.log(cityHn);
            // console.log(dateForecastHn);
            // console.log(temperatureHn);
            // console.log(pressureHn);
            // console.log(conditionsHn);


            // Section 3 Adding new row <li> to the table (with subelements <div>) and appending data from API response

            //addNewRow
            newTableRow = document.createElement('li');
            newTableRow.classList.add('table-row');
            ulTable.append(newTableRow);

            //createRowInsideElements
            newTableDataContent = document.createElement('div');
            newTableDataContent.classList.add('table-data', 'content');

            newTableRow.append(newTableDataContent);

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
            newCell3Cnt.innerHTML = dateForecastHn;
    
            newCell4Cnt = document.createElement('div');
            newCell4Cnt.classList.add('cell4', 'cnt');
            newTableDataContent.append(newCell4Cnt);
            newCell4Cnt.innerHTML = temperatureHn;




            newTableDataContent2 = document.createElement('div');
            newTableDataContent2.classList.add('table-data2');
            newTableRow.append(newTableDataContent2);
    
            newCell5Cnt = document.createElement('div');
            newCell5Cnt.classList.add('cell5', 'cnt');
            newTableDataContent2.append(newCell5Cnt);
            newCell5Cnt.innerHTML = pressureHn;
    
            newCell6Cnt = document.createElement('div');
            newCell6Cnt.classList.add('cell6', 'cnt');
            newTableDataContent2.append(newCell6Cnt);
            newCell6Cnt.innerHTML = conditionsHn;
    
        
            ulTable.append(newTableRow);

        }

        setIndex(indexHn);
        setCity(cityHn);
        setDateForecast(dateForecastHn);
        setTemperature(temperatureHn);
        setPressure(pressureHn);
        setConditions(conditionsHn);

    }



    const clearForecast = () => {
        window.location.reload()
    }
    
  

    if (error) {
        return (
            <div className="ViewWeatherScreen">
                <BurgerMenuHome />
                <LogoSubpage />
                <h2 className="wea-report-title">Error: {error.message}</h2>
            </div>
        );
    // } else if (!isLoaded) {
    //     return (
    //         <div className="ViewWeatherScreen">
    //             <BurgerMenuHome />
    //             <LogoSubpage />
    //             <h2 className="wea-report-title">Loading... </h2>
    //         </div>
    //     );
    } else {

        
        return (
            <div className="ViewWeatherScreen">
                <BurgerMenuHome />
                <LogoSubpage />


            {/* Header - title & data input  */}
                <section className="wea-up-container">
                        {/* <button onClick={getWeather} className="wea-get-info-btn">Sprawdź</button> */}
                        {/* <button onClick={clearForecast} className="wea-get-info-btn">Usuń dane</button> */}
                        {/* <p className="warningInfo">Dane prognozy pogody są testowymi, fikcyjnymi i przykładowymi danymi pobieranymi z testowego API endpointu.</p> */}                       
                        <div className="rep-title">
                            <h2 className="wea-report-title">Prognoza pogody - 15 dni: </h2>
                            {/* <h2 className="wea-report-title selected-city"></h2> */}
                        </div>
                        <div className="rep-params">
                            <div className="rep-params-part">
                                <h3 className="data-input left city">Wprowadź miejscowość:</h3>
                                {/* <input type="text" className="data-input right city-input" placeholder="Enter city name ..."></input> */}
                                <select onInput={inputCityHandler} name="city" className="data-input right city-input" placeholder="Enter city name ...">
                                    <option></option>
                                    <option value="Karpacz">Karpacz</option>
                                    <option value="Szklarska Poręba">Szklarska Poręba</option>
                                    <option value="Walim">Walim</option>
                                    <option value="Srebrna Góra">Srebrna Góra</option>
                                    <option value="Szczytna">Szczytna</option>
                                    <option value="Karłów">Karłów</option>
                                    <option value="Świeradów Zdrój">Świeradów Zdrój</option>
                                </select>
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
                                <div className="cell5">Ciśnienie [mbar]</div>
                                <div className="cell6">Warunki</div>
                            </div>              
                        </li>                        
                    </ul>
                </div>

            </div>
            )
        }


     };

    export default ViewWeatherScreen;

