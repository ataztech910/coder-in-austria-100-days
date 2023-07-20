import React from "react";
import Link from "next/link";
import styles from '@/app/ui/organisms/profile-navigation.module.scss';

function ProfileNavigationItem(link: {title: string, href: string, active: boolean, counter?: number | null}) {
  const CounterContainer = () => (
    link.counter !== null ?
      <div className={styles.navLinkWrapper__counter}>{link.counter}</div> : <></>
  );

  return (
    <div className={styles.navLinkWrapper}>
      <CounterContainer />
      <Link className={`${styles.navLinkWrapper__navLink} ${link.active ? styles['navLinkWrapper__navLink--active']: ''}`} href={link.href} title={link.title}>{link.title}</Link>
    </div>
  );
}

export default ProfileNavigationItem;