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

export async function getEmployeeById(employeeId: string) {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  try {
    const employee = [];
    const employeeData = await prisma.employeeData.findFirst({
      where: {
        employeeId: employeeId,
      },
    });
    if (employeeData) {
      employee.push({ employeeData: employeeData });
    }
    const employeeContractData = await prisma.employeeContractData.findFirst({
      where: {
        employeeId: employeeId,
      },
    });
    if (employeeContractData) {
      employee.push({ employeeContractData: employeeContractData });
    }
    const employeeDocumentation = await prisma.employeeDocumentation.findMany({
      where: {
        employeeId: employeeId,
      },
    });
    if (employeeDocumentation) {
      employee.push({ employeeDocumentation: employeeDocumentation });
    }
    const employeeTraineeData = await prisma.employeeTraineeData.findFirst({
      where: {
        employeeId: employeeId,
      },
    });
    if (employeeTraineeData) {
      employee.push({ employeeTraineeData: employeeTraineeData });
    }

    return employee;
  } catch (error) {
    console.log(error);
  }
}
