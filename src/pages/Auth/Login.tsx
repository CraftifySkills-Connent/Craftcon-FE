import { Formik, Form, Field } from "formik";
import React from "react";
import { AuthNavbar } from "../../components";
import { ReactComponent as Google } from "../../assets/img/google.svg";
import { Link } from "react-router-dom";
import { loginValidation } from "../../utils/schema";
import { LoginDto } from "../../interfaces";
import { useAppDispatch } from "../../hooks";
import axios from "axios";
import { login } from "../../redux/slices/userSlice";
import { Button } from "../../components";

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
      <div className="bg-white w-screen h-screen flex justify-center my-14">
        <div className="w-[400px] h-full flex flex-col">
          <p className="text-3xl font-semibold text-[#000000] my-5">Login</p>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <div className="flex flex-col justify-center text-start gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#1C1C1C] font-medium text-sm"
                    >
                      Email
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 px-4 w-[400px] h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
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
                      className="text-[#1C1C1C] text-sm font-medium"
                    >
                      Password
                    </label>
                    <Field
                      className="outline outline-1 outline-gray-200 px-4 w-[400px] h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
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
                  <div className="flex justify-end text-[#000000] text-sm font-normal underline">
                    <Link to="/forgotPassword">Forgot password?</Link>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex text-center items-center justify-center font-semibold w-[400px] text-[#fff] cursor-pointer text-sm bg-[#016FED] h-[40px] rounded-md"
                    >
                      Continue
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row w-[400px] items-center gap-2 text-center justify-center outline outline-1 font-semibold cursor-pointer text-[#016FED] text-sm bg-[#fff] h-[40px] rounded-md"
                    >
                      <Google />
                      Continue with Google
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

export default Login;
