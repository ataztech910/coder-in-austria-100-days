'use client';

import styles from '@/app/ui/molecules/top-menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from '@/app/utils/useMenu';

export default function LanguageSelector() {
  const [{ ariaExpanded, toggle, changeToggleState, resetToggle }] = useMenu(false);
  const currentLanguage = { link: '', name: 'EN' };
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
  const toggleExpanded = (target: React.KeyboardEvent<HTMLButtonElement>) => {
    if (target.key !== 'Enter' ) {
      return false;
    }
    changeToggleState();
  };

  const renderChildren = menuElements.map((child: IMenuElement) => 
    (
      <li key={child.link}><a className="mb-1" href={child.link}>{child.name}</a></li>
    )
  );
  return (
    <button className={`${styles['topMenu__item']} !hidden md:!block p-0 xl:px-5`} 
      onKeyDown={(e) => toggleExpanded(e)} 
      onClick={() => changeToggleState()} 
      aria-expanded={ariaExpanded}
    >
      <div onMouseMove={resetToggle}>
        {currentLanguage.name}
        {<FontAwesomeIcon icon={faChevronDown} className="fa fa-thin fa-chevron-down ml-2" color="white" />}
      </div>
      { 
        (
          <div className={`${styles['topMenu__item__childrenLayout']}  ${toggle}`}>
            <ul className={styles.languageSelector}>{renderChildren}</ul>
          </div>
        )
      }
    </button>
  );
}