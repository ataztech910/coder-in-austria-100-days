import styles from '@/app/components/header.module.scss';
import SidebarHamburger from '../ui/atoms/SidebarHamburger';
import TopMenu from '../ui/molecules/TopMenu';
import TopSearch from '../ui/molecules/TopSearch';
import LanguageSelector from '../ui/molecules/LanguageSelector';
import Login from '../ui/molecules/Login';
import Separator from '../ui/atoms/Separator';
import Logo from '../ui/atoms/Logo';

export default function Header(user: any) {
    return(
        <header className={`flex items-center justify-between ${styles.header}`}>
            <SidebarHamburger />
            <Logo isResponsive={true} />
            <TopMenu />
            <TopSearch />
            <Separator />
            <LanguageSelector />
            <Separator />
            <Login />
        </header>
    );
}