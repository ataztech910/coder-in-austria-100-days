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
          link: '/courses/basic-informatics-and-computer-science',
          name: 'Basic informatics and computer science'
        },
      ]
    },
    {
      link: '/blog',
      name: 'Blog'
    }
  ];
  const renderMenu = menuElements.map((menuItem: IMenuElement) => <MenuElement key={menuItem.link} {...menuItem} />);

  return (
    <nav aria-label="Main" className={`flex hidden lg:block ${styles.topMenu}`}>
      <ul>{renderMenu}</ul>
    </nav>
  );
}