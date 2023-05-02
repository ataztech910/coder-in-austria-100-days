'use client';

import styles from '@/app/ui/molecules/sidebar.module.scss';
import React, { useState } from 'react';
import SidebarHamburger from '../atoms/SidebarHamburger';
import { Transition } from 'react-transition-group';
import ModalBackdrop from '../atoms/ModalBackdrop';
import SidebarLayout from '../atoms/SidebarLayout';
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import InputWithIcon from '../atoms/InputWithIcon';

export default function Sidebar() {
    const [sidebarState, setSidebarState] = useState(false);
    const duration = 250;
    const updateSidebarState = () => {
        setSidebarState(!sidebarState);
    }
    const inputParams: IInput = {
        class: 'topSearch',
        additionalClasses: 'block xl:hidden',
        placeholder: 'search here...',
        rightIcon: {
            objectName: faMagnifyingGlass,
            className: 'fa-xl fa-solid fa-magnifying-glass',
            testId: 'searchButton'
        }
    };
    const menuElements: Array<IMenuElement> = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/courses',
            name: 'Courses',
        },
        {
            link: '/blog',
            name: 'Blog'
        }
    ];
    const renderMenu = menuElements.map((menuItem: IMenuElement) => <li key={menuItem.link}><a className='mb-1 hover:underline' key={menuItem.link} href={menuItem.link}>{menuItem.name}</a></li>);

    return(
        <div className={styles.sidebar}>
            <SidebarHamburger handleClick={updateSidebarState} />
            <Transition in={sidebarState} timeout={duration}>
                {state => (
                    <ModalBackdrop duration={duration} state={state}>
                        <SidebarLayout duration={duration} state={state}>
                            {sidebarState && (
                                <div className={styles.sidebar__layout__menu__content}>
                                    <button className={styles.sidebar__layout__menu__content__close} onClick={updateSidebarState}>
                                        <FontAwesomeIcon icon={faXmark} className="fa-solid fa-xmark fa-align-right fa-2xl" color="#313131" /> 
                                    </button>
                                    <div className={styles.sidebar__layout__menu__content__logo}>
                                        <Image
                                            className={`mt-1`}
                                            src="/Logo--black.svg"
                                            alt="Coder in Austria"
                                            width={200}
                                            height={67} />
                                    </div>
                                    <div className={styles.sidebar__layout__menu__content__list}>
                                        
                                        <InputWithIcon {...inputParams} />
                                        <ul>
                                            {renderMenu}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </SidebarLayout>
                    </ModalBackdrop>
                )}
            </Transition>
        </div>
    );
}