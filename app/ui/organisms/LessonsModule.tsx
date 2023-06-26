import styles from '@/app/ui/organisms/lesson-module.module.scss';
import LessonLine from '../molecules/LessonLine';
import { Fragment } from 'react';

export default function LessonModule(lessonModule: ICourseModule) {
  return (
    <div className={styles.courseHeader}>
      <div>
        <h2>{lessonModule.title}</h2>
      </div>
      {lessonModule?.lessons?.map((lesson: ILesson) => {
        return (
          <Fragment key={lesson.slug}>
            <LessonLine {...lesson} />
          </Fragment>
        );
      })}
    </div>
  );
}