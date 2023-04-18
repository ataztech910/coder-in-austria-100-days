import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import styles from '@/app/ui/atoms/sidebar.module.scss';

export default function SideBarHamburger() {
    return(
        <button className={styles.sidebar} data-testId='hamburger'>
            <FontAwesomeIcon icon={faAlignLeft} className="fas fa-align-left fa-lg" color="white" /> 
        </button>
    );
}