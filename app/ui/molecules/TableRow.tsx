import styles from '@/app/ui/molecules/table-row.module.scss';
import ProgressBar from "@/app/ui/atoms/ProgressBar.tsx";

export default function TableRow(props : { row: ITableRow }) {
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableRow__name}>{props.row.name}</div>
      <div className={styles.tableRow__modules}>
        <div className={styles.tableRow__modules__name}>
          {props.row.modules.map((module: IModulesStatistics) =>
            <div key={module.name+module.progress}>{module.name}</div>
          )}
        </div>
        <div className={styles.tableRow__modules__status}>
          {props.row.modules.map((module: IModulesStatistics) =>
            <div className={styles.tableRow__modules__status__item} key={module.name+module.progress}>
              <ProgressBar progress={module.progress} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}