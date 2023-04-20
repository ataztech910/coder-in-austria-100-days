import styles from '@/app/ui/molecules/empower.module.scss';

export default function Empower() {
    return(
        <div className={styles.empower}>
           <div className='content block xl:flex p-5 xl:p-0'>
            <div className={styles.empower__image}>
            <picture>
                <source media="(min-width: 1280px)" srcSet='/empower.png' width='100%' />
                <img loading="lazy" src='/empower_1.png' width='100%' />
            </picture>
            </div>
            <div className={styles.empower__text}>
                <h4>Designed for empowered developers</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <hr />
                <div className={styles.empower__text__bullets}>
                    <ul>
                        <li>
                            <div className={styles.empower__text__bullets__icon}></div>
                            <div className={styles.empower__text__bullets__text}>
                                <h5>Lorem ipsum</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.empower__text__bullets__icon}></div>
                            <div className={styles.empower__text__bullets__text}>
                                <h5>Lorem ipsum</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.empower__text__bullets__icon}></div>
                            <div className={styles.empower__text__bullets__text}>
                                <h5>Lorem ipsum</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <p className={styles.empower__text__underlineText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </div>
           </div>
        </div>
    );
}