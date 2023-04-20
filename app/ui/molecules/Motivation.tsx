import styles from '@/app/ui/molecules/motivation.module.scss';
import Card from '../atoms/Card';

export default function Motivation() {
    const cards: Array<ICard> = [
        {
            imageUrl: [
                'card_1.png',
                'card.png'
            ],
            title: 'Build as team',
            description: 'Work as team with your mentor to achieve your personmal goal'
        }
    ];
    return(
        <div className={styles.motivation}>
            <div className='content'>
                <h3>Turn yout motivation into colloboration</h3>
                <div className={styles.motivation__cards}>
                    <Card {...cards[0]} />
                    <Card {...cards[0]} />
                    <Card {...cards[0]} />
                </div>
            </div>
        </div>
    );
}