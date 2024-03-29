'use client';
import { usePathname, useRouter } from 'next/navigation';
import styles from '@/app/ui/molecules/registration-form.module.scss';
import { Auth } from 'aws-amplify';
import "../../utils/amplifyConfigure";
import { Authenticator } from "@aws-amplify/ui-react";
import { setAuthState } from '@/app/store/slices/authSlice';
import { useDispatch } from 'react-redux';

type FormTabType = 'signIn' | 'signUp' | 'resetPassword' | undefined;
enum FormRouterPath {
  signin = 'signIn',
  signup = 'signUp',
  resetpassword = 'resetPassword'
}

export default function RegistrationForm(formatParams: Partial<any>) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const currentRoute = pathname.split('/')[2] as keyof typeof FormRouterPath;
  const currentTabSelection = FormRouterPath[currentRoute] as FormTabType;

  const services = {
    async handleSignUp(formData: any) {
      // eslint-disable-next-line prefer-const
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
      // eslint-disable-next-line prefer-const
      let { username, password } = formData;
      // custom username
      username = username.toLowerCase();
      const auth = await Auth.signIn(username, password);
      if (auth) {
        dispatch(setAuthState({
          authState: true,
          user: {
            username: auth.attributes.email
          }
        }));
        router.push('/profile');
      }
      return auth;
    }
  };

  const wrapSignOut = (signout?: (() => void)) => {
    dispatch(setAuthState({ authState: false }));
    if (signout) signout();
  };  

  return (
    <>
      <div className={styles.registrationForm} data-testid="registration">
        <Authenticator 
          services={services} 
          initialState={currentTabSelection}
        >
          {({ signOut }) => 
            <div className={styles.registrationForm__singnout}>
              <button onClick={() => wrapSignOut(signOut)}>Sign out</button>
            </div> 
                    
          }
        </Authenticator>
      </div>
    </> 
  );
}