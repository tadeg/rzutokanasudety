import React, { Component } from "react";
import '../../css/MountainGallery.css';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";
import Footer from "../../components/Footer/Footer";
// import styles from './MountainGallery.module.css'


class MountainGallery3 extends Component {

state = {
    photos: [
        {"nr": "nr0001", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00037.jpg')", "photodesc": "Szczeliniec Wielki"},
        {"nr": "nr0002", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00038.jpg')", "photodesc": "Szczeliniec Wielki"},
        {"nr": "nr0003", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00040.jpg')", "photodesc": "Na Szczelińcu"},
        {"nr": "nr0004", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Kg_00016.jpg')", "photodesc": "Góry Stołowe"},
        {"nr": "nr0005", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Kg_00017.jpg')", "photodesc": "Szczeliniec Wielki"},
    ],

    // TU STYLE ...
    slideExpandedStyles: ['slide', 'active'].join(' '),
    slideRolledUpStyles: ['slide'].join(' '),
}

    toggleSlideExpandHandler = () => {

        const slides = document.querySelectorAll('.slide');
    
        slides.forEach((slide) => {
            slide.addEventListener('click', () => {
                deleteActiveClasses()
                slide.classList.add('active')
                // divStyles.push(styles.active);
                // slideRolledUpStyles.push(styles.active)
            })
        })
    
        function deleteActiveClasses() {
            slides.forEach(slide => {
                slide.classList.remove('active')
            })
        }
    }


    render() {



    // let slideExpandedStyles =['slide', 'active'].join(' ');
    // const slideRolledUpStyles = ['slide'];
    const slidePhoto0 = { backgroundImage: `${this.state.photos[0].src}`}
    const slidePhoto1 = { backgroundImage: `${this.state.photos[1].src}`}
    const slidePhoto2 = { backgroundImage: `${this.state.photos[2].src}`}
    const slidePhoto3 = { backgroundImage: `${this.state.photos[3].src}`}
    const slidePhoto4 = { backgroundImage: `${this.state.photos[4].src}`}
    // const slidePhoto0 = {
    //     backgroundImage: 'url("http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00001.jpg")'
    // }



        return (
            <div>

            <BurgerMenuHome />
            <div className='galleryWrapper'>

            <LogoSubpage />
            <h2 class="galleryRangeName">Góry Stołowe</h2>

            <div className="container">

                    <div className={this.state.slideExpandedStyles} style={slidePhoto0}>
                    {/* <div className="slide active"></div> */}
                    {/* <div className={"slide active"}></div> */}
                        <h3 className="slideTitle">{this.state.photos[0].photodesc}</h3>
                        {/* <h3 className="slideTitle">Śnieżne Kotły</h3> */}
                    </div>
               
                    <div className={this.state.slideRolledUpStyles} style={slidePhoto1} onClick={this.toggleSlideExpandHandler}>
                        <h3 className="slideTitle">{this.state.photos[1].photodesc}</h3>
                         {/* <h3 className="slideTitle">Widok ze Śnieżki</h3> */}
                    </div>

                    <div className={this.state.slideRolledUpStyles} style={slidePhoto2} onClick={this.toggleSlideExpandHandler}>
                  {/* <div className="slide"> */}
                        <h3 className="slideTitle">{this.state.photos[2].photodesc}</h3>
                        {/* <h3 className="slideTitle"> Śnieżka</h3> */}
                    </div>

                    <div className={this.state.slideRolledUpStyles} style={slidePhoto3} onClick={this.toggleSlideExpandHandler}>
                    {/* <div className="slide"> */}
                        <h3 className="slideTitle"> {this.state.photos[3].photodesc}</h3>
                         {/* <h3 className="slideTitle">Kocioł Łomniczki</h3> */}
                    </div>

                    <div className={this.state.slideRolledUpStyles} style={slidePhoto4} onClick={this.toggleSlideExpandHandler}>
                    {/* <div className="slide"> */}
                        <h3 className="slideTitle">{this.state.photos[4].photodesc}</h3>
                         {/* <h3 className="slideTitle">Widok ze Szrenicy</h3> */}
                    </div>

            </div>
            

            </div>


            <Footer/>
            </div>
            )      
        }
    }



export default MountainGallery3;