import styles from '@/app/ui/atoms/bottom-separator.module.scss';

export default function BottomSeparator(separatorConfig: any) {
  return (
    <div 
      className={styles.bottomSeparator}
      style={{
        marginLeft: separatorConfig.initial? 'initial' : ''
      }}
    >
      <div 
        className={styles['bottomSeparator__left']}
        style={{
          background: separatorConfig.isDark ? '#000' : '#fff'
        }}
      ></div>
      <div 
        className={styles['bottomSeparator__right']}
        style={{
          background: separatorConfig.isDark ? '#000' : '#fff'
        }}    
      ></div>
    </div>
  );
}