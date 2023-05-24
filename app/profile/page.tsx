'use client';
import "../utils/amplifyConfigure";
import PageLayout from '../page-layout';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

function Profile(context: any) {
  const [user, setUser] = useState({username: ""})
  const router = useRouter();
  
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        setUser({username: ""});
        router.push('/auth/signin');
      });
  }, [])

  return (
    <main>
        <PageLayout>
          {user && 
            <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                Welcome, {user?.username}
            </h1>
          } 
        </PageLayout>
    </main>
  )
}


export default Profile;