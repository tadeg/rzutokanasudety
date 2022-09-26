import React, { Component } from "react";
import '../../css/MountainGallery.css';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import LogoSubpage from "../../components/LogoSubpage/LogoSubpage";
import Footer from "../../components/Footer/Footer";
// import styles from './MountainGallery.module.css'

class MountainGallery2 extends Component {


state = {

    photos: [
        {"nr": "nr0001", "src": "/images/gallery2/sowie1.jpg", "photodesc": "Okolice Sokolca"},
        {"nr": "nr0002", "src": "/images/gallery2/sowie2.jpg", "photodesc": "Zygmuntówka"},
        {"nr": "nr0003", "src": "/images/gallery2/sowie3.jpg", "photodesc": "Przy Zygmuntówce"},
        {"nr": "nr0004", "src": "/images/gallery2/sowie4.jpg", "photodesc": "Widok z Wielkiej Sowy"},
        {"nr": "nr0005", "src": "/images/gallery2/sowie5.jpg", "photodesc": "Sowa"}
    ],

    // photos: [
    //     {"nr": "nr0001", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00033.jpg')", "photodesc": "Okolice Sokolca"},
    //     {"nr": "nr0002", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00042.jpg')", "photodesc": "Zygmuntówka"},
    //     {"nr": "nr0003", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00022.jpg')", "photodesc": "Przy Zygmuntówce"},
    //     {"nr": "nr0004", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00041.jpg')", "photodesc": "Widok z Wielkiej Sowy"},
    //     {"nr": "nr0005", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00043.jpg')", "photodesc": "Sowa"},
    // ],

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
    const slidePhoto0 = { backgroundImage: `url(${process.env.PUBLIC_URL + this.state.photos[0].src}`}
    const slidePhoto1 = { backgroundImage: `url(${process.env.PUBLIC_URL + this.state.photos[1].src}`}
    const slidePhoto2 = { backgroundImage: `url(${process.env.PUBLIC_URL + this.state.photos[2].src}`}
    const slidePhoto3 = { backgroundImage: `url(${process.env.PUBLIC_URL + this.state.photos[3].src}`}
    const slidePhoto4 = { backgroundImage: `url(${process.env.PUBLIC_URL + this.state.photos[4].src}`}
    // const slidePhoto0 = {
    //     backgroundImage: 'url("http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00001.jpg")'
    // }



        return (
            <div>

            <BurgerMenuHome />
            <div className='galleryWrapper'>


            <LogoSubpage />
            <h2 class="galleryRangeName">Góry Sowie</h2>

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



export default MountainGallery2;