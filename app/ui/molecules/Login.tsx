'use client';
import styles from '@/app/ui/molecules/top-menu.module.scss';
import { fetchUser } from '@/app/utils/aws-user-functions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";

export default function Login() {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchUser(setAuthState, dispatch).catch(() => {
            dispatch(setAuthState({
                authState: false
            }));
        });
    }, [dispatch]);

    return(
        <div className='mr-5 whitespace-nowrap'>
            {!authState.user?.username &&   
                <>
                    <a className={`${styles.login} pr-5 pl-5`} href="/auth/signin">Login</a>
                    <a href="/auth/signup" role='button' className={`${styles.signup} ml-5 mr-2 relative`} data-test-id='signUp'>Sign up</a>
                </>    
            }
            {authState.user?.username &&   
                <a className={`${styles.login} pr-5 pl-5`} href="/profile">Hello, {authState.user?.username}</a>
            }
        </div>
    );
}