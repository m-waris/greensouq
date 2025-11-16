"use client";
import SignInForm from "@/app/components/SigninForm";
import { Suspense } from "react";

export default function SignIn() {

 return (
    <Suspense  >
      <SignInForm />
    </Suspense>
  );
}
