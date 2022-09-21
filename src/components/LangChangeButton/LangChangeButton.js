import React, {
    Component
} from "react";
import styles from './LangChangeButton.module.css';

let languagesStyles = [styles.languages];
let langStylesPl = [styles.lang];
let langStylesEn = [styles.lang];

langStylesPl.push(styles.on);
langStylesEn.push(styles.off);

class LangChangeButton extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            siteLanguagePl: "PL",
            siteLanguageEn: "EN"
        }
        
    }

changeLangHandler1 = () => {
    console.log('Polska wersja uruchomiona');
    langStylesPl.pop(styles.on);
    
    this.setState( {
            siteLanguagePl: "Witam",
            // langStylesEn: langStylesEn.push(styles.on),
    })
}


changeLangHandler2 = () => {
    console.log('English version started');

    this.setState({
    siteLanguageEn: "Hello",
})
}


// this.setState({})

    render() {

    return (
        <div>
            <div>
                <div id="start" className="navpoint"></div>
                {/* <div className="languages"> */}
                {/* <div className={styles.languages}> */}
                <div className={languagesStyles.join(' ')}>
                
                    {/* <p className="lang on">PL</p> */}
                    <p className={langStylesPl.join(' ')} onClick={this.changeLangHandler1}>{this.state.siteLanguagePl}</p>
                    {/* <p className="lang" onClick={this.changeLangHandler}>EN</p> */}
                    <p className={langStylesEn.join(' ')} onClick={this.changeLangHandler2}>{this.state.siteLanguageEn}</p>
                    {/* <p className={langStylesOff.join(' ')} onClick={this.changeLangHandler}>EN</p> */}
                </div>
            </div>
        </div>
    )

    }

}

export default LangChangeButton;