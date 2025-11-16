"use client";
import RegisterForm from "@/app/components/RegisterForm";
import { Suspense } from "react";

export default function SignIn() {

 return (
    <Suspense  >
      <RegisterForm />
    </Suspense>
  );
}
