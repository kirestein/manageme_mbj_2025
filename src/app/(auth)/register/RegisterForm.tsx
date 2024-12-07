'use client'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import { GiPadlock } from 'react-icons/gi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerScheema, RegisterScheema } from '@/lib/scheemas/registerScheema'

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterScheema>({
        resolver: zodResolver(registerScheema),
        mode: 'onTouched'
    })

    const onSubmit = (data: RegisterScheema) => {
        console.log(data)
    }

    return (
        <Card className='w-2/5 mx-auto bg-cyan-50'>
            <CardHeader className='flex flex-col items-center justify-center bg-orange-400'>
                <div className="flex flex-col gap-2 items-center text-cyan-700 font-bold">
                    <div className="flex flex-row items-center gap-3">
                        <GiPadlock size={30} />
                        <h1 className="text-4xl">Register</h1>
                    </div>
                    <p className="text-neutral-500">Welcome to St3 ManageMe</p>
                </div>
            </CardHeader>
            <CardBody>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <div className="space-y-4 text-cyan-700">
                        <Input
                            defaultValue=''
                            label='Name'
                            type='text'
                            variant='bordered'
                            {...register('name')}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message as string}
                        />
                        <Input
                            defaultValue=''
                            label='Email'
                            type='email'
                            variant='bordered'
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        <Input
                            defaultValue=''
                            label='Password'
                            type='password'
                            variant='bordered'
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button
                            type='submit'
                            color='success'
                            className='w-full'
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}

export default RegisterForm