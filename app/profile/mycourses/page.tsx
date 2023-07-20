'use client';
import withAuth from '@/app/utils/with-auth.hoc.tsx';
import BottomSeparator from "@/app/ui/atoms/BottomSeparator.tsx";
import styles from '@/app/profile/profile.module.scss';
import BlogCard from "@/app/ui/molecules/BlogCard.tsx";

function MyCourses() {
  const separatorConfig = {
    isDark: true,
    initial: true
  };

  const coursesMockData = [
    {
      title: "React Labs: What We've Been Working On – June 2022 (recomended)",
      tag: { color: 'darkBlue', isSmall: false, title: 'reactJs' },
      image: 'http://images.ctfassets.net/wc4oyxpiv5l2/3RXfN46Fk7dZ8Ya3Nn0VVI/bd5a32515f91a5f467a5ad4ee5b7ec13/OIG.UJtMkuVlIIljWvk3W1.jpg',
      date: '2 May, 2023',
      slug: 'whats-new-in-ecmascript-2023-recomended'
    },
    {
      title: "React Labs: What We've Been Working On – June 2022 (recomended)",
      tag: { color: 'darkBlue', isSmall: false, title: 'reactJs' },
      image: 'http://images.ctfassets.net/wc4oyxpiv5l2/3RXfN46Fk7dZ8Ya3Nn0VVI/bd5a32515f91a5f467a5ad4ee5b7ec13/OIG.UJtMkuVlIIljWvk3W1.jpg',
      date: '2 May, 2023',
      slug: 'whats-new-in-ecmascript-2023-recomended'
    },
    {
      title: "React Labs: What We've Been Working On – June 2022 (recomended)",
      tag: { color: 'darkBlue', isSmall: false, title: 'reactJs' },
      image: 'http://images.ctfassets.net/wc4oyxpiv5l2/3RXfN46Fk7dZ8Ya3Nn0VVI/bd5a32515f91a5f467a5ad4ee5b7ec13/OIG.UJtMkuVlIIljWvk3W1.jpg',
      date: '2 May, 2023',
      slug: 'whats-new-in-ecmascript-2023-recomended'
    }
  ];

  return (
    <section className={styles.profile}>
      <h1>My courses</h1>
      <BottomSeparator {...separatorConfig} />
      <div className={styles.profile__courses}>
        {coursesMockData && coursesMockData.length > 0 &&
          coursesMockData.map((course) => (
            <div key={course.slug}>
              <BlogCard {...course}/>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default withAuth(MyCourses);