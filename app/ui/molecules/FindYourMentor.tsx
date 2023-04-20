import styles from '@/app/ui/molecules/find-your-mentor.module.scss';
import InputWithIcon from '../atoms/InputWithIcon';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

export default function FindYourMentor() {
    const inputParams: IInput = {
        class: 'findYourMentorInput',
        placeholder: 'type your search parameters here...',
        rightIcon: {
            objectName: faMagnifyingGlass,
            className: 'fa-xl fa-solid fa-magnifying-glass',
            testId: 'findYourMentor'
        },
        leftIcon: {
            objectName: faUser,
            className: 'fa-xl fa-duotone fa-users'
        }
    };
    
    return(
        <div className={styles.findYourMentor}>
           <div className='content'>
            <h2>Find your mentor</h2>
            <div className={styles.findYourMentor__input}>
                <InputWithIcon {...inputParams} />
            </div>
           </div>
        </div>
    );
}