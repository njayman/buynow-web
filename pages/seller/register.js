import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import axios from "axios";
export default function RegisterSeller() {
  const { register, handleSubmit } = useForm();
  const hSubmit = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.AXIOS_BASE_URL}/seller/register`,
        values
      );
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Head>
        <title>Seller Register | Buynow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <form onSubmit={handleSubmit(hSubmit)}>
        <h1>Seller Register here</h1>
        <div className="control">
          <label htmlFor="fillname">Fullname</label>
          <input
            id="fullname"
            type="fullname"
            name="fullname"
            ref={register}
            required
          />
        </div>
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
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <Link href="/seller/login">Login here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
