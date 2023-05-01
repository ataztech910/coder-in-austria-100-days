import styles from '@/app/ui/atoms/tag.module.scss';

export default function Tag(tagData: ITag) {
      return (
       <div className={`${styles.tag} ${tagData.color} ${tagData.isSmall? styles['tag--isSmall'] : ''}`}>{tagData.title}</div>
      );
}