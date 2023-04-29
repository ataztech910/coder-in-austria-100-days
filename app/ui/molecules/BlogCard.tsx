import styles from '@/app/ui/molecules/blog-card.module.scss';
import Tag from '../atoms/Tag';
import Link from 'next/link';

export default function BlogCard(blogCardData: any) {
    return(
        <Link href={blogCardData.url}
            className={styles.blogCard}
            style={{
                backgroundImage: `url(${blogCardData.image})`
            }}
        >
            <div className={styles.blogCard__tag}>
                <Tag {...blogCardData.tag}/>
            </div>
            <div className={styles.blogCard__title}>
                <div className={styles.blogCard__title__text}>{blogCardData.title}</div>
                <div className={styles.blogCard__title__date}>{blogCardData.date}</div>
            </div>
        </Link>
    );
}