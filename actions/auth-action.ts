"use server";

import { signIn } from "@/auth";
import db from "@/lib/db";
import { loginSchema, registerSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    console.log(values);
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message || error.message };
    }
    return { error: "error 500" };
  }
};

export const registerAction = async (values: z.infer<typeof registerSchema>) => {
  try {

    const { data, success } = registerSchema.safeParse(values);
    if (!success) {
      return { error: "Invalid data" };
    }

    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return { error: "User already exists" };
    }

    const password = await bcrypt.hash(data.password, 10);

    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: password,
      },
    });

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return { success: true };

  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message || error.message };
    }
    return { error: "error 500" };
  }
};