"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../utils/useAuth";
import Spinner from "./Spinner";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Spinner />;
  }

  return user ? <>{children}</> : null;
}
