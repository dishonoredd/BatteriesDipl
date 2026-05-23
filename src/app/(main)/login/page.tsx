"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  email: string;
  password: string;
};

export default function LogInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormType>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    form.reset();
  };

  const emailError = form.formState.errors.email;
  const passwordError = form.formState.errors.password;

  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center bg-gray-50 max-sm:p-2">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Вход</h2>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="ivan@example.com"
            className={`
              w-full px-3 py-2 border rounded-md outline-none transition-colors
              ${
                emailError
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              }
            `}
            {...form.register("email", {
              required: "Это поле обязательное",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный email адрес",
              },
            })}
          />
          {emailError && (
            <p className="text-sm text-red-600 mt-1">{emailError.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Пароль
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className={`
                w-full px-3 py-2 border rounded-md outline-none transition-colors pr-10
                ${
                  passwordError
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                }
              `}
              {...form.register("password", {
                required: "Это поле обязательное",
                minLength: {
                  value: 8,
                  message: "Требуется как минимум 8 символов",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </button>
          </div>
          {passwordError && (
            <p className="text-sm text-red-600 mt-1">{passwordError.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
