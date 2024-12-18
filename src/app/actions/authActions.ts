"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginScheema } from "@/lib/scheemas/loginScheema";
import {
  registerScheema,
  RegisterScheema,
} from "@/lib/scheemas/registerScheema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

export async function loginUser(
  data: LoginScheema
): Promise<ActionResult<string>> {
  try {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);

    return { status: "success", data: "Logged In" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { status: "error", error: "Invalid credentials" };
        default:
          return { status: "error", error: "Unknown error" };
      }
    } else {
      return { status: "error", error: "Unknown error again" };
    }
  }
}

export async function registerUser(
  data: RegisterScheema
): Promise<ActionResult<User>> {
  try {
    const validated = registerScheema.safeParse(data);
    if (!validated.success) {
      return { status: "error", error: validated.error.errors };
    }

    const { name, email, password } = validated.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return { status: "error", error: "User already exists" };
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { status: "success", data: user };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "Something went wrong" };
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getUserById(id: number): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id: id.toString(),
    },
  });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
