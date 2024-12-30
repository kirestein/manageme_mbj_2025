import { getEmployeeById } from '@/app/actions/employeeActions'
import { notFound } from 'next/navigation'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const EmployeePage = async ({ params }: { params: { employeeId: string } }) => {
    const employee = await getEmployeeById(params.employeeId)

    if (!employee) {
        return notFound();
    }

    return (
        <div className="">
            <Card className='bg-teal-100'>
                <CardHeader className='flex justify-center'>
                    <h1 className='text-4xl font-bold text-teal-600'>{employee[0].employeeData?.fullName}</h1>
                </CardHeader>
                <hr className="" />
                <CardBody>
                    <h2 className='text-2xl font-bold mb-4 text-teal-500'>Employee Data:</h2>
                    <div className="grid-cols-3 grid gap-4">
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">E-mail:</span>  {employee[0].employeeData?.email}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Nome no crachá:</span>  {employee[0].employeeData?.tagName}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Sobrenome no crachá:</span>  {employee[0].employeeData?.tagLastName}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold ">Data de nascimento:</span>  {employee[0].employeeData?.birthday ? new Date(employee[0].employeeData.birthday).toLocaleDateString(
                                    'pt-BR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Contatos:</span>  {employee[0].employeeData?.mobile} | {employee[0].employeeData?.phone}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Endereço:</span>
                            </p>
                            <div className="flex items-center justify-center text-xl gap-2">
                                <ul>
                                    <li className=""><span className="font-bold">CEP:</span>  {employee[0].employeeData?.cep}</li>
                                    <li className=""><span className="font-bold">Rua:</span>  {employee[0].employeeData?.employeeAddress}, {employee[0].employeeData?.employeeAddressNumber}</li>
                                    {employee[0].employeeData?.employeeAddressComplement && <li className=""><span className="font-bold">:</span>  {employee[0].employeeData?.employeeAddressComplement}</li>}
                                    <li className=""><span className="font-bold">Bairro:</span>  {employee[0].employeeData?.employeeNeighborhood}</li>
                                    <li className=""><span className="font-bold">Cidade:</span>  {employee[0].employeeData?.employeeAddressCity}</li>
                                    <li className=""><span className="font-bold">Estado:</span>  {employee[0].employeeData?.employeeAddressState}</li>
                                </ul>
                            </div>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Gênero:</span>  {employee[0].employeeData?.gender}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Nome do pai:</span>  {employee[0].employeeData?.fatherName}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Nome da mãe:</span>  {employee[0].employeeData?.motherName}
                            </p>
                        </div>
                        {/* segunda coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Formação:</span>  {employee[0].employeeData?.graduation}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Cor de pele:</span>  {employee[0].employeeData?.skinColor}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Formação:</span>  {employee[0].employeeData?.maritalStatus}
                            </p>
                            {
                                employee[0].employeeData?.maritalStatus === 'CASADO' && (
                                    <>
                                        <p className='flex items-center text-xl gap-2'>
                                            <span className="font-bold">Nome do conjugê:</span>  {employee[0].employeeData?.partnerName}
                                        </p>
                                        <p className='flex items-center text-xl gap-2'>
                                            <span className="font-bold">RG do conjugê:</span>  {employee[0].employeeData?.partnerRg}
                                        </p>
                                        <p className='flex items-center text-xl gap-2'>
                                            <span className="font-bold">CPF do conjugê:</span>  {employee[0].employeeData?.partnerCpf}
                                        </p>
                                        <p className='flex items-center text-xl gap-2'>
                                            <span className="font-bold ">Data de nascimento do conjugê:</span>  {employee[0].employeeData?.partnerBirthday ? new Date(employee[0].employeeData.partnerBirthday).toLocaleDateString(
                                                'pt-BR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit'
                                            }) : 'N/A'}
                                        </p>

                                    </>

                                )
                            }
                            {
                                employee[0].employeeData?.deficiency && (
                                    <p className='flex items-center text-xl gap-2'>
                                        <span className="font-bold">RG:</span>  {employee[0].employeeData?.deficiencyDescription}
                                    </p>

                                )
                            }
                        </div>
                        {/* terceira coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Vale alimentação:</span>  {employee[0].employeeData?.mealValue?.toString()}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Nacionalidade:</span>  {employee[0].employeeData?.nationality}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Naturalidade:</span>  {employee[0].employeeData?.naturalness}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Vale transporte:</span>  {employee[0].employeeData?.transportValue?.toString()}
                            </p>
                        </div>
                    </div>
                    <hr className="mt-4" />
                    <h2 className='text-2xl font-bold my-4 text-teal-500'>Employee Contract Data:</h2>
                    <div className="grid-cols-3 grid gap-4">
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Função:</span>  {employee[0].employeeContractData?.jobFunctions ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Cargo:</span>  {employee[0].employeeContractData?.jobPosition ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold ">Data de contratação:</span>  {employee[0].employeeContractData?.admissionDate ? new Date(employee[0].employeeContractData?.admissionDate).toLocaleDateString(
                                    'pt-BR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Salário:</span>  R${employee[0].employeeContractData?.salary?.toString()}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Banco:</span>  R${employee[0].employeeContractData?.salaryBank}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Agência:</span>  R${employee[0].employeeContractData?.salaryAgency}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Conta {employee[0].employeeContractData?.salaryAccountType}:</span>  R${employee[0].employeeContractData?.salaryAccount}
                            </p>
                        </div>
                        {/* segunda coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">IRPF:</span>  {employee[0].employeeContractData?.IRPF}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Horas diárias:</span>  {employee[0].employeeContractData?.dailyHours}
                            </p>
                            {
                                employee[0].employeeContractData?.jobPosition === 'PROFESSOR' ? (
                                    <p className='flex items-center text-xl gap-2'>
                                        <span className="font-bold">Aulas semanais:</span>  {employee[0].employeeContractData?.weeklyClasses}
                                    </p>
                                ) : (
                                    <p className='flex items-center text-xl gap-2'>
                                        <span className="font-bold">Horas semanais:</span>  {employee[0].employeeContractData?.weeklyHours}
                                    </p>
                                )

                            }
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Horas mensais:</span>  {employee[0].employeeContractData?.monthlyHours}
                            </p>
                        </div>
                        {/* terceira coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold ">Data de de expiração do contrato:</span>  {employee[0].employeeContractData?.contractExpirationDate ? new Date(employee[0].employeeContractData?.contractExpirationDate).toLocaleDateString(
                                    'pt-BR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Têm acúmulo com outra empresa:</span>  {employee[0].employeeContractData?.hasAccumulate ? 'Sim' : 'Não'}
                            </p>
                            {
                                employee[0].employeeContractData?.hasAccumulate && (
                                    <p className='flex items-center text-xl gap-2'>
                                        <span className="font-bold">Onde acumula:</span>  {employee[0].employeeContractData?.hasAccumulateCompany}
                                    </p>

                                )
                            }
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Renda familiar:</span>  {employee[0].employeeContractData?.familySalary?.toString()}
                            </p>
                        </div>
                    </div>
                    <hr className="mt-4" />
                    <h2 className='text-2xl font-bold my-4 text-teal-500'>Employee Documentation:</h2>
                    <div className="grid-cols-3 grid gap-4">
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">RG:</span>  {employee[0].employeeDocumentation?.[0]?.rg ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Data de emissão:</span>  {employee[0].employeeDocumentation?.[0]?.rgEmissionDate ? new Date(
                                    employee[0].employeeDocumentation?.[0]?.rgEmissionDate).toLocaleDateString(
                                        'pt-BR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Orgão emissor:</span>  {employee[0].employeeDocumentation?.[0]?.rgEmitter ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">CPF:</span>  {employee[0].employeeDocumentation?.[0]?.cpf ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">PIS / PASEP:</span>  {employee[0].employeeDocumentation?.[0]?.pisPasep ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Número da carteira de trabalho:</span>  {employee[0].employeeDocumentation?.[0]?.ctps_serie ?? 'N/A'}
                            </p>
                        </div>
                        {/* segunda coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Título de eleitor:</span>  {employee[0].employeeDocumentation?.[0]?.voterTitle ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Data de emissão do título:</span>  {employee[0].employeeDocumentation?.[0]?.voterEmission ? new Date(
                                    employee[0].employeeDocumentation?.[0]?.voterEmission).toLocaleDateString(
                                        'pt-BR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Seção:</span>  {employee[0].employeeDocumentation?.[0]?.voterSection ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Zona:</span>  {employee[0].employeeDocumentation?.[0]?.voterZone ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Reservista:</span>  {employee[0].employeeDocumentation?.[0]?.militaryCertificate ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Plano de saúde:</span>  {employee[0].employeeDocumentation?.[0]?.healthCard_number ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Número do plano de saúde:</span>  {employee[0].employeeDocumentation?.[0]?.healthCard_number ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Zona:</span>  {employee[0].employeeDocumentation?.[0]?.voterZone ?? 'N/A'}
                            </p>
                        </div>
                        {/* terceira coluna */}
                        <div className="flex flex-col col-span-1">
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Possui hanilitação:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicense ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Data de emissão:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicenseEmissionDate ? new Date(
                                    employee[0].employeeDocumentation?.[0]?.driversLicenseEmissionDate).toLocaleDateString(
                                        'pt-BR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Data de expiração:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicenseExpirationDate ? new Date(
                                    employee[0].employeeDocumentation?.[0]?.driversLicenseExpirationDate).toLocaleDateString(
                                        'pt-BR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }) : 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Categoria:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicenseCategory ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">Número da carteira de motorista:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicenseNumber ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">RG:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicense ?? 'N/A'}
                            </p>
                            <p className='flex items-center text-xl gap-2'>
                                <span className="font-bold">RG:</span>  {employee[0].employeeDocumentation?.[0]?.driversLicense ?? 'N/A'}
                            </p>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <p>Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default EmployeePage