import React from 'react'
import EmployeesTable from './EmployeesTable'
import { getEmployeeData } from '../actions/employeeActions'
import { employeeData } from '@prisma/client'



const EmployeesPage = async () => {
    const employeesData: employeeData[] = (await getEmployeeData()) || []
    return (
        <div>
            {employeesData && <EmployeesTable employeesData={employeesData} />}
        </div>
    )
}

export default EmployeesPage