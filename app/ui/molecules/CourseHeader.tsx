import styles from '@/app/ui/molecules/course-header.module.scss';

export default function CourseHeader(header: IHeaderData) {
    const bannerStyle = {backgroundImage: `url(https:${header.image})`, backgroundSize: 'cover' };
    return(
        <div style={bannerStyle}>
            <div data-testid="courseBaner" className='content' >
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