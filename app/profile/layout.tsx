'use client';
import React, { Suspense } from "react";
import PageLayout from '../page-layout';
import ProfileNavigation from "@/app/ui/organisms/ProfileNavigation.tsx";
import Loading from "@/app/profile/loading.tsx";
import withAuth from '@/app/utils/with-auth.hoc.tsx';

function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout>
      <ProfileNavigation />
      <section className='content'>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </section>
    </PageLayout>
  );
}

export default withAuth(Layout);
  