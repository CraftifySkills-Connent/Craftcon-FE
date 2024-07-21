import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { AuthNavbar, Button, CustomButton, TextInput } from "../../components";
import { ReactComponent as Google } from "../../assets/images/google.svg";

import { loginValidation } from "../../utils/schema";
import { LoginDto } from "../../interfaces";
import { useAppDispatch } from "../../hooks";
import { login } from "../../redux/slices/userSlice";

import axios from "axios";

const initialValues: LoginDto = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: LoginDto) => {
    try {
      const response = await axios.post("/api/signup", values); // Update with your actual API endpoint
      dispatch(login(response.data)); // Assuming your login action updates the Redux state
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <AuthNavbar className="text-black" to="/signup">
        <Button
          className="text-[rgb(252,252,253)] bg-[#0158D8] outline outline-1 w-[92px] h-[42px] rounded-md px-2 text-[16px] font-semibold"
          label="Sign up"
        />
      </AuthNavbar>
      <div className="bg-white w-screen h-screen flex justify-center items-center">
        <div className="w-full max-w-md px-4 md:px-0">
          <p className="text-3xl font-semibold text-[#000000] my-5 text-center md:text-left">
            Login
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="flex flex-col justify-center text-start gap-8">
                  <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Olivia@gmail.com"
                    htmlFor="email"
                  />
                  <TextInput
                    htmlFor="password"
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="8+ Characters"
                  />
                  <div className="flex justify-end text-[#000000] text-sm font-normal underline">
                    <Link to="/forgotPassword">Forgot password?</Link>
                  </div>
                  <div>
                    <CustomButton
                      buttonText="Continue"
                      variant="contained"
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
                    Don't have an account?{" "}
                    <Link to="/signup" className="underline ml-1">
                      Sign up
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

export default Login;
