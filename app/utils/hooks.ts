'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/app/store/slices/authSlice.ts";

function useAuthCustom() {
  const authState = useSelector(selectAuthState);
  const router = useRouter();

  useEffect(() => {
    if (!authState?.user) {
      router.push('/auth/signin');
    }
  }, [authState, router]);
}

export { useAuthCustom };