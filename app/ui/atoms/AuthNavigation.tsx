import styles from '@/app/ui/atoms/auth-navigation.module.scss';
import Link from 'next/link';

export default function AuthNavigation({ navConfig }: any) {
  return (
    <>
      { navConfig.navType &&
                <div className={styles.authNavigation}>
                    New here ? <Link href="/auth/registration">Create an account</Link>
                </div>
      }
      { !navConfig.navType &&
                <div className={styles.authNavigation}>
                    Already have an account ? <Link href="/auth/signin">Sign in</Link>
                </div>
      }
    </>
  );
}