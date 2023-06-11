import styles from '@/app/blog/[slug]/blog-item.module.scss';
import BreadCrumbs from "@/app/ui/atoms/BreadCrumbs";
import BlogNavigation from '@/app/ui/molecules/BlogNavigation';
import { getPage } from "@/app/utils/contentful";
import { popularBlogContent } from '@/app/utils/parseContent';
import { use } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import BottomSeparator from '@/app/ui/atoms/BottomSeparator';
import PageLayout from '@/app/page-layout';

const renderOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
            </a>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }
  
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
  
      // eslint-disable-next-line react/display-name
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };

async function getPageData(slug: string) {
    return await getPage({
     pageContentType: 'blogItem',
     locale: 'en-US',
     limit: 1000,
     slug
   }, false);
}

async function getBlogData() {
    return await getPage({
     pageContentType: 'blogItem',
     locale: 'en-US',
     limit: 1000
   }, false);
}

export async function generateMetadata({ params }: any) {
  const blogPage = await getPageData(params.slug);
  return { title: `Coder in Austria | ${blogPage[0].fields.title}` };
}

export default function BlogItem(props: IPageProps) {
    const data = use(getPageData(props.params.slug));
    const blogData = use(getBlogData());
    const popularBlogData = popularBlogContent(blogData);
    const date = new Date(data[0].sys.updatedAt);
    const [month, year] = [
        date.getDate(),
        date.getFullYear(),
    ];

    const breadCrumbs = {
        items: [
          {
            title: 'Home',
            isLast: false,
            url: '/'
          },
          {
            title: 'Blog',
            url: '/blog',
            isLast: false,
          },
          {
            title: data[0]?.fields?.title,
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
    const separatorConfig = {
        isDark: true,
        initial: true
    };

    return (
      <PageLayout>
        <main>
          <div className={`${styles.blogItem} content !mt-8`}>
              <div className={styles.blogItem__left}>
                  <BreadCrumbs {...breadCrumbs} />
                  <h1>{data[0].fields.title}</h1>
                  <div className={styles.blogItem__left__date}>
                      {`${month} ${date.toLocaleString('default', { month: 'short' })}, ${year}`}
                  </div>
                  <BottomSeparator {...separatorConfig} />
                  <div className={styles.blogItem__left__image} style={{
                      backgroundImage: `url(https:${data[0]?.fields?.topImage?.fields?.file?.url})`
                  }}>
                  </div>
                  <div className={styles.blogItem__left__content}>
                      {documentToReactComponents(data[0].fields.blogText, renderOptions)}
                  </div>
              </div>
              <div className={styles.blogItem__right}>
                  <div className={styles.blogItem__right__navigation}>
                          <BlogNavigation {...blogNavigation} />
                  </div>
              </div>
          </div>
          </main>
        </PageLayout>
    );
}