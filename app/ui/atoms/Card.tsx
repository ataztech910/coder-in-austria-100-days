import styles from '@/app/ui/atoms/card.module.scss';
import Image from 'next/image';

export default function Card(cardData: ICard) {
    return(
        <div className={styles.card}>
            <picture>
                <source media="(min-width: 1280px)" srcSet={cardData.imageUrl[0]} width='100%' />
                <img loading="lazy" src={cardData.imageUrl[1]} width='100%' />
            </picture>
            <div className={styles.card__title}>{cardData.title}</div>
            <div className={styles.card__description}>{cardData.description}</div>
        </div>
    );
}