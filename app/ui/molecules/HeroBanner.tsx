import styles from '@/app/ui/molecules/hero-banner.module.scss';
import Statistics from './Statistics';
import RegistrationForm from './RegistrationForm';

export default function HeroBanner() {
    const purpleFont = '';
    return(
        <div className={`${styles.heroBanner} bg-[url('/banner-bg.png')]`}>
            <div className={`content ${styles.heroBanner__layout}`}>
                <div className={styles.heroBanner__layout__leftSide}>
                    <h1>Discover new product and best possibilities</h1>
                    <p className={styles.heroBanner__layout__leftSide__text}>Coder in Austria it is a unique product to learn programming languages with explicit help of real mentors on demand</p>
                    <hr />
                    <Statistics style={purpleFont} />
                </div>
                <div className={styles.heroBanner__layout__rightSide}>
                    <RegistrationForm />
                </div>
            </div>
        </div>    
    );
}