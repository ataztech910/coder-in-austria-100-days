import styles from '@/app/ui/molecules/statistics.module.scss';
import Statistics from "./Statistics";

export default function StatisticsLayout(staisticsData: any) {
    return(
        <div data-testid="mainStatistics" className={styles.statisticsLayout}>
            <h3>{staisticsData?.fields?.title}</h3>
            <p>{staisticsData?.fields?.description}</p>
            <div className='m-auto max-w-[fit-content]'>
                <Statistics {...staisticsData?.fields} />
            </div>
        </div> 
    );
}