'use client';
import styles from '@/app/ui/molecules/top-menu.module.scss';
import { fetchUser } from '@/app/utils/aws-user-functions';
import { useState, useEffect } from 'react';


export default function Login() {
    const [user, setUser] = useState<any>();
    useEffect(() => {
        fetchUser(setUser).catch(() => {
            setUser({username: ""});
        });
    }, []);

    return(
        <div className='mr-5 whitespace-nowrap'>
            {user?.username === "" &&   
                <>
                    <a className={`${styles.login} pr-5 pl-5`} href="/auth/signin">Login</a>
                    <a href="/auth/signup" role='button' className={`${styles.signup} ml-5 mr-2 relative`} data-test-id='signUp'>Sign up</a>
                </>    
            }
            {user?.username !== "" &&   
                <a className={`${styles.login} pr-5 pl-5`} href="/profile">Hello, {user?.username}</a>
            }
        </div>
    );
}