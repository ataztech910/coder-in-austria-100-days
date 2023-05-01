import styles from '@/app/ui/molecules/blog-article-list.module.scss';
import BlogArticleListItem from './BlogArticleListItem';
import BottomSeparator from '../atoms/BottomSeparator';

export default function BlogArticleList(blogListData: any) {
    const separatorConfig = {
        isDark: true
    }
    console.log(blogListData);
    
    return(
        <div className={styles.blogArticleList}>
            <h2>Recent posts</h2>
            <BottomSeparator {...separatorConfig} />
            <ul>
                {blogListData?.items?.map((blogItem: any) => {
                    return (
                        <li key={blogItem.url} className='mb-8'>
                            <BlogArticleListItem {...blogItem} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}