import styles from '@/app/ui/atoms/input.module.scss';

export default function Input(props: any) {
    const {inputParams, reference, error, clearErrorCallback} = props;

    return(
        <>
            <div className={styles.input}>
                <div className={styles.input__title}>{inputParams.title}</div>
                <div className={styles.input__item}>
                    <input onKeyDown={() => clearErrorCallback(inputParams.name)} name={inputParams.name} {...reference(inputParams.name)} type={inputParams.type} placeholder={inputParams.placeholder} />
                </div>
                <div>Error layout for : {error}</div>
                {
                    inputParams.type === 'password' && inputParams.showRules && 
                    <ul className={styles.input__item__password}>
                        <li>Minimum 8 characters</li>
                        <li>Include at least one lowercase letter (a-z)</li>
                        <li>Include at least one uppercase letter (A-Z)</li>
                        <li>Include at least one number</li>
                    </ul>
                }
            </div>
        </>
    );
}