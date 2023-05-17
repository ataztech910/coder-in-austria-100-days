import styles from '@/app/ui/molecules/lesson-line.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCircleQuestion, faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function LessonLine(lesson: ILesson) {
    return(
        <div className={styles.lesson}>
            <Link href={lesson.slug} className={styles.lesson__line}>
                <div>
                    {lesson.icon &&
                        <FontAwesomeIcon icon={faAlignLeft} className="fas fa-align-left fa-lg" />
                    }
                    {!lesson.icon &&
                        <FontAwesomeIcon icon={faCircleQuestion} className="fas fa-align-left fa-lg" />
                    }
                </div>
                <div className={styles.lesson__line__title}>{lesson.title}</div>
                <div>
                    {lesson.status && lesson.icon &&
                        <FontAwesomeIcon icon={faCircleCheck} className="fas fa-align-left fa-lg" />
                    }
                    {!lesson.status && lesson.icon &&
                        <FontAwesomeIcon icon={faCircle} className="fas fa-align-left fa-lg" />
                    }
                </div>
            </Link>
        </div>
    );
}