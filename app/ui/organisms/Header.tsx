'use client';
import styles from '@/app/ui/organisms/header.module.scss';
import Logo from '../atoms/Logo';
import Separator from '../atoms/Separator';
import LanguageSelector from '../molecules/LanguageSelector';
import Login from '../molecules/Login';
import Sidebar from '../molecules/Sidebar';
import TopMenu from '../molecules/TopMenu';
import TopSearch from '../molecules/TopSearch';

export default function Header() {
  const isMultilingual = false;
  return (
    <header data-testid="header" className={`${styles.header} sticky top-0`}>
      <div className='flex items-center justify-between content'>
        <Sidebar />
        <Logo isResponsive={true} />
        <TopMenu />
        <TopSearch />
        { isMultilingual &&
          <>
            <Separator />
            <LanguageSelector />
          </>
        }
        <Separator />
        <Login />
      </div>
    </header>
  );
}