import styles from './hero.module.css';
import headphone from '../../assets/headphone.png';

function Hero()
{
    return (
        <div className={styles.hero}>
            <div className={styles.heroHeading}>
            <h1>100 Thousand songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={headphone} alt="headphone" />
            </div>
        </div>
    )
}

export default Hero;