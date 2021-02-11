import { useEffect } from "react";
import MyLayout from "../components/Layout";
import { useRouter } from "next/router";

export default function Profile({ isAuthenticated }) {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);
  return <MyLayout></MyLayout>;
}
