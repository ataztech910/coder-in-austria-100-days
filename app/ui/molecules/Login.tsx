import styles from '@/app/ui/molecules/top-menu.module.scss';

export default function Login() {
    return(
        <div className='mr-5 whitespace-nowrap'>
            <a className={`${styles.login} pr-5 pl-5`} href="/login">Login</a>
            <button className={`${styles.signup} ml-5 mr-2 relative`} data-test-id='signUp'>Sign up</button>
        </div>
    );
}