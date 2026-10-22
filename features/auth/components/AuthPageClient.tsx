
"use client";


import { usePuterStore } from "@/lib/puter";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import { AuthForm } from "./AuthForm";

export default function AuthPage() {
  const { isLoading, auth } = usePuterStore();

  useAuthRedirect(auth.isAuthenticated);

  return (
    <AuthForm
      isLoading={isLoading}
      isAuthenticated={auth.isAuthenticated}
      onSignIn={auth.signIn}
      onSignOut={auth.signOut}
    />
  );
}
