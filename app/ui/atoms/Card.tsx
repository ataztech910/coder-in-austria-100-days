import styles from '@/app/ui/atoms/card.module.scss';

export default function Card(cardData: any) {
  return (
    <div className={styles.card}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={`https:${cardData.cardImages[1].fields.file.url}`} width='100%' />
        <img loading="lazy" src={`https:${cardData.cardImages[0].fields.file.url}`} width='100%' alt={cardData.title} />
      </picture>
      <div className={styles.card__title}>{cardData.title}</div>
      <div className={styles.card__description}>{cardData.description.content[0].content[0].value}</div>
    </div>
  );
}