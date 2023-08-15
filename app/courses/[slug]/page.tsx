"use client";
import styles from "@/app/courses/[slug]/course-item.module.scss";
import CourseHeader from "@/app/ui/molecules/CourseHeader";
import LessonsModule from "@/app/ui/organisms/LessonsModule";
import Image from "next/image";
import ContentfulStrategy from "./contentful-strategy";
import CourseStrategyContext from "./course-strategy-context";
import { useEffect, useState } from "react";
import PageLayout from "@/app/page-layout";
import { Loader } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/app/store/slices/authSlice";
import { getDataFromDB, GQL_Namespace } from "@/app/utils/api-controller.ts";

export default function CourseItem(props: IPageProps) {
  const [courseData, setCourseData] = useState<any>();
  const [bannerData, setBannerData] = useState<any>();
  const authState = useSelector(selectAuthState);

  useEffect(() => {
    const strategy = new CourseStrategyContext(new ContentfulStrategy());
    strategy.getCourseFromAPI(props.params.slug).then((data) => {
      setCourseData(data);
      setBannerData({
        fields: {
          title: data.courseName,
          image: data.topImage,
        },
      });
    });
  }, [props.params.slug]);

  async function getUserData() {
    return authState.authState
      ? getDataFromDB(GQL_Namespace.LESSONS_PASSED)
      : null;
  }
  useEffect(() => {
    getUserData() !== null &&
      getUserData().then((data: Partial<any> | null) => {
        const items = data?.data?.listUserLessonsPasseds?.items;
        const lessonsStatistics: Partial<any> = {};
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
            const moduleIndex = modulesState.findIndex(
              (item: Partial<any>) => item.slug === lesson
            );
            modulesState[moduleIndex]?.lessons?.forEach(
              (moduleLesson: Partial<any>) => {
                if (lessonsStatistics[lesson].includes(moduleLesson.slug)) {
                  moduleLesson.status = true;
                }
              }
            );
          });
          setCourseData({ ...courseData, modules: modulesState });
        }
      });
  }, [courseData, courseData?.modules]);

  return (
    <PageLayout>
      <>
        {!courseData ? (
          <div className={styles.loader}>
            <Loader variation="linear" />
          </div>
        ) : (
          <div className={`${styles.courseItem}`}>
            <CourseHeader {...bannerData.fields} />
            <div className={`${styles.courseItem__courseData} content`}>
              <p>{courseData.preText}</p>
            </div>
            <div
              className={`${styles.courseItem__lessonsModule} content p-4 xl:p-0`}
            >
              {courseData.modules?.map((module: any) => {
                return (
                  <div className="mb-8" key={module.slug}>
                    <LessonsModule {...module} />
                  </div>
                );
              })}
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
              <p>{courseData.postText}</p>
            </div>
            <div className={`${styles.courseItem__courseData} content`}>
              <div className="block xl:flex mb-0 xl:mb-8 p-4 xl:p-0">
                <div className={styles.courseItem__descriptionImage}>
                  {courseData.bottomCourseImage && (
                    <Image
                      src={`https:${courseData.bottomCourseImage}`}
                      alt={courseData.bottomTitle}
                      width={200}
                      height={200}
                    />
                  )}
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
        )}
      </>
    </PageLayout>
  );
}