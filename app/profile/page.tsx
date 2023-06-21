'use client';
import PageLayout from '../page-layout';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { selectAuthState } from '../store/slices/authSlice';
import { useEffect } from 'react';

function Profile(context: any) {
  const authState = useSelector(selectAuthState);
  const router = useRouter();
  
  useEffect(() => {
    if(!authState?.user) {
      router.push('/auth/signin');
    }
  }, [authState, router]);

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


export default Profile;