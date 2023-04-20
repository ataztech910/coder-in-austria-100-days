import styles from '@/app/ui/molecules/statistics.module.scss';
import React from 'react';

export default function Statistics({style}: {style: string}) {
    return(
        <div className={`${style} ${styles.statistics}`}>
            <div className={styles.statistics__item}>
                <div className={styles.statistics__item__number}>10k</div>
                <div className={styles.statistics__item__description}>Our active users</div>
            </div>
            <div className={styles.statistics__item}>
                <div className={styles.statistics__item__number}>1k</div>
                <div className={styles.statistics__item__description}>Professional mentors</div>
            </div>
            <div className={styles.statistics__item}>
                <div className={styles.statistics__item__number}>15</div>
                <div className={styles.statistics__item__description}>Unique courses</div>
            </div>
        </div>
    );
}