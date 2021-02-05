import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
export default function SellerLogin() {
  const { register, handleSubmit } = useForm();
  const hSubmit = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.AXIOS_BASE_URL}/seller/login`,
        values
      );

      alert(`successfully logged in token = ${data.token}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Seller Login | Buynow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <form onSubmit={handleSubmit(hSubmit)}>
        <h1>Seller Login here</h1>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={register} required />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={register}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <p>
            Already have an account?{" "}
            <Link href="/seller/register">Regester here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
