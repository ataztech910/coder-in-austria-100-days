import styles from '@/app/ui/molecules/registration-form.module.scss';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import AuthNavigation from '../atoms/AuthNavigation';

export default function RegistrationForm(formParams: any) {
    const email = {
        title: 'Your email*',
        placeholder: 'youremail@email.com',
        type: 'email'
    }

    const password = {
        title: 'Your password*',
        placeholder: 'your password',
        type: 'password',
        showRules: !formParams.type
    }

    const button = {
        title: formParams.buttontitle ? formParams.buttontitle : 'Create an account',
        type: 'button'
    }

    return(
        <div className={styles.registrationForm} data-testid="registration">
           <div className={styles.registrationForm__title}>{formParams?.header}</div>
           <hr />
           <Input {...email} />
           <Input {...password} />
           <Button {...button} />
           { formParams?.showNavigation?.show  && 
            <>
                <AuthNavigation navConfig={formParams.showNavigation} />
            </>
           }
        </div>    
    );
}