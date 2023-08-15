"use client";
import BottomSeparator from "@/app/ui/atoms/BottomSeparator.tsx";
import styles from "@/app/profile/profile.module.scss";
import BlogCard from "@/app/ui/molecules/BlogCard.tsx";
import { useEffect, useState } from "react";
import { getDataFromDB, getPageData, GQL_Namespace } from "@/app/utils/api-controller.ts";

function MyCourses() {
  const [courseData, setCourseData] = useState([]);

  async function getUserData() {
    return getDataFromDB(GQL_Namespace.DETAILS);
  }
  useEffect(() => {
    const fetchData = async () => {
      console.log(await getUserData());
      return await getUserData();
    };
    fetchData()
      .then((result: Partial<any>) => {
        const pageSlugsRaw = result?.data?.[GQL_Namespace.DETAILS].items?.[0]?.couresToPass;
        const pageSlugs = pageSlugsRaw !== '' ? JSON.parse(pageSlugsRaw).courses : [];
        setCourseData(pageSlugs);
      })
      .catch(console.error);
  }, []);

  const separatorConfig = {
    isDark: true,
    initial: true,
  };

  return (
    <section className={styles.profile}>
      <h1>My courses</h1>
      <BottomSeparator {...separatorConfig} />
      <div className={styles.profile__courses}>
        {courseData &&
          courseData.length > 0 &&
          courseData.map((course: Partial<any>) => (
            <div key={course.slug}>
              <BlogCard {...course} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default MyCourses;
