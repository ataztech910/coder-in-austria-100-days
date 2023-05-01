import styles from '@/app/ui/molecules/registration-form.module.scss';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function RegistrationForm() {
    const email = {
        title: 'Your email*',
        placeholder: 'youremail@email.com',
        type: 'email'
    }

    const password = {
        title: 'Your password*',
        placeholder: 'your password',
        type: 'password'
    }

    const button = {
        title: 'Create an account',
        type: 'button'
    }

    return(
        <div className={styles.registrationForm} data-testid="registration">
           <div className={styles.registrationForm__title}>Join 1,000 mentors</div>
           <hr />
           <Input {...email} />
           <Input {...password} />
           <Button {...button} />
        </div>    
    );
}