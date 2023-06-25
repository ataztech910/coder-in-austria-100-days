import styles from '@/app/ui/molecules/statistics.module.scss';
import React from 'react';

export default function Statistics(statisticsData: any) {
  return (
    <div className={` ${styles.statistics}`}>
      {
        statisticsData?.statisticItems?.map((item: any) => 
          <div key={item.fields.numberAsString} className={styles.statistics__item}>
            <div className={styles.statistics__item__number}>{item.fields.numberAsString}</div>
            <div className={styles.statistics__item__description}>{item.fields.fieldDescription}</div>
          </div>
        )
      }
    </div>
  );
}