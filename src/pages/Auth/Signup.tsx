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
      <div className="bg-white w-screen h-screen flex justify-center my-20">
        <div className="w-full max-w-md px-4 md:px-0">
          <p className="text-3xl font-semibold text-[#000000] my-5">
            Create Your Account
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidation}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <div className="flex flex-col justify-center text-start gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#1C1C1C] text-sm font-medium"
                    >
                      Full Name
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 w-full px-4 h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
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
                      htmlFor="name"
                      className="text-[#1C1C1C] font-medium text-sm"
                    >
                      Email
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 w-full px-4 h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
                      type="email"
                      name="email"
                      placeholder="Olivia@gmail.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#1C1C1C] font-medium text-sm"
                    >
                      Password
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 w-full px-4 h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
                      type="password"
                      name="password"
                      placeholder="8+ Charaters"
                    />
                    {errors.password && (
                      <span className="text-xs text-red-500">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#1C1C1C] text-sm font-medium"
                    >
                      Confirm Password
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 w-full px-4 h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder margin-placeholder rounded-md"
                      type="password"
                      name="cpassword"
                      placeholder="8+ Charaters"
                    />
                    {errors.cpassword && (
                      <span className="text-xs text-red-500">
                        {errors.cpassword}
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex text-center items-center justify-center font-semibold w-full text-[#fff] cursor-pointer text-sm bg-[#016FED] h-[40px] rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row w-full items-center gap-2 text-center justify-center outline outline-1 font-semibold cursor-pointer text-[#016FED] text-sm bg-[#fff] h-[40px] rounded-md"
                    >
                      <Google />
                      Continue with Google
                    </button>
                  </div>
                  <p className="flex justify-center text-center font-normal text-sm text-[#666666]">
                    Already have an account?{" "}
                    <Link to="/login" className="underline ml-1">
                      Log in
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
