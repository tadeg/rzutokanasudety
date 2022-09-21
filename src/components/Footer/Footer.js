import '../../css/Footer.css';
// import styles from './Footer.module.css'


function Footer() {


// let footerStyles = [styles.xxx]


    return (
    <div>
        <footer>
            {/* <section className={styles.contact}> */}
            <section className='contact'>
                <ul>
                    <li><i className="fas fa-envelope-square"></i><a href="mailto:tadoe@tadoe.pl">tadoe@tadoe.pl</a></li>
                </ul>
            </section>
            {/* <p className={styles.notes}>&copy; 2022 rzutokanasudety; Created by: tadoe</p> */}
            <p className='notes'>&copy; 2022 rzutokanasudety; Created by: tadoe</p>
        </footer>
    </div>
    );
}
export default Footer;