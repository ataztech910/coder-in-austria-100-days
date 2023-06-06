'use client';
import "../utils/amplifyConfigure";
import PageLayout from '../page-layout';
import { Auth } from 'aws-amplify';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from "next/navigation";

function Profile(context: any) {
  const [user, setUser] = useState({username: ""})
  const router = useRouter();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser({username: user.username});
        console.log(user);
      } catch(e) {
        console.error(e);
      }
      
    }

    fetchUser().catch(() => {
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