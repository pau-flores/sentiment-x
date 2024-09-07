"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../utils/useAuth";
import Header from "../components/Header";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="text-center text-3xl font-semibold text-gray-800">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-2">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 text-md font-semibold rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-sm text-center">
              <Link
                href="/sign-up"
                className="font-semibold text-gray-800 hover:text-gray-900"
              >
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
