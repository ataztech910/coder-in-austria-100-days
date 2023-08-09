import styles from '@/app/profile/profile.module.scss';
import BottomSeparator from "@/app/ui/atoms/BottomSeparator.tsx";
import Input from "@/app/ui/atoms/Input.tsx";
import React from "react";
import Button from "@/app/ui/atoms/Button.tsx";

function Profile() {
  const separatorConfig = {
    isDark: true,
    initial: true
  };
  const inputs: {[key: string]: IInput} = {
    email: {
      title: 'Your email*',
      placeholder: 'youremail@email.com',
      type: 'email'
    },
    name: {
      title: 'Your name',
      placeholder: 'John Doe',
      type: 'text'
    },
    date: {
      title: 'Your birthday',
      placeholder: '30/01/2000',
      type: 'date'
    },
    country: {
      title: 'Your country',
      placeholder: 'Your country',
      type: 'text'
    }
  };


  const button = {
    title: 'Update account',
    type: 'submit'
  };
  
  return (
    <section className={styles.profile}>
      <div className={styles.profile__mycourses}>
        <h1>Profile</h1>
        <BottomSeparator {...separatorConfig} />
        <form action="">
          {
            Object.keys(inputs).map((input: string) => (
              <React.Fragment key={input + Math.random()*100}>
                <Input {...inputs[input]} />
              </React.Fragment>
            ))
          }
          <Button inputParams={button} />
        </form>
      </div>
    </section>
  );
}

export default Profile;