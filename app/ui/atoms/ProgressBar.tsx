import styles from '@/app/ui/atoms/progress-bar.module.scss';

export default function ProgressBar(props : { progress: number }) {
  const progress = props.progress;
  const progressForWidth = progress + '%';

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBar__progress}>
        <div className={styles.progressBar__progress__percent} style={{ width: progressForWidth }}></div>
        <div className={styles.progressBar__progress__layout}></div>
      </div>
      <div className={styles.progressBar__label}>{progress}% complete</div>
    </div>
  );
}