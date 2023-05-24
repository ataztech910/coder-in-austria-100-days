'use client';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/molecules/registration-form.module.scss';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import AuthNavigation from '../atoms/AuthNavigation';
import { Auth } from 'aws-amplify';
import { useForm } from "react-hook-form";
import "../../utils/amplifyConfigure";

export default function RegistrationForm(formParams: any) {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const email = {
        title: 'Your email*',
        placeholder: 'youremail@email.com',
        type: 'username',
        name: 'username',
        ref: register
    }

    const password = {
        title: 'Your password*',
        placeholder: 'your password',
        type: 'password',
        showRules: !formParams.type,
        name: 'password',
        ref: register
    }

    const button = {
        title: formParams.buttontitle ? formParams.buttontitle : 'Create an account',
        type: 'submit',
    }

    async function signIn(params?: any) {
        const {username, password} = params;
        try {
            await Auth.signIn(username, password);
            console.log('authorised');
            router.push('/profile');
          } catch (error) {
            console.log('error signing in', error);
          }
    }

    return(
        <>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(signIn)}>
                <div className={styles.registrationForm} data-testid="registration">
                    <div className={styles.registrationForm__title}>{formParams?.header}</div>
                    <hr />
                    <Input inputParams={email} reference={register} />
                    <Input inputParams={password} reference={register} />
                    <Button inputParams={button} />
                    { formParams?.showNavigation?.show  && 
                        <>
                            <AuthNavigation navConfig={formParams.showNavigation} />
                        </>
                    }
                </div>
            </form>   
        </> 
    );
}