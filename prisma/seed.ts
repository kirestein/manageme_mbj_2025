import {
  employeeGender,
  employeeMaritalStatus,
  PrismaClient,
} from "@prisma/client";
import { employees } from "./employeesData";

const prisma = new PrismaClient();

async function seedEmployees() {
  return employees.map(async (employee) =>
    prisma.employees.create({
      data: {
        id: employee.employeeId,
        createdAt: new Date(employee.createdAt),
        updatedAt: new Date(employee.updatedAt),
        user: {
          connect: { id: employee.userId },
        },
        employeeData: {
          create: {
            fullName: employee.employeeData.fullName,
            email: employee.employeeData.email,
            phone: employee.employeeData.mobile,
            employeeAddress: employee.employeeData.employeeAddress,
            employeeAddressNumber: employee.employeeData.employeeAddressNumber,
            employeeAddressComplement:
              employee.employeeData.employeeaddressComplement,
            employeeAddressCity: employee.employeeData.employeeAddressCity,
            employeeAddressState: employee.employeeData.employeeAddressState,
            employeeNeighborhood: employee.employeeData.employeeNeighborhood,
            birthday: employee.employeeData.birthday,
            cep: employee.employeeData.cep,
            gender: employee.employeeData.gender as employeeGender,
            maritalStatus: employee.employeeData
              .maritalStatus as employeeMaritalStatus,
            fatherName: employee.employeeData.fatherName,
            motherName: employee.employeeData.motherName,
          },
        },
      },
    })
  );
}
