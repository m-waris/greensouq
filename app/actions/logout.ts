// app/actions/logout.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  (await cookies()).delete("next-auth.session-token");
  // Also delete secure version in production
  (await
        // Also delete secure version in production
        cookies()).delete("__Secure-next-auth.session-token");
  redirect("/");
}