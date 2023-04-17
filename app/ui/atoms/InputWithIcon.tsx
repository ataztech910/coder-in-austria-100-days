import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '@/app/ui/atoms/input.module.scss';

export default function InputWithIcon(inputParams: IInput) {
    return(
        <div className={`${styles.inputLayout} ${inputParams.additionalClasses}`}>
            <input className={`${styles[inputParams.class]}`} type="text" placeholder={inputParams.placeholder} />
            {/* <div className={`absolute ${styles.leftIcon}`}>left icon</div> */}
            <button className={`absolute ${styles.rightIcon}`}>
                {
                    inputParams.rightIcon && 
                    <FontAwesomeIcon icon={inputParams.rightIcon.objectName} className={`fa fa-thin ${inputParams.rightIcon.className}`} color="white" />
                }
            </button>
        </div> 
    );
}