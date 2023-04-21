import styles from '@/app/ui/molecules/statistics.module.scss';
import Statistics from "./Statistics";

export default function StatisticsLayout() {
    return(
        <div className={styles.statisticsLayout}>
            <h3>Home to your next coding goal</h3>
            <p>Join our professional worldwide community</p>
            <div className='m-auto max-w-[fit-content]'>
                <Statistics style={''} />
            </div>
        </div> 
    );
}