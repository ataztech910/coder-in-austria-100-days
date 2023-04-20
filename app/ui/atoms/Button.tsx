import styles from '@/app/ui/atoms/input.module.scss';

export default function Button(inputParams: IInput) {
    return(
        <>
            <button className={styles.formButton}>{inputParams.title}</button>
        </>
    );
}