import PageLayout from '../page-layout';
import React from "react";
import ProfileNavigation from "@/app/ui/organisms/ProfileNavigation.tsx";

function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout>
      <ProfileNavigation />
      <section className='content'>
        {children}
      </section>
    </PageLayout>
  );
}

export default Layout;