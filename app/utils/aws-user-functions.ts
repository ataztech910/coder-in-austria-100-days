import { ActionCreatorWithPayload, AnyAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { Dispatch } from "react";

const fetchUser = async (hook: ActionCreatorWithPayload<any, "auth/setAuthState">, dispatch: Dispatch<AnyAction>) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log({
      authState: true,
      user: {
        username: user.attributes.email
      }
    });
    dispatch(hook({
      authState: true,
      user: {
        username: user.attributes.email
      }
    }));
    console.log(user);
  } catch (e) {
    dispatch(hook({
      authState: false
    }));
    console.error(e);
  }
    
};

export { fetchUser };