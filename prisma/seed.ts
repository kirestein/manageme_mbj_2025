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
        id: employee.employeeId as string | "1",
        createdAt: new Date(employee.createdAt),
        updatedAt: new Date(employee.updatedAt),
        user: {
          connect: { id: employee.userId || "cm4rhn9yk0000lv0oqk3m3pb3" },
        },
        employeeData: {
          create: {
            employeeDataId: String(employee.employeeData.employeeDataId),
            fullName: employee.employeeData.fullName,
            email: employee.employeeData.email || "teste@teste.com",
            phone: employee.employeeData.mobile,
            employeeAddress: employee.employeeData.employeeAddress,
            employeeAddressNumber: employee.employeeData.employeeAddressNumber,
            employeeAddressComplement:
              employee.employeeData.employeeAddressComplement,
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
        employeeDocumentation: {
          create: {
            documentationId: employee.employeeDocumentation.documentationId,
            rg: employee.employeeDocumentation.rg,
            rgEmitter: employee.employeeDocumentation.rgEmitter,
            cpf: employee.employeeDocumentation.cpf,
          },
        },
      },
    })
  );
}

async function main() {
  await seedEmployees();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
