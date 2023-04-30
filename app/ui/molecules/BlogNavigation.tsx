import styles from '@/app/ui/molecules/blog-navigation.module.scss';
import BottomSeparator from '../atoms/BottomSeparator';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Tag from '../atoms/Tag';

export default function BlogNavigation(blogNavigationData: any) {
    const separatorConfig = {
        isDark: true,
        initial: true
    };

    return(
        <div className={styles.blogNavigation}>
            <div className={styles.blogNavigation__popular}>
                <h2>Popular posts</h2>
                <BottomSeparator {...separatorConfig} />
                <ul className={styles.blogNavigation__popular__list}>
                    { blogNavigationData?.popularBlogs?.map((item: any) => {
                        return (
                            <li key={item.id}>
                                <Link href={item.url} className={styles.blogNavigation__popular__list__item}>
                                    <div className={styles.blogNavigation__popular__list__item__image}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={80}
                                                height={60} />
                                    </div>
                                    <div className={styles.blogNavigation__popular__list__item__text}>
                                        <div className={styles.blogNavigation__popular__list__item__text__title}>{item.title}</div>
                                        <div className={styles.blogNavigation__popular__list__item__text__date}>{item.date}</div>
                                    </div>
                                </Link>
                            </li>
                        )
                      })
                    }
                </ul>
            </div>
            <div className={styles.blogNavigation__categories}>
                <h2>Categories</h2>
                <BottomSeparator {...separatorConfig} />
                <ul>
                    { blogNavigationData?.categories.map((category: any) => {
                        return (
                            <li key={category.url} className={styles.blogNavigation__categories__item}>
                                <FontAwesomeIcon icon={faAngleRight} className="fa fa-angle-right mr-2" color="black" />
                                <Link className={styles.blogNavigation__categories__item__link} href={category.url}>{category.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.blogNavigation__tags}>
                <h2>Tags</h2>
                <BottomSeparator {...separatorConfig} />
                <ul>
                    {
                        blogNavigationData?.tags.map((tagItem: any) => {
                            return (
                                <li key={tagItem.url}>
                                    <Link href={tagItem.url}>
                                        <Tag {...tagItem} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>    
            </div>
        </div>
    );
}