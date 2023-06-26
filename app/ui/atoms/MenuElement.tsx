'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from '@/app/ui/molecules/top-menu.module.scss';
import { useMenu } from "@/app/utils/useMenu";

export default function MenuElement(item: IMenuElement) {
  const [{ ariaExpanded, toggle, changeToggleState, resetToggle }] = useMenu(false);
  const renderChildren = item.children && item.children.map((child: IMenuElement) => 
    (
      <li key={child.link}><a className="mb-1" href={child.link}>{child.name}</a></li>
    )
  );
  const toggleExpanded = (target: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (target.key !== 'Enter' ) {
      return false;
    }
    changeToggleState();
  };

  return (
    <li className={`${styles.topMenu__item} p-0 md:px-5`} onMouseMove={resetToggle}>
      <a href={renderChildren? `#${item.name}` : item.link} onKeyDown={(e) => toggleExpanded(e)} aria-expanded={ariaExpanded}>
        {item.name}
        {renderChildren && <FontAwesomeIcon icon={faChevronDown} className="fa fa-thin fa-chevron-down ml-2" color="white" />}
      </a>
      {renderChildren && 
                (
                  <div className={`${styles.topMenu__item__childrenLayout} ${toggle}`}>
                    <ul className={styles['topMenu__item__childrenLayout__children']}>{renderChildren}</ul>
                  </div>
                )
      }
    </li>
  );
}