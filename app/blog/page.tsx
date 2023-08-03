import styles from '@/app/blog/blog.module.scss';
import BlogCard from '../ui/molecules/BlogCard';
import BreadCrumbs from '../ui/atoms/BreadCrumbs';
import BlogArticleList from '../ui/molecules/BlogArticleList';
import BlogNavigation from '../ui/molecules/BlogNavigation';
import { use } from 'react';
import { getPage } from '../utils/contentful';
import { popularBlogContent, recommendedBlogContent, rescentBlogContent } from '../utils/parseContent';
import PageLayout from '../page-layout';

async function getPageData () {
  return await getPage({
    pageContentType: 'blogItem',
    locale: 'en-US',
    limit: 1000
  }, false);
}

export const metadata = {
  title: 'Coder in Austria | Blog',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function Blog() {
  const data = use && use(getPageData());
  const recommendedBlogData = data && recommendedBlogContent(data);
  const recentBlogData = data && { items: rescentBlogContent(data) };
  const popularBlogData = data && popularBlogContent(data);

  const breadCrumbs = {
    items: [
      {
        title: 'Home',
        isLast: false,
        url: '/'
      },
      {
        title: 'Blog',
        isLast: true
      }
    ]
  };

  const blogNavigation = {
    popularBlogs: popularBlogData,
    categories: [
      {
        title: 'Programming',
        url: 'blog/category/programming'
      },
      {
        title: 'Traveling',
        url: 'blog/category/traveling'
      },
      {
        title: 'Lifestyle',
        url: 'blog/category/lifestyle'
      }
    ],
    tags: [
      {
        title: 'JS',
        url: '/blog/tags/JS',
        color: 'red',
        isSmall: true
      },
      {
        title: 'Python',
        url: '/blog/tags/Python',
        color: 'middleBlue',
        isSmall: true
      },
      {
        title: 'ReactJS',
        url: '/blog/tags/ReactJS',
        color: 'darkBlue',
        isSmall: true
      }
    ]
  };

  return (
    <PageLayout>
      <main>
        <div className={`${styles.blog} content`}>
          <BreadCrumbs {...breadCrumbs} />
          <h1>Blog</h1>
          {data && 
          <>
            <div className={styles.blog__recomended}>
              <BlogCard {...recommendedBlogData[0]}/>
              <BlogCard {...recommendedBlogData[1]}/>
              <BlogCard {...recommendedBlogData[2]}/>
            </div>

            <div className={styles.blog__blogContent}>
              <div className={styles.blog__blogContent__left}>
                <BlogArticleList {...recentBlogData} />
              </div>
              <div className={styles.blog__blogContent__right}>
                <BlogNavigation {...blogNavigation} />
              </div>
            </div>
          </>
          }
        </div>
      </main>
    </PageLayout>
  );
}