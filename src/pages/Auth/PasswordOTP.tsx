import React, { useRef, useState } from "react";
import { AuthNavbar, Button } from "../../components";

const PasswordOTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length === 1 && index < 5) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      refs.current[index - 1]?.focus();
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
            Enter a code
          </p>
          <p className="text-[14.43px] font-normal text-[#667085]">
            We have sent a code to you
          </p>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex justify-between items-start mt-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (refs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  className="w-12 h-12 mx-1 text-center border outline-2 focus:outline-[#016FED] rounded-md text-secondaryGray leading-tight focus:outline-none focus:shadow-outline"
                />
              ))}
            </div>
            
              <button
                type="submit"
                className="flex text-center items-center justify-center font-semibold w-full text-[#fff] cursor-pointer text-sm bg-[#016FED] h-[40px] rounded-md"
              >
                Next
              </button>
            <div className="flex flex-col gap-2 items-center justify-center">
                <small className="text-[12px] font-normal text-[#333333]">Didn’t receive anything? Resend code(32) or Call me instead </small>
                <small className="text-[12px] font-normal text-[#333333]">Unable to verify? Reset </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordOTP;
