import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from '@/app/ui/molecules/top-menu.module.scss';

export default function MenuElement(item: IMenuElement) {
    const renderChildren = item.children && item.children.map((child: IMenuElement) => 
        (
            <a className="mb-1" key={child.link} href={child.link}>{child.name}</a>
        )
    );

    return(
        <li className={`${styles.topMenu__item} p-0 md:px-5`}>
            <a href={item.link}>
                {item.name}
                {renderChildren && <FontAwesomeIcon icon={faChevronDown} className="fa fa-thin fa-chevron-down ml-2" color="white" />}
            </a>
            {renderChildren && 
                (
                    <div className={styles.topMenu__item__childrenLayout}>
                        <div className={styles['topMenu__item__childrenLayout__children']}>{renderChildren}</div>
                    </div>
                )
            }
        </li>
    );
}