'use client';
import PageLayout from '../page-layout';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../store/slices/authSlice';
import withAuth from "@/app/utils/with-auth.hoc";

function Profile() {
  const authState = useSelector(selectAuthState);

  return (
        <>
          {authState?.user &&
            <PageLayout>
              <main>
                  <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                      Welcome, {authState?.user?.username}
                  </h1>

              </main>
            </PageLayout>
          }
        </>
  )
}

export default withAuth(Profile);