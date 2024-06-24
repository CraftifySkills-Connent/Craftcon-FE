import { Formik, Form, Field } from "formik";
import React from "react";
import { AuthNavbar } from "../../components";
import { ReactComponent as Google } from "../../assets/img/google.svg";
import { Link } from "react-router-dom";
import { signupValidation } from "../../utils/schema";
import { SignupDto } from "../../interfaces";
import { useAppDispatch } from "../../hooks";
import axios from "axios";
import { login } from "../../redux/slices/userSlice";
import { Button } from "../../components";

const initialValues: SignupDto = {
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
};

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: SignupDto) => {
    try {
      const response = await axios.post("/api/signup", values);
      dispatch(login(response.data));
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <AuthNavbar className="text-black" to="/login">
        <Button
          className="text-[#0158D8] outline outline-1 w-[92px] h-[42px] rounded-md px-2 text-[16px] font-semibold"
          label="Sign in"
        />
      </AuthNavbar>
      <div className="bg-white min-h-screen flex justify-center items-center px-4">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-semibold text-[#000000] mb-5 text-center">
            Create Your Account
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidation}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-[#1C1C1C] text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <Field
                    className="input-field"
                    type="text"
                    name="fullName"
                    placeholder="Olivia Emmanuell"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500">
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#1C1C1C] text-sm font-medium"
                  >
                    Email
                  </label>
                  <Field
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Olivia@gmail.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-[#1C1C1C] text-sm font-medium"
                  >
                    Password
                  </label>
                  <Field
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="8+ Characters"
                  />
                  {errors.password && (
                    <span className="text-xs text-red-500">
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cpassword"
                    className="text-[#1C1C1C] text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <Field
                    className="input-field"
                    type="password"
                    name="cpassword"
                    placeholder="8+ Characters"
                  />
                  {errors.cpassword && (
                    <span className="text-xs text-red-500">
                      {errors.cpassword}
                    </span>
                  )}
                </div>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
                <button type="button" className="btn-secondary">
                  <Google className="mr-2" />
                  Continue with Google
                </button>
                <p className="text-center text-sm text-[#666666]">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Log in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
