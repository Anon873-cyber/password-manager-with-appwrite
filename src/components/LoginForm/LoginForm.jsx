import React from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config.js'
import authService from '../../appwrite/auth.js'
import { Input, PasswordInput, Button } from '../index.js'

const LoginForm = () => {

    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    // Email/password login
    const login = async (data) => {
        try {

            await service.login(data.email, data.password)

            console.log("Login successful")

        } catch (error) {

            console.log(error)

        }
    }

    // Google login
    const googleLogin = async () => {

        try {

          authService.loginWithGoogle()

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <form onSubmit={handleSubmit(login)}>

            <div className="w-full max-w-md mx-auto flex flex-col gap-4 ">

                <h1 className="text-2xl font-semibold text-center">
                    Login
                </h1>

                {/* Email */}
                <Input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-green-400 rounded-xl px-4 py-2.5 bg-white outline-none "
                    {...register("email", { required: true })}
                />

                {/* Password */}
                <PasswordInput
                    placeholder="Enter password"
                    className="w-full  bg-white outline-none border  border-green-400"
                    {...register("password", { required: true })}
                />

                {/* Login Button */}
                <Button
                    type="submit"
                    className="bg-green-600 text-white rounded-xl p-2"
                >
                    Login
                </Button>

                {/* Divider */}
                <div className="text-center text-sm text-gray-500">
                    OR
                </div>

                {/* Google Login */}
                <Button
                    type="button"
                    className="bg-white border border-gray-400 rounded-xl p-2"
                    onClick={googleLogin}
                >
                    Login with Google
                </Button>

            </div>

        </form>

    )
}

export default LoginForm