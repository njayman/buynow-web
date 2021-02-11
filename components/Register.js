import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register({ setRegistered }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [agree, setAgree] = useState(false);
  const hSubmit = async (values) => {
    setLoading(true);
    try {
      console.log(values);
      const { data } = await axios.post(
        `${process.env.AXIOS_BASE_URL}/user/register`,
        values
      );
      alert(data.message);
      if (data.success) {
        setRegistered(true);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="col-6">
      <form onSubmit={handleSubmit(hSubmit)} style={{ margin: "20px" }}>
        <h1>Create an account</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="fillname">
            What-s your name?
          </label>
          <input
            className="form-control"
            id="fullname"
            type="fullname"
            name="fullname"
            placeholder="Write your full name"
            ref={register}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            placeholder="Write your e-mail"
            ref={register}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Create a password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Create a password"
            ref={register}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I have read and agree the <u>Terms of Use</u> and{" "}
            <u>Privacy Policy</u>.
          </label>
        </div>
        <div className="mb-3">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              className="btn btn-primary"
              style={{ fontWeight: "bold" }}
              disabled={agree}
              type="submit"
            >
              Create Account
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
