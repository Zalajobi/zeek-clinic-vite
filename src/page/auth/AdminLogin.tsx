import { Fragment } from "react";
import useAdminLogin from "@hook/auth/useAdminLogin";
import { CustomTypography } from "@component/global/Typography";
import { toFormikValidate } from "zod-formik-adapter";
import { Form, Formik } from "formik";
import { LoginRequestSchema } from "@schema/auth";
import { CustomCheckBox, TextInput } from "@component/global/Inputs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { CustomButton } from "@component/global/Buttons";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
// @ts-ignore
import LoginImage from "@asset/svg/SignIn.svg";
import { ToasterConfig } from "@component/global/Toast";

const AdminLogin = () => {
  const {
    // Values
    initialValue,
    showPassword,
    isLoading,

    // Functions
    handleLogin,
    handleShowPassword,
  } = useAdminLogin();

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center h-full w-full grid grid-cols-1 gap-4 p-10 md:grid-cols-2 md:gap-20">
          <div className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37]">
            <div className="flex flex-col w-full">
              <CustomTypography
                variant={"h4"}
                weight="extrabold"
                className="text-[#111928] dark:text-white mb-1"
              >
                Welcome Back
              </CustomTypography>

              <div className="flex items-center w-3/4 mb-4">
                <CustomTypography
                  size={"sm"}
                  weight="bold"
                  className={`text-[#6B7280] dark:text-white mr-2`}
                  variant="h6"
                >
                  Find out more about us
                </CustomTypography>

                <a
                  className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer"
                  href="#"
                >
                  Here
                </a>
              </div>

              <Formik
                onSubmit={handleLogin}
                initialValues={initialValue}
                validate={toFormikValidate(LoginRequestSchema)}
                validateOnBlur
                isInitialValid={false}
              >
                <Formik
                  initialValues={initialValue}
                  onSubmit={handleLogin}
                  validate={toFormikValidate(LoginRequestSchema)}
                  validateOnBlur
                  validateOnMount
                >
                  {({
                    handleChange,
                    errors,
                    values,
                    isSubmitting,
                    touched,
                    isValid,
                  }) => {
                    return (
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (isValid) {
                            handleLogin(values);
                          }
                        }}
                      >
                        {/*Inputs*/}
                        <div className="w-full flex gap-4 my-3">
                          {/*Email*/}
                          <TextInput
                            type="text"
                            label="Email"
                            placeholder="JohnDoe@gmail.com"
                            size="lg"
                            name="email"
                            onChange={handleChange("email")}
                            error={touched.email ? errors?.email : undefined}
                          />

                          {/*Password*/}
                          <TextInput
                            label="Password"
                            size="lg"
                            name="password"
                            placeholder="********"
                            onChange={handleChange("password")}
                            show={showPassword}
                            icon={
                              showPassword ? (
                                <FaEyeSlash
                                  size={20}
                                  color={
                                    touched.email && errors?.email
                                      ? "red"
                                      : "white"
                                  }
                                  onClick={handleShowPassword}
                                />
                              ) : (
                                <FaEye
                                  size={20}
                                  color={
                                    touched.email && errors?.email
                                      ? "red"
                                      : "white"
                                  }
                                  onClick={handleShowPassword}
                                />
                              )
                            }
                            error={touched.email ? errors?.email : undefined}
                          />
                        </div>

                        {/*OR*/}
                        <div className="flex flex-row w-full my-8 items-center">
                          <div className="w-[45%] h-px bg-[#E5E7EB]" />

                          <CustomTypography
                            className={`w-10 text-center dark:text-white`}
                            variant="p"
                            weight="semibold"
                          >
                            or
                          </CustomTypography>

                          <div className="w-[45%] h-px bg-[#E5E7EB]" />
                        </div>

                        {/*Login with Google*/}
                        <CustomButton
                          variant="outlined"
                          className={`text-[#111928] font-medium border-black items-center justify-center dark:text-white my-3`}
                          fullWidth={true}
                          startIcon={<FcGoogle size={20} className={`mr-2`} />}
                          colorScheme="none"
                        >
                          Login with Google
                        </CustomButton>

                        {/*GitHub Sign in*/}
                        <CustomButton
                          variant="outlined"
                          className={`text-[#111928] font-medium border-black items-center justify-center dark:text-white my-3`}
                          fullWidth={true}
                          startIcon={<GrGithub size={20} className={`mr-2`} />}
                          colorScheme="none"
                        >
                          Login with Github
                        </CustomButton>

                        {/*RememberMe*/}
                        <div
                          className={`w-full grid grid-cols-2 gap-4 items-center my-2`}
                        >
                          <CustomCheckBox
                            label="Remember Me"
                            name="rememberMe"
                            color="blue"
                            onChange={handleChange("rememberMe")}
                          />

                          <div className={`flex justify-end`}>
                            <a
                              className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer"
                              href="#"
                            >
                              forgot password
                            </a>
                          </div>
                        </div>

                        <CustomButton
                          size="lg"
                          className="w-full mb-4 flex items-center justify-center"
                          loading={isLoading}
                          type="submit"
                          disabled={isSubmitting || !isValid}
                          colorScheme="primary"
                          variant="filled"
                        >
                          Login
                        </CustomButton>
                      </Form>
                    );
                  }}
                </Formik>
              </Formik>
            </div>
          </div>

          <div className="w-full flex-row justify-center hidden md:flex">
            <img src={LoginImage} alt={`Login Page`} />
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default AdminLogin;
