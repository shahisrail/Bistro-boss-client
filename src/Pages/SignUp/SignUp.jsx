/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseaxioxPulic from "../../hooks/UseaxioxPulic";
import axios from "axios";
import SocalLogin from "../../Components/SocalLogin/SocalLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const axiosPublic = UseaxioxPulic();
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      userProfileUpdate(data.name, data.photoURL).then(() => {
        // post this user data in mongoDB
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users",userInfo)
          .then((res) => {
          if (res.data.insertedId) {
            console.log("user profile updated");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });
    });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full  flex-1 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo url</span>
              </label>
              <input
                type="text"
                placeholder="Photo URl"
                className="input input-bordered"
                required
                name="photoURL"
                {...register("photoURL", { required: true })}
              />
              {errors.Name && (
                <span className="text-red-700">Name is required</span>
              )}
            </div>
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700">Email is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-700">First name is required</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <SocalLogin></SocalLogin>
        </div>
        <div className="text-center lg:text-left flex-1 ">
          <img src="https://i.ibb.co/Myz2gKn/authentication1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
