import styles from '@/app/ui/molecules/top-menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSelector() {
    const currentLanguage = { link: '', name: 'EN' };
    // const keyDown = (event: React.KeyboardEvent<HTMLInputElement> ) => {
    //     if(event.key === 'ArrowDown' || event.keyCode === 40) {
    //         showChildren(true);
    //         event.stopPropagation;
    //         event.preventDefault;
    //         return false;
    //     }
    // }
    const menuElements: Array<IMenuElement> = [
        {
            link: '/',
            name: 'English'
        },
        {
            link: '/ru',
            name: 'Russian',
        },
    ];

    const renderChildren = menuElements.map((child: IMenuElement) => 
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
        <button className={`${styles['topMenu__item']} hidden md:block p-0 xl:px-5`} 
           
            >
            <div>
                {currentLanguage.name}
                {<FontAwesomeIcon icon={faChevronDown} className="fa fa-thin fa-chevron-down ml-2" color="white" />}
            </div>
            { 
                (
                    <div className={styles['topMenu__item__childrenLayout']}>
                        <div className={styles.languageSelector}>{renderChildren}</div>
                    </div>
                )
            }
        </button>
    );
}