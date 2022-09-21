import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import PropTypes from "prop-types";
import "./navigation.css";

const NavigationComponent = (props) => {

    let items = [];

    if (props.items !== undefined ) {
        items = props.items.map((item, key) => (
            <NavigationItem key={key} item={item} />
        ));
    }

    return (

        <nav className="navigation">
            <ul className="navigation__elements">{items}</ul>
        </nav>
    );
};

NavigationComponent.propTypes = {
    items: PropTypes.array
};

// export default NavigationComponent;
export { NavigationComponent as NavigationCmp };