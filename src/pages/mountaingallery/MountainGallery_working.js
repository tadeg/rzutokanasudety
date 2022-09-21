import React, { Component } from "react";
import '../../css/MountainGallery.css';
import Footer from "../../components/Footer/Footer";
// import styles from './MountainGallery.module.css'

class MountainGallery extends Component {


state = {
    photos: [
        {"nr": "nr0001", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00001.jpg')", "photodesc": "Śnieżne Kotły"},
        {"nr": "nr0002", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00011.jpg')", "photodesc": "Widok ze Śnieżki"},
        {"nr": "nr0003", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00010.jpg')", "photodesc": "Śnieżka"},
        {"nr": "nr0004", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00009.jpg')", "photodesc": "Kocioł Łomniczki"},
        {"nr": "nr0005", "src": "url('http://www.gugafotografia.pl/img/tematy/02_gory/gf_Rg_00004.jpg')", "photodesc": "Widok ze Szrenicy"}
    ]
}


// toggleSlideExpandHandler22 = () => {
    
//     const slides = document.querySelectorAll('.slide');

//     slides.forEach((slide) => {
//         slide.deleteActiveClasses()
//         slide.classList.add('active')
// })


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


    let slideExpandedStyles =['slide', 'active'].join(' ');
    const slideRolledUpStyles = ['slide'];
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
            <div className='galleryWrapper'>
                {/* <h1>Rzut oka na Sudery</h1> */}
                {/* <div> */}
                <h2 className='siteTitle'>rzut</h2>
                <h2 className='siteTitle'>oka</h2>
                <h2 className='siteTitle'>na</h2> 
                <h2 className='siteTitle'>Sudety</h2> 
                {/* </div> */}
                <h2 >Karkonosze</h2>
                <div className="container">

                
                    {/* <div className="slide active"></div> */}
                    {/* <div className={"slide active"}></div> */}
                    <div className={slideExpandedStyles} style={slidePhoto0}>
                        {/* <h3>Śnieżne Kotły</h3> */}
                        <h3>{this.state.photos[0].photodesc}</h3>
                    </div>
               

                    <div className={slideRolledUpStyles} style={slidePhoto1} onClick={this.toggleSlideExpandHandler}>
                    {/* <h3>Widok ze Śnieżki</h3> */}
                    <h3>{this.state.photos[1].photodesc}</h3>
                    </div>

                    {/* <div className="slide"> */}
                    <div className={slideRolledUpStyles} style={slidePhoto2} onClick={this.toggleSlideExpandHandler}>
                    {/* <h3>Śnieżka</h3> */}
                    <h3>{this.state.photos[2].photodesc}</h3>
                    </div>

                    {/* <div className="slide"> */}
                    <div className={slideRolledUpStyles} style={slidePhoto3} onClick={this.toggleSlideExpandHandler}>
                    {/* <h3>Kocioł Łomniczki</h3> */}
                    <h3>{this.state.photos[3].photodesc}</h3>
                    </div>

                    {/* <div className="slide"> */}
                    <div className={slideRolledUpStyles} style={slidePhoto4} onClick={this.toggleSlideExpandHandler}>
                    {/* <h3>Widok ze Szrenicy</h3> */}
                    <h3>{this.state.photos[4].photodesc}</h3>
                    </div>

                </div>
            
            </div>
            <Footer/>
            </div>
        )      
            }
    }
export default MountainGallery;