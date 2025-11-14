import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  const { email } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });
  return NextResponse.json({ exists: !!user });
}