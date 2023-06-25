import styles from '@/app/ui/molecules/empower.module.scss';

export default function Empower(empowerData: any) {
  return (
    <div className={styles.empower} data-testid="empowerLayout">
      <div className='content block xl:flex p-5 xl:p-0'>
        <div className={styles.empower__image}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={`https:${empowerData?.fields?.imageForDesktop.fields.file.url}`} width='100%' />
            <img loading="lazy" src={`https:${empowerData?.fields?.imageForMobile.fields.file.url}`} width='100%' alt='Empower'/>
          </picture>
        </div>
        <div className={styles.empower__text}>
          <h4>{empowerData?.fields?.title}</h4>
          <p>{empowerData?.fields?.description.content[0].content[0].value}</p>
          <hr />
          <div className={styles.empower__text__bullets}>
            <ul>
              {
                empowerData?.fields?.bullets.map((item: any) => {
                  return (
                    <li key={`bullet-${Math.floor(Math.random() * 1000)}`}>
                      <div className={styles.empower__text__bullets__icon}></div>
                      <div className={styles.empower__text__bullets__text}>
                        <h5>{item.fields.title}</h5>
                        <p>{item.fields.description.content[0].content[0].value}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
            <hr />
            <p className={styles.empower__text__underlineText}>
              {empowerData?.fields?.afterListText?.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}