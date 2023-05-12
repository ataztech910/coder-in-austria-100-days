import styles from '@/app/courses/[slug]/course-item.module.scss';
import CourseHeader from '@/app/ui/molecules/CourseHeader';
import LessonsModule from '@/app/ui/organisms/LessonsModule';
import Image from 'next/image';

export default function CourseItem(props: IPageProps) {
    console.log(props.params.slug);
    const bannerData = {
        fields: {
            title: 'Basic informatics and computer science',
            image: '/banner-bg.png'
        }
    };
    const courseData = {
        textBefore: 'To begin this course, choose START COURSE. To advance to a specific topic, choose from the following lesson titles. For more information about how to use this course, choose How to Use This Course.',
        lessonsModules: [{
            title: 'Lessons module',
            lessons: [
                {
                    title: 'Start the course header',
                    status: false,
                    link: '#',
                    icon: true,
                },
                {
                    title: 'Start the course header',
                    status: false,
                    link: '#',
                    icon: true,
                }
            ]
        },
        {
            title: 'Lessons module',
            lessons: [
                {
                    title: 'Start the course header',
                    status: false,
                    link: '#',
                    icon: true,
                },
                {
                    title: 'Start the course header',
                    status: false,
                    link: '#',
                    icon: true,
                }
            ]
        }
    ],
        textAfter: 'To begin this course, choose START COURSE. To advance to a specific topic, choose from the following lesson titles. For more information about how to use this course, choose How to Use This Course.',
        description: {
            image: '/card.png',
            title: 'Basics informatics',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    };

    return (
        <div  className={`${styles.courseItem}`}>
            <CourseHeader  {...bannerData.fields}/>
            <div className={`${styles.courseItem__courseData} content`}>
                <p>
                    {courseData.textBefore}
                </p>
            </div>
            <div className={`${styles.courseItem__lessonsModule} content p-4 xl:p-0`}>
                {courseData.lessonsModules.map((lesson) => {
                    return (
                        <div className='mb-8' key={lesson.title}>
                            <LessonsModule {...lesson} />
                        </div>
                    )
                })}
                
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
                <p>
                    {courseData.textAfter}
                </p>
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
                <div className='block xl:flex mb-0 xl:mb-8 p-4 xl:p-0'>
                    <div className={styles.courseItem__descriptionImage}>
                                <Image
                                    src={`${courseData.description.image}`}
                                    alt={courseData.description.title}
                                    width={200}
                                    height={200} />
                    </div>
                    <div className={styles.courseItem__description}>
                        <h2>{courseData.description.title}</h2>
                        <p>{courseData.description.text}</p>
                    </div>
                </div>
                <div className={styles.courseItem__startCourse}>
                    <button>Start course</button>
                </div>
            </div>
        </div>
    );
}