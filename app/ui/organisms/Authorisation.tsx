import styles from '@/app/ui/organisms/authorisation.module.scss';
import Logo from '../atoms/Logo';
import Image from 'next/image';
import RegistrationForm from '../molecules/RegistrationForm';

export default function Authorisation(pageParams: any) {
  const formParams = {
    header: pageParams.type ? 'Sign In' : 'Sign Up',
    type: pageParams.type,
    buttontitle: pageParams.type ? 'Sign In' : 'Sign Up',
    showNavigation: {
      show: true,
      navType: pageParams.type
    }
  };
  return (
    <div className={styles.authorisation}>
      <div className={styles.authorisation__middleBlock}>
        <div className={styles.authorisation__middleBlock__left}>
          <Logo isResponsive={false} />
          <h1>Discover new product and best possibilities</h1>
          <p>Coder in Austria it is a unique product to learn programming languages with explicit help of real mentors on demand</p>
          <Image
            className={styles.authorisation__middleBlock__left__image}
            src="/people.png"
            alt="Coder in Austria"
            width={437}
            height={287} />
        </div>
        <div className={styles.authorisation__middleBlock__right}>
          <RegistrationForm {...formParams} />
        </div>
      </div>
    </div>
  );
}