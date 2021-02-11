import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import setCurrentUser from "../redux/actions/userAction";
export default function Login({ login }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const hSubmit = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.AXIOS_BASE_URL}/user/login`,
        values
      );
      if (data.success) {
        var decoded = JSON.stringify(jwt_decode(data.token));
        localStorage.setItem("user", decoded);
        dispatch(setCurrentUser(decoded));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="col-6">
      <form onSubmit={handleSubmit(hSubmit)} style={{ margin: "20px" }}>
        <h1>Sign in</h1>
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
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={register}
            required
          />
        </div>
        <div className="mb-3">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              className="btn"
              style={{ fontWeight: "bold" }}
              type="submit"
            >
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
