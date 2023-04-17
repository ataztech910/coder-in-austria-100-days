import styles from '@/app/components/footer.module.scss';
import Logo from '../ui/atoms/Logo';
import BottomSeparator from '../ui/atoms/BottomSepaarator';
import { faArrowRight, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import InputWithIcon from '../ui/atoms/InputWithIcon';

export default function Footer() {
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
    const inputParams: IInput = {
        class: 'subscribe',
        placeholder: 'type your email here...',
        rightIcon: {
            objectName: faArrowRight,
            className: 'fa-xl fa-solid fa-arrow-right'
        },
        leftIcon: {
            objectName: faMailBulk,
            className: 'fa-xl fa-solid fa-arrow-right'
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles['footer__layout']}>
                <div>
                    <Logo className='m-auto xl:m-0' isResponsive={false} />
                    <div className='m-auto xl:m-0 max-w-[400px]'>
                        ipsum dolor sit amet consec adipisicing 
                        elit sed do eiusmod por incidiut labore 
                        et loreLorem ipsum kelly amieo dolorey.
                    </div>
                </div>
                <div className='mt-10 xl:mt-0'>
                    <h5>Important links</h5>
                    <BottomSeparator />
                    <ul className='p-0 m-0'>{renderMenu}</ul>
                </div>
                <div className='mt-10 xl:mt-0 min-w-[0px] xl:min-w-[500px]'>
                    <h5>Subscribe</h5>
                    <BottomSeparator />
                    <InputWithIcon {...inputParams} />
                </div>
            </div>
            <div className={styles['footer__copyright']}>
                Copy© Coder In Austria 2023. All Rights Reserved
            </div>
        </footer>
    );
}