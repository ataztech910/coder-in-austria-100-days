import styles from '@/app/ui/molecules/blog-article-list-item.module.scss';
import Tag from '../atoms/Tag';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function BlogArticleListItem(blogCardData: any) {
    return(
        <div className={styles.blogArticleListItem}>
            <div 
                className={styles.blogArticleListItem__image}
                style={{
                    backgroundImage: `url(${blogCardData.image})`
                }}
            >
                <div className={styles.blogArticleListItem__tag}>
                    <Tag {...blogCardData.tag}/>
                </div>
            </div>

            <div className={styles.blogArticleListItem__article}>
                <div className={styles.blogArticleListItem__article__title}>
                    <Link href={`/blog/${blogCardData.slug}`}>
                        {blogCardData.title}
                    </Link>
                </div>
                <div className={styles.blogArticleListItem__article__date}>{blogCardData.date}</div>
                <div className={styles.blogArticleListItem__article__text}>{blogCardData.text}...</div>
                <div className={styles.blogArticleListItem__article__readMore}>
                    <Link href={`/blog/${blogCardData.slug}`} tabIndex={-1}>
                        Read more
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="fa fa-angles-right ml-2" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    );
}