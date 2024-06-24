import { Formik, Form, Field } from "formik";
import React from "react";
import { AuthNavbar } from "../../components";
import { Link } from "react-router-dom";
import { forgotPasswordValidation } from "../../utils/schema";
import { ForgotPasswordDto } from "../../interfaces";
import { useAppDispatch } from "../../hooks";
import axios from "axios";
import { login } from "../../redux/slices/userSlice";
import { Button } from "../../components";

const initialValues: ForgotPasswordDto = {
  email: "",
};

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: ForgotPasswordDto) => {
    try {
      const response = await axios.post("/api/forgot-password", values);
      dispatch(login(response.data));
    } catch (error) {
      console.error("Error during forgot password:", error);
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
      <div className="bg-white w-screen h-screen flex justify-center my-20">
        <div className="w-full max-w-md px-4 md:px-0">
          <p className="text-3xl font-semibold text-[#000000] my-5">
            Forgot Password?
          </p>
          <p className="text-[14.43px] font-normal text-[#667085]">
            Enter the email address you used when you joined and
            <br /> we’ll send you instructions to reset your password.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={forgotPasswordValidation}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <div className="flex flex-col justify-center text-start gap-4 mt-10">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#1C1C1C] text-sm font-medium"
                    >
                      Email
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 px-4 w-full h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
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
                  <div>
                    <button
                      type="submit"
                      className="flex text-center items-center justify-center font-semibold w-full text-[#fff] cursor-pointer text-sm bg-[#016FED] h-[40px] rounded-md"
                    >
                      Reset password
                    </button>
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

export default ForgotPassword;
