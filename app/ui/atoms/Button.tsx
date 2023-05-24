'use client';
import styles from '@/app/ui/atoms/input.module.scss';

export default function Button(props: any) {
    const { inputParams, callBack } = props;

    return(
        <>
            <button type={inputParams.type} onClick={callBack} className={styles.formButton}>{inputParams.title}</button>
        </>
    );
}