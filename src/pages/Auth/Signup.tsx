import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { AuthNavbar, Button, CustomButton, TextInput } from "../../components";
import { ReactComponent as Google } from "../../assets/images/google.svg";

import { signupValidation } from "../../utils/schema";
import { SignupDto } from "../../interfaces";
import { useAppDispatch } from "../../hooks";
import { login } from "../../redux/slices/userSlice";

import axios from "axios";

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
            {() => (
              <Form>
                <div className="flex flex-col justify-center text-start gap-4">
                  <TextInput
                    label="Full Name"
                    name="fullName"
                    type="text"
                    htmlFor="name"
                    placeholder="Olivia Emmanuell"
                  />
                  <TextInput
                    label="Email"
                    htmlFor="email"
                    type="email"
                    name="email"
                    placeholder="Olivia@gmail.com"
                  />

                  <TextInput
                    label="Password"
                    htmlFor="password"
                    name="password"
                    type="password"
                    placeholder="8+ Charaters"
                  />
                  <TextInput
                    htmlFor="password"
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    placeholder="8+ Charaters"
                  />
                  <div>
                    <CustomButton
                      variant="contained"
                      buttonText="Submit"
                      type="submit"
                      className="flex text-center items-center justify-center font-semibold w-full text-[#fff] cursor-pointer text-sm bg-[#016FED] h-[40px] rounded-md"
                    />
                  </div>
                  <div>
                    <CustomButton
                      buttonText="Continue with Google"
                      variant="outlined"
                      type="button"
                      startIcon={<Google />}
                      className="flex flex-row w-full items-center gap-2 text-center justify-center outline outline-1 font-semibold cursor-pointer text-[#016FED] text-sm bg-[#fff] h-[40px] rounded-md"
                    />
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
