import styles from '@/app/blog/blog.module.scss';
import BlogCard from '../ui/molecules/BlogCard';
import BreadCrumbs from '../ui/atoms/BreadCrumbs';
import BlogArticleList from '../ui/molecules/BlogArticleList';
import BlogNavigation from '../ui/molecules/BlogNavigation';
import { use } from 'react';
import { getPage } from '../utils/contentful';
import { popularBlogContent, recomendedBlogContent, rescentBlogContent } from '../utils/parseContent';

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
}

export default function Blog() {
  const data = use(getPageData());
  // console.log(JSON.stringify(data));
  const recomendedBlogData = recomendedBlogContent(data);
  const rescentBlogData = { items: rescentBlogContent(data) };
  const popularBlogData = popularBlogContent(data);
  
  const blogCard = {
    tag: {
      color: 'red',
      isSmall: false,
      title: 'JS'
    },
    title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
    date: 'Dec 06, 2023',
    image: 'blog_card.png',
    url: '/blog/123'
  };

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
  }

  const blog = {
    items:[
      {
          tag: {
              color: 'red',
              isSmall: false,
              title: 'JS'
          },
          title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
          text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
          date: 'Dec 06, 2023',
          url: '/blog/123',
          image: 'blog_card.png'
      },
      {
          tag: {
              color: 'red',
              isSmall: false,
              title: 'JS'
          },
          title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
          text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
          date: 'Dec 06, 2023',
          url: '/blog/1235',
          image: 'blog_card.png'
      },
      {
          tag: {
              color: 'red',
              isSmall: false,
              title: 'JS'
          },
          title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
          text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
          date: 'Dec 06, 2023',
          url: '/blog/1234',
          image: 'blog_card.png'
      }
  ]
  }

  return (
    <main>
      <div className={`${styles.blog} content`}>
        <BreadCrumbs {...breadCrumbs} />
        <h1>Blog</h1>
        <div className={styles.blog__recomended}>
          <BlogCard {...recomendedBlogData[0]}/>
          <BlogCard {...recomendedBlogData[1]}/>
          <BlogCard {...recomendedBlogData[2]}/>
        </div>

        <div className={styles.blog__blogContent}>
          <div className={styles.blog__blogContent__left}>
            <BlogArticleList {...rescentBlogData} />
          </div>
          <div className={styles.blog__blogContent__right}>
            <BlogNavigation {...blogNavigation} />
          </div>
        </div>
      </div>
    </main>
  )
}