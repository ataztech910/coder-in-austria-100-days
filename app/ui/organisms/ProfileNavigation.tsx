'use client';
import styles from '@/app/ui/organisms/profile-navigation.module.scss';
import React from "react";
import { usePathname } from "next/navigation";
import ProfileNavigationItem from "@/app/ui/molecules/ProfileNavigationItem.tsx";
import { counter } from "@fortawesome/fontawesome-svg-core";

function ProfileNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  
  const navigation = [
    {
      title: "My Courses",
      href: "/profile/mycourses"
    },
    {
      title: "Statistics",
      href: "/profile/statistics"
    },
    {
      title: "Profile",
      href: "/profile"
    }
  ];
  return (
    <section className={styles.profileNavigation}>
      <div className="content">
        <ul>
          {navigation.map((link: {title: string, href: string})=> {
            return (
              <li key={link.href}>
                <ProfileNavigationItem counter={link.href === navigation[0].href ? 5 : null} href={link.href} title={link.title} active={pathname === link.href}/>
              </li>
            );
          })
          }
        </ul>
      </div>
    </section>
  );
}

export default ProfileNavigation;