import styles from '@/app/ui/atoms/bread-crumbs.module.scss';
import Link from 'next/link';

export default function BreadCrumbs(breadCrumb: any) {
    return(
       <div className={styles.breadCrumb}>
        {
            breadCrumb?.items?.map((breadCrumbItem: any) => {
                return (
                    <div key={breadCrumbItem.title}>
                        <span className={breadCrumbItem.isLast? 'font-bold': 'font-light'}>
                            { breadCrumbItem.isLast && breadCrumbItem.title }
                            { 
                                !breadCrumbItem.isLast && 
                                    <Link href={breadCrumbItem.url}>{breadCrumbItem.title}</Link> 
                            }
                        </span>
                        { !breadCrumbItem.isLast && <span className={styles.breadCrumb__separator}>/</span> }
                    </div>
                )
            })
        }
       </div>
    );
}