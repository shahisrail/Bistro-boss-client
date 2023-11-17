/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocalLogin from "../../Components/SocalLogin/SocalLogin";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const capthaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const locatoin = useLocation();

  const from = locatoin.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const haldelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from, { replace: true });
    });
  };
  const handelValidetCapca = (e) => {
    e.preventDefault();
    const user_Captcha_value = capthaRef.current.value;
    console.log(user_Captcha_value);
    if (validateCaptcha(user_Captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full  flex-1 shadow-2xl bg-base-100">
          <form onSubmit={haldelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>

              <input
                ref={capthaRef}
                type="text"
                placeholder="text"
                className="input input-bordered"
                required
                name="captcha "
              />
              <button
                onClick={handelValidetCapca}
                className="btn btn-outline btn-xs mt-5"
              >
                validet
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <SocalLogin ></SocalLogin>
        </div>
        <div className="text-center lg:text-left flex-1 ">
          <img src="https://i.ibb.co/Myz2gKn/authentication1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
