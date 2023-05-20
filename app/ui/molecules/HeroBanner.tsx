import styles from '@/app/ui/molecules/hero-banner.module.scss';
import Statistics from './Statistics';
import RegistrationForm from './RegistrationForm';
import React from 'react';

export default function HeroBanner(bannerData: any) {
    const formParams = {
        header: 'Join 1,000 mentors'
    }
    return(
        <div 
            data-testid="heroBaner"
            className={`${styles.heroBanner}`}
            style={{
                backgroundImage: `url(${bannerData?.fields?.backgroundImage?.fields?.file?.url})`
            }}
        >
            <div 
                className={`content ${styles.heroBanner__layout}`}
                style={{
                    color: bannerData?.fields?.textColor
                }}
            >
                <div className={styles.heroBanner__layout__leftSide}>
                    <h1>{bannerData?.fields?.title}</h1>
                    <p className={styles.heroBanner__layout__leftSide__text}>
                        {bannerData?.fields?.description?.content[0].content[0].value}
                    </p>
                    <hr />
                    <span data-testid="topStatistics">
                        <Statistics {...bannerData?.fields?.statistics?.fields} />
                    </span>
                </div>
                <div className={styles.heroBanner__layout__rightSide}>
                    <RegistrationForm {...formParams} />
                </div>
            </div>
        </div>    
    );
}