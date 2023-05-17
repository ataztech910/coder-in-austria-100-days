import styles from '@/app/ui/molecules/course-header.module.scss';

export default function CourseHeader(header: IHeaderData) {
    return(
        <div 
            style={{
                backgroundImage: `url(https:${header.image})`,
                backgroundSize: 'cover'
            }}
        >
        <div 
            data-testid="courseBaner"
            className='content'
        >
        <div className={styles.courseHeader}>
            <div>
                <h1>{header?.title}</h1>
                <button>Start course</button>
            </div>
        </div>
        </div>
    </div>
    );
}