'use client';
import PageLayout from '../page-layout';
import { Auth } from 'aws-amplify';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from "next/navigation";
import { fetchUser } from "../utils/aws-user-functions";

function Profile(context: any) {
  const [user, setUser] = useState({username: ""});
  const router = useRouter();
  
  useEffect(() => {
    fetchUser(setUser).catch(() => {
      setUser({username: ""})
      router.push('/auth/signin');
    });
  }, [router]);

  return (
        <PageLayout>
          <main>
            {user?.username !== "" && 
              <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                  Welcome, {user?.username}
              </h1>
            }
          </main>
        </PageLayout>
  )
}


export default Profile;