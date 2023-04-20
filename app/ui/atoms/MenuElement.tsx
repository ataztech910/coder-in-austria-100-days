import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from '@/app/ui/molecules/top-menu.module.scss';
import { useState } from "react";

export default function MenuElement(item: IMenuElement) {
    let isHovering = false;
    const showChildren = (state: boolean) => isHovering = state;
    const keyDown = (event: React.KeyboardEvent<HTMLInputElement> ) => {
        if(event.key === 'ArrowDown' || event.keyCode === 40) {
            showChildren(true);
            event.stopPropagation;
            event.preventDefault;
            return false;
        }
    }
    const renderChildren = item.children && item.children.map((child: IMenuElement) => 
        (
            <a className="mb-1" key={child.link} href={child.link}>{child.name}</a>
        )
    );
   /**
    *  onKeyDown={(event) => { keyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>) }} 
            onMouseOver={() => showChildren(true)} 
            onMouseOut={() => showChildren(false)}
    */
    return(
        <li className={`${styles.topMenu__item} p-0 md:px-5`} 
           
        >
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