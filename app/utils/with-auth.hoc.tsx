import React from "react";
import { useAuthCustom } from "@/app/utils/hooks.ts";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAuth: React.FC<P> = (props: any) => {
    useAuthCustom();

    return <WrappedComponent {...props} />;
  };
  return ComponentWithAuth;
};

export default withAuth;