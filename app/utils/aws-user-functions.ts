import { Auth } from "aws-amplify";
import { Dispatch, SetStateAction } from "react";

const fetchUser = async (hook:  Dispatch<SetStateAction<any>>) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      hook({username: user.signInUserSession?.idToken.payload.email});
      console.log(user);
    } catch(e) {
      hook({username: ""});
      console.error(e);
    }
    
}

export { fetchUser }