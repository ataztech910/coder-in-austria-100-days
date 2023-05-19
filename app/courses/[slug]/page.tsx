import styles from '@/app/courses/[slug]/course-item.module.scss';
import CourseHeader from '@/app/ui/molecules/CourseHeader';
import LessonsModule from '@/app/ui/organisms/LessonsModule';
import Image from 'next/image';
import ContentfulStrategy from './contentful-strategy';
import CourseStrategyContext from './course-strategy-context';
import { use } from 'react';

async function getPageData (slug: string) {
    const strategy = new CourseStrategyContext(new ContentfulStrategy());
    return await strategy.getCourseFromAPI(slug);
};

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata( { params, searchParams }: any) {
    const id = params.id;
    const courseData = await getPageData(id);
    return {
        title: `Coder in Austris | Courses | ${courseData.courseName}`,
    };
}

export default function CourseItem(props: IPageProps) {
    
    const courseData = use && use(getPageData(props.params.slug));
    const bannerData = {
        fields: {
            title: courseData.courseName,
            image: courseData.topImage
        }
    };

    const metadata = {
        title:  `Coder in Austria | Course | ${courseData.courseName}`
    }


    return (
        <div  className={`${styles.courseItem}`}>
            <CourseHeader  {...bannerData.fields}/>
            <div className={`${styles.courseItem__courseData} content`}>
                <p>
                    {courseData.preText}
                </p>
            </div>
            <div className={`${styles.courseItem__lessonsModule} content p-4 xl:p-0`}>
                {courseData.modules.map((module) => {
                    return (
                        <div className='mb-8' key={module.slug}>
                            <LessonsModule {...module} />
                        </div>
                    )
                })}
                
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
                <p>
                    {courseData.postText}
                </p>
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
                <div className='block xl:flex mb-0 xl:mb-8 p-4 xl:p-0'>
                    <div className={styles.courseItem__descriptionImage}>
                                <Image
                                    src={`https:${courseData.bottomCourseImage}`}
                                    alt={courseData.bottomTitle}
                                    width={200}
                                    height={200} />
                    </div>
                    <div className={styles.courseItem__description}>
                        <h2>{courseData.bottomTitle}</h2>
                        <p>{courseData.bottomText}</p>
                    </div>
                </div>
                <div className={styles.courseItem__startCourse}>
                    <button>Start course</button>
                </div>
            </div>
        </div>
    );
}