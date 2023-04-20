import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '@/app/ui/atoms/input.module.scss';

export default function InputWithIcon(inputParams: IInput) {
    let hasPadding = '';
    if(inputParams.leftIcon) {
        hasPadding = '!pl-14';
    }
    return(
        <div className={`${styles.inputLayout} ${inputParams.additionalClasses}`}>
            <input className={`${styles[inputParams.class as string]} ${hasPadding}`} type="text" placeholder={inputParams.placeholder} />
            {inputParams.leftIcon && 
                <div className={`absolute ${styles.leftIcon}`}>
                    {
                        inputParams.leftIcon && 
                        <FontAwesomeIcon icon={inputParams.leftIcon.objectName} 
                            className={`fa fa-thin ${inputParams.leftIcon.className}`} color="#565656" />
                    }
                </div>
            }
            <button className={`absolute ${styles.rightIcon} buttonIcon`} data-test-id={inputParams.rightIcon?.testId}>
                {
                    inputParams.rightIcon && 
                    <FontAwesomeIcon icon={inputParams.rightIcon.objectName} className={`fa fa-thin ${inputParams.rightIcon.className}`} color="white" />
                }
            </button>
        </div> 
    );
}