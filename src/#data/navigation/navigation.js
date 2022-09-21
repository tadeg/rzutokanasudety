import React, { Component } from "react";
import { NavigationCmp } from "./navigationComponent";


const Navigation = (props) => {


const menus = {

    menuItems: [
        {
            title: "GaleriaKarkonosze",
            link: "/gallery1"
        },
        {
            title: "GaleriaSowie",
            link: "/gallery2"
        },
        {
            title: "GaleriaStolowe",
            link: "/gallery3"
        },
        {
            title: "GaleriaIzerskie",
            link: "/gallery4"
        }
    ]
};

return (
<div>
    <NavigationCmp items={menus.menuItems} />
</div>
);

};

export default Navigation;
