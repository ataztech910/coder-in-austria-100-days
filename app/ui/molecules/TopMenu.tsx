import styles from '@/app/ui/molecules/top-menu.module.scss';
import MenuElement from '../atoms/MenuElement';
import React from 'react';

export default function TopMenu() {
    const menuElements: Array<IMenuElement> = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/courses',
            name: 'Courses',
            children: [
                {
                    link: '/courses/beginner',
                    name: 'Computer science. Beginner'
                },
                {
                    link: '/courses/advanced',
                    name: 'Computer science. Advanced'
                }
            ]
        },
        {
            link: '/blog',
            name: 'Blog'
        }
    ];
    const renderMenu = menuElements.map((menuItem: IMenuElement) => <MenuElement key={menuItem.link} {...menuItem} />);
           
    return(
        <nav aria-label="Main" className={`flex hidden lg:block ${styles.topMenu}`}>
            <ul>{renderMenu}</ul>
        </nav>
    );
}