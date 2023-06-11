import styles from '@/app/ui/molecules/motivation.module.scss';
import Card from '../atoms/Card';

export default function Motivation(cards: any) {
    return(
        <div className={styles.motivation} data-testid="motivationLayout">
            <div className='content'>
                <h3>{cards?.fields?.title}</h3>
                <div className={styles.motivation__cards}>
                    {
                        cards?.fields?.cards?.map((card: any) => 
                            <div key={`card-${Math.floor(Math.random() * 1000)}`} ><Card {...card.fields} /></div>)
                    }
                </div>
            </div>
        </div>
    );
}