import { useState, useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Head from "next/head";
import MyLayout from "../components/Layout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Auth() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated]);
  const [registered, setRegistered] = useState(false);
  return (
    <MyLayout>
      <Head>
        <title>Create an account or Login | Buynow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row" style={{ margin: "auto" }}>
          {!registered && <Register setRegistered={(s) => setRegistered(s)} />}
          <Login />
        </div>
      </div>
    </MyLayout>
  );
}
