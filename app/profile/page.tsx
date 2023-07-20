'use client';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../store/slices/authSlice';
import withAuth from '@/app/utils/with-auth.hoc.tsx';

function Profile() {
  const authState = useSelector(selectAuthState);

  return (
    <>
      {authState?.user &&
              <p>
                Profile page
              </p>
      }
    </>
  );
}

export default withAuth(Profile);