import React, { Component } from "react";
import MountainRange from "../../pages/mountainrange/MountainRange";
// import { NavigationCmp } from "./navigationComponent";


const Navigation = (props) => {


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
        },
        {
            id: "id0003",
            title: "/GaleriaStolowe",
            link: "/gallery3"
        },
        {
            id: "id0004",
            title: "/GaleriaIzerskie",
            link: "/gallery4"
        }
    ]

    // itemsBurgerHome: [
    //     {
    //         id: "id0001",
    //         // title: "/GaleriaKarkonosze",
    //         link: "#"
    //     },
    //     {
    //         id: "id0002",
    //         // title: "/GaleriaSowie",
    //         link: "#"
    //     }
    // ]
};

return (
<div>
    <MountainRange navItems={navigationPoints.menuItems} />
</div>
);

};

export default Navigation;
