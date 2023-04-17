import styles from '@/app/ui/atoms/bottom-separator.module.scss';

export default function BottomSeparator() {
    return(
       <div className={styles.bottomSeparator}>
        <div className={styles['bottomSeparator__left']}></div>
        <div className={styles['bottomSeparator__right']}></div>
       </div>
    );
}