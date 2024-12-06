"use client";
import React from "react";
import { LoginReq, LoginReqType } from "@/schemas/auth.schemas";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const router = useRouter();
  const {register,handleSubmit,formState: { errors },} = useForm <LoginReqType>({
    resolver: zodResolver(LoginReq),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Form submitted:", data);
    // TODO: Gửi dữ liệu đến backend hoặc xử lý đăng nhập
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    console.log("Sign in with Google");
    // TODO: Xử lý logic đăng nhập Google
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email Input */}
      <div className="mb-2">
        <label htmlFor="email" className="text-gray-700 font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
          className={`w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="text-gray-700 font-semibold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          className={`w-full p-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Login Button */}
      <div className="flex justify-between items-center mb-2">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </div>

      {/* Google Login */}
      <div className="flex justify-center items-center mb-2">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          Signup with Google
        </button>
      </div>

      {/* Links */}
      <div className="text-center">
        <Link href="/recovery" className="text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </div>
      <div className="text-center">
        <span className="text-gray-600">Don&apos;t have an account yet?</span>
        <Link href="/register" className="text-blue-500 hover:underline ml-1">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
