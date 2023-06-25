'use client';
import styles from '@/app/courses/[slug]/course-item.module.scss';
import CourseHeader from '@/app/ui/molecules/CourseHeader';
import LessonsModule from '@/app/ui/organisms/LessonsModule';
import Image from 'next/image';
import ContentfulStrategy from './contentful-strategy';
import CourseStrategyContext from './course-strategy-context';
import { useEffect, useState } from 'react';
import PageLayout from '@/app/page-layout';
import { API } from 'aws-amplify';
import { listUserLessonsPasseds } from '@/app/queries';
import { Loader } from '@aws-amplify/ui-react';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function CourseItem(props: IPageProps) {
    const [courseData, setCourseData] = useState<any>();
    const [bannerData, setBannerData] = useState<any>();

    useEffect(() => {
        const strategy = new CourseStrategyContext(new ContentfulStrategy());
        strategy.getCourseFromAPI(props.params.slug)
            .then((data) => {
                setCourseData(data);
                setBannerData({
                    fields: {
                        title: data.courseName,
                        image: data.topImage
                    }
            });
        })
    }, [props.params.slug]);

    async function getUserData() {
        return await API.graphql({ query: listUserLessonsPasseds});
    }
    useEffect(() => {
        getUserData().then((data: Partial<any>) => {
            const items = data?.data?.listUserLessonsPasseds?.items;
            let lessonsStatistics: Partial<any> = {};
            if (items) {
                items.forEach((item: Partial<any>) => {
                    if (!lessonsStatistics[item.moduleID]) {
                        lessonsStatistics[item.moduleID] = [];
                    }
                    lessonsStatistics[item.moduleID].push(item.lessonID); 
                });
            }
            if (items && courseData?.modules) {
                const modulesState = courseData?.modules;
                Object.keys(lessonsStatistics).forEach((lesson: string) => {
                    const moduleIndex = modulesState.findIndex((item: Partial<any>) => item.slug === lesson);
                    modulesState[moduleIndex]?.lessons?.forEach((moduleLesson: Partial<any>) => {
                        if(lessonsStatistics[lesson].includes(moduleLesson.slug)) {
                            moduleLesson.status = true;
                        }
                    });
                });
                setCourseData({...courseData, modules: modulesState});
            }
        })
    },[courseData, courseData?.modules]);

    return (
        <PageLayout>
            <>
                {!courseData ? (
                    <div className={styles.loader}>
                        {/*<CirclePopLoader loading={true} />*/}
                        <Loader variation="linear" />
                    </div> 
                ) : (
                    <div className={`${styles.courseItem}`}>
                        <CourseHeader  {...bannerData.fields}/>
                        <div className={`${styles.courseItem__courseData} content`}>
                            <p>
                                {courseData.preText}
                            </p>
                        </div>
                        <div className={`${styles.courseItem__lessonsModule} content p-4 xl:p-0`}>
                            {courseData.modules?.map((module: any) => {
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
                                        {
                                        courseData.bottomCourseImage &&
                                            <Image
                                                src={`https:${courseData.bottomCourseImage}`}
                                                alt={courseData.bottomTitle}
                                                width={200}
                                                height={200} />
                                        }
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
                    )

                }
            </>
        </PageLayout>
    );
}