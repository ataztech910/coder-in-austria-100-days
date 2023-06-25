import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectAuthState} from "@/app/store/slices/authSlice";
import {useRouter} from "next/navigation";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithAuth: React.FC<P> = (props: any) => {

        const authState = useSelector(selectAuthState);
        const router = useRouter();

        useEffect(() => {
            if(!authState?.user) {
                router.push('/auth/signin');
            }
        }, [authState, router]);

        return <WrappedComponent {...props} />;
    }
        return ComponentWithAuth;
}

export default withAuth;