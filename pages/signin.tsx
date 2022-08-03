import React, { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import cn from "clsx";

import useAuth from "components/Auth/useAuth";
import { PrivacyPolicy } from "components/common/PrivacyPolicy";
import linkedinLogo from "images/linkedin.svg";
import { SignupHeader } from "pages/Authentication/SignUpPage";
import { emailRegex, isValidEmail } from "utils";

interface SignInForm {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const { getLinkedinToken, login } = useAuth();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<SignInForm>({
    mode: "all",
  });

  const onSubmit = (e: React.BaseSyntheticEvent) => {
    handleSubmit(
      (data, event) => {
        login(data.email, data.password);
      },
      (e) => {
        // TODO : use this to display relevant error messages using toast
        console.log("handleSubmit error", e);
      }
    )(e);
  };

  return (
    <div className="h-full w-full">
      <div />
      <SignupHeader />
      <div className="grid grid-cols-[1fr,310px,1fr] sm:grid-cols-[1fr,420px,1fr] md:grid-cols-[1fr,472px,1fr]">
        <div />
        <section className="w-full relative pb-[92px]">
          <div className="absolute w-full flex items-center justify-center">
            <img
              className="mt-[58px] block md:hidden w-[132px]"
              src="/icons/dorse_logo.svg"
            />
          </div>
          <h2 className="hidden md:block mt-[209px] font-sora font-[700] text-[31px]">
            Hi, Welcome to dorse!
          </h2>
          <form onSubmit={onSubmit} className="mt-[180px] md:mt-[54px]">
            <h3 className="font-sora font-[700] text-[31px] md:text-[24px] leading-[32px]">
              Sign in
            </h3>
            <div className="mt-[27px] md:mt-3 font-sans">
              <label
                className={cn("text-sm", {
                  "text-errorRed": errors.email,
                })}
              >
                Email Address
              </label>
              <div
                className={cn(
                  "relative border-primary border-b h-[32px] mt-[1px] pr-10",
                  { "border-errorRed": errors.email }
                )}
              >
                <input
                  placeholder="Email"
                  className="bg-transparent placeholder-opacity-50 placeholder-[#C4C4C4] text-[#C4C4C4] w-full h-4 mb-[9px]"
                  {...register("email", {
                    required: true,
                    pattern: emailRegex,
                  })}
                />
                <img
                  className={cn(
                    "absolute right-[16px] top-[50%] translate-y-[-50%] fill-[#5660E5] text-[#5660E5]",
                    !errors.email && touchedFields.email ? "" : "hidden"
                  )}
                  src="/icons/form-tick.svg"
                />
              </div>
              <SignInPw register={register} />
            </div>
            <div className="mt-[61px] flex flex-col items-center justify-center w-full">
              <button
                onClick={onSubmit}
                className="h-[54px] w-[327px] rounded-full bg-primary hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              >
                <p className="font-mono font-[500]">SIGN IN</p>
              </button>
              <p className="mt-6 font-sans text-sm spacing-[-0.17px]">
                Or continue with
              </p>
              <button
                className="mt-[24px] bg-white w-[311px] h-[54px] rounded-sm shadow-lg flex items-center rounded-full justify-center gap-[15px]"
                onClick={getLinkedinToken}
              >
                <img src={linkedinLogo} alt="" />
                <p className="text-base text-black opacity-[54%] font-sans font-[500] leading-[24px]">
                  Continue with LinkedIn
                </p>
              </button>
              <div className="mt-6">
                <p className="font-sans text-sm">
                  Don’t have an account yet?{" "}
                  <a
                    onClick={() => navigate("/signup")}
                    className="text-primary font-[500] inline"
                  >
                    Create one now
                  </a>
                </p>
              </div>
              <div className="mt-8 md:mt-[59px]">
                <PrivacyPolicy />
              </div>
            </div>
          </form>
        </section>
        <div />
      </div>
      <div />
    </div>
  );
};

const SignInPw: FunctionComponent<{ register: any }> = ({ register }) => {
  const [pwView, setPwView] = React.useState(false);
  return (
    <div className="mt-[37px]">
      <label className="text-sm">Password</label>
      <div className="relative border-primary border-b h-[32px] mt-[1px]">
        <input
          type={pwView ? "text" : "password"}
          placeholder="Password"
          className="bg-transparent placeholder-opacity-50 placeholder-[#C4C4C4] text-[#C4C4C4] w-full h-4 mb-[9px]"
          {...register("password", { required: true })}
        />
        <button
          type="button"
          onClick={(e) => {
            console.log(e);
            setPwView((v) => !v);
          }}
        >
          <img
            className={cn("absolute right-[16px] top-[50%] translate-y-[-50%]")}
            src={!pwView ? "/icons/eye-crossed.svg" : "/icons/eye.svg"}
          />
        </button>
      </div>
      <button
        type="button"
        className="mt-2 hover:opacity-80 transition-opacity duration-200"
      >
        <p className="text-primary">Forgot Password?</p>
      </button>
    </div>
  );
};

export default SignIn;
