import styles from '@/app/ui/organisms/table.module.scss';
import TableRow from "@/app/ui/molecules/TableRow.tsx";

export default function Table(props: {table: ITableRow[]}) {
  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <div className={styles.table__header__name}>Course name</div>
        <div className={styles.table__header__rightSide}>
          <div className={styles.table__header__rightSide__block}>
            <div className={styles.table__header__rightSide__block__separator}></div>
            <div>Module name</div>
          </div>
          <div className={styles.table__header__rightSide__block}>
            <div className={styles.table__header__rightSide__block__separator}></div>
            <div>Status</div>
          </div>
        </div>
      </div>
      <div className={styles.table__body}>
        {
          props.table.map((row: ITableRow) => (
            <TableRow key={row.name+Math.random()*1000} row={row} />
          ))
        }
      </div>
    </div>
  );
}