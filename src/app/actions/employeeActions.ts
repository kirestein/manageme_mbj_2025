"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getEmployeeData() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  try {
    return prisma.employeeData.findMany();
  } catch (error) {
    console.log(error);
  }
}
