import LoginForm from "@/app/components/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}

// Optional: Nice loading UI
function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="h-5 bg-gray-200 rounded w-64 mb-6"></div>
        <div className="h-12 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-12 bg-blue-200 rounded-full"></div>
      </div>
    </div>
  );
}