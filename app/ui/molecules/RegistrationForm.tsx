'use client';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/molecules/registration-form.module.scss';
import { Auth } from 'aws-amplify';
import "../../utils/amplifyConfigure";
import { Authenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from 'react';

export default function RegistrationForm(formParams: any) {
    const [userState, setUserState] = useState(false); 
    const router = useRouter();
    useEffect(() => {
      if (userState) {
        router.push('/profile');
      }
    }, [router, userState]);

    const services = {
        async handleSignUp(formData: any) {
          let { username, password } = formData;
          username = username.toLowerCase();
          return Auth.signUp({
            username,
            password,
            autoSignIn: {
              enabled: true,
            },
          });
        },
        async handleSignIn(formData: any) {
          let { username, password } = formData;
          // custom username
          username = username.toLowerCase();
          const auth = await Auth.signIn(username, password);
          if (auth) {
            setUserState(true);
          }
          return auth;
        }
      };

    return(
        <>
            <div className={styles.registrationForm} data-testid="registration">
                <Authenticator 
                  services={services} 
                  initialState="signIn"
                  >
                    {({ signOut }) => <button onClick={signOut}>Sign out</button>}
                </Authenticator>
            </div>
        </> 
    );
}