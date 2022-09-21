import React from "react";
import styles from './ViewRangesButton.module.css';


const ViewRangesButton = props => {

    let buttonStyles = [styles.navigatorBtn];

if(props.showMountainsDesc) {
    buttonStyles.push(styles.red);
}


    return (
        <div>
        {/* <button onClick={props.buttonClick} className="Navigator-btn" >Pasma górskie</button> */}
        <button onClick={props.buttonClick} className={buttonStyles.join(' ')}>{props.navigatorBtnLabel}</button>
        {/* <button onClick={props.buttonClick} className={styles.navigatorBtn}>{props.navigatorBtnLabel}</button> */}
        </div>
    );
}

export default ViewRangesButton;